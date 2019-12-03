import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WeatherCard from './components/WeatherCard';

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      loading: true,
      location: {
        name: "",
        main: { temp: "" },
        wind: { speed: "" },
        weather: [{ main: "", description: "" }]
      }
    }
  }

  componentDidMount() {
    this.getLocationAsync();
    //console.log("location ", this.state.location);
  }

  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      return;
    }

    const location = await Location.getCurrentPositionAsync();
    this.getWeather(10.817141, 106.707954);
  };

  getWeather = (latitude, longitude, imgUrl = "") => {
    this.setState({ loading: true }, async () => {
      const API_KEY = "3de6162d3745365b168ade2bbe4e1d66";
      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
      try {
        const response = await fetch(api);
        const jsonData = await response.json();
        this.setState({ location: { ...jsonData, imgUrl }, loading: false })
        //console.log("location ", this.state.location);
      } catch (error) {
        this.setState({ error: true, loading: false })
      }
    })
  };


  render() {
    //console.log("location ", this.state.location);
    return (
      <View style={styles.bg}>
        <WeatherCard error={this.state.error} loading={this.state.loading} location={this.state.location} />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "black"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  weatherContainer: {
    padding: 20,
    width: "90%",
    borderWidth: 1,
    maxWidth: "90%",
    minHeight: "20%",
    marginTop: "70%",
    borderRadius: 25,
    marginBottom: "2%",
    borderColor: "white",
    backgroundColor: "rgba(0,0,0,0.4)"
  },
  text: {
    fontSize: 20,
    color: "white",
    marginLeft: 10,
    fontWeight: "bold"
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  cityContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  cityName: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  cityButton: {
    margin: 3,
    height: 40,
    padding: 3,
    width: "25%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  tempRow: {
    alignSelf: "center",
    flexDirection: "row"
  },
  locationText: {
    fontSize: 25,
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  currentLocation: {
    margin: 3,
    height: 40,
    padding: 3,
    width: "72.5%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(20,33,61,0.6)"
  }
});