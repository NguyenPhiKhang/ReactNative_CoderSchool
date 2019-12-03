import React from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';

const HEIGHT_STATUSBAR = Platform.OS == 'ios' ? 50 : StatusBar.currentHeight;
const valueUnit = 23000;

//Option
// const ConversionTypeButton = props => {
//   const fromFlag = props.from === 'usd' ? '🇺🇲' : '🇻🇳';
//   const toFlag = props.to === 'usd' ? '🇺🇲' : '🇻🇳';
//   return (
//     <TouchableOpacity style={styles.button} >
//       <Text>
//         {fromFlag} to {toFlag}
//       </Text>
//     </TouchableOpacity>
//   );
// };

//Style Different
//Option 1:
const ConversionTypeButton = ({ from, to, fromCurrency, toCurrency, setConversionCurrencies}) => {
  const fromFlag = from === 'usd' ? '🇺🇲' : '🇻🇳';
  const toFlag = to === 'usd' ? '🇺🇲' : '🇻🇳';

  const isSelectedConversionType = fromCurrency === from && toCurrency === to;
  const backgroundColor = isSelectedConversionType ? 'lightblue' : null;
  const conditionalButtonStyle = { backgroundColor };

  return (
    <TouchableOpacity style={[styles.button, conditionalButtonStyle]}
      onPress={() => setConversionCurrencies(from, to)} >
      <Text>
        {fromFlag} to {toFlag}
      </Text>
    </TouchableOpacity>
  );
};

const FormattedCurrency = props => {
  const format = props.type === 'usd' ? 'us' : 'vn';
  const currency = props.type === 'usd' ? 'USD' : 'VND';
  const flag = props.type === 'usd' ? '🇺🇸' : '🇻🇳';

  const formatter = new Intl.NumberFormat(format, {
    currency,
    style: 'currency'
  });

  return (
    <Text style={styles.currencyText}>
      {formatter.format(props.value)} {flag}
    </Text>
  );
};

const ValueConvertText = props => {
  return (
    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      <Text>Current currency:</Text>
      <FormattedCurrency type={props.fromCurrency} value={props.currentCurrencyValue}/>
      <Text>Conversion currenecy:</Text>
      <FormattedCurrency type={props.toCurrency} value={props.convertedCurrencyValue}/>
    </View>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCurrencyValue: 0,
      conversionCurrencyValue: 0,
      fromCurrency: 'vnd',
      toCurrency: 'usd',
    };
  }

  setConversionCurrencies = (from, to) => {
    this.setState({
      fromCurrency: from,
      toCurrency: to
    },
      () => {
        this.onCurrencyChange(this.state.currentCurrencyValue);
      }
    );
  };

  onCurrencyChange = (currency) => {
    let value;
    if (this.state.fromCurrency === 'vnd') {
      value = currency / 23000;
    } else {
      value = 23000 * currency;
    }
    this.setState({
      currentCurrencyValue: currency,
      conversionCurrencyValue: value
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          // translucent={false} //only working for Android
          // hidden={false}
          barStyle="dark-content"
        //backgroundColor='#00BCD4'
        />
        <Text style={{ marginBottom: 10, marginTop: HEIGHT_STATUSBAR, }}>Please enter the value of the currency you want to convert</Text>
        <TextInput
          autoFocus={true}
          keyboardType='number-pad'
          textAlign="center"
          placeholder="100,000,000 VND"
          selectionColor="red"
          style={{
            height: 60,
            padding: 5,
            width: 300,
            fontSize: 35,
            borderWidth: 1,
            borderColor: 'lightblue',
          }}
          onChangeText={(currency) => {
            this.onCurrencyChange(currency)
            // let currentValue; let convertValue;
            // if (text != '') {
            //   currentValue = text; convertValue = text * valueUnit;
            // }
            // else {
            //   currentValue = '0.00'; convertValue = '0.00';
            // }
            // this.setState({
            //   currentCurrencyValue: currentValue,
            //   conversionCurrencyValue: convertValue,
            // });
          }}
        />
        <ConversionTypeButton to='vnd' from='usd' 
        toCurrency={this.state.toCurrency} 
        fromCurrency={this.state.fromCurrency}
        setConversionCurrencies={this.setConversionCurrencies} />
        <ConversionTypeButton to='usd' from='vnd' 
        toCurrency={this.state.toCurrency} 
        fromCurrency={this.state.fromCurrency}
        setConversionCurrencies={this.setConversionCurrencies}/>
        <ValueConvertText
          toCurrency={this.state.toCurrency}
          fromCurrency={this.state.fromCurrency}
          currentCurrencyValue={this.state.currentCurrencyValue}
          convertedCurrencyValue={this.state.conversionCurrencyValue}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fffc',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
  },
  button: {
    height: 35,
    width: 200,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'lightblue',
    justifyContent: 'center',
  },
  currencyText: {
    fontSize: 40,
    color: 'green',
    fontWeight: 'bold',
  },
});
