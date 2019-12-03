import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

const feedData = [
  {
    id: 1,
    name: 'CoderSchool',
    image: require('./assets/1.jpeg'),
    likeCount: 128,
    avatar: require('./assets/ninja_avatar.png')
  },
  {
    id: 2,
    name: 'Whoami',
    image: require('./assets/2.jpeg'),
    likeCount: 20,
    avatar: require('./assets/ninja_avatar.png')
  },
  {
    id: 3,
    name: 'Khang',
    image: require('./assets/3.jpeg'),
    likeCount: 20,
    avatar: require('./assets/ninja_avatar.png')
  },
  {
    id: 4,
    name: '17520616',
    image: require('./assets/4.jpeg'),
    likeCount: 20,
    avatar: require('./assets/ninja_avatar.png')
  },
  {
    id: 5,
    name: '9997',
    image: require('./assets/5.jpeg'),
    likeCount: 20,
    avatar: require('./assets/ninja_avatar.png')
  },
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ flex: 0.1 }}></View>
          <Image
            style={styles.imgHeader}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
            }}
            resizeMode='contain'
          />
          <Feather style={{ paddingBottom: 5, flex: 0.1, }} name="inbox" size={27} color="black" />
        </View>
        <View style={styles.body} >
          <ScrollView style={{paddingLeft: 10, paddingRight: 10,}}>
          {feedData.map(feed => {
            return (
              <View key={feed.id} style={styles.feedItem}>
                <View style={styles.avatarWrapper}>
                  <Image style={styles.avatarImage} source={feed.avatar} resizeMode='cover' />
                  <Text style={styles.posterName}>{feed.name}</Text>
                </View>
                <View style={styles.imageWrapper}>
                  <Image style={styles.imagePoster} source={feed.image} resizeMode='cover' />
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 1, height: 50, backgroundColor: '#fff', alignItems: 'center', }}>
                  <Feather style={{ paddingLeft: 10 }} name="heart" size={32} color="black" />
                  <Feather style={{ paddingLeft: 10 }} name="message-square" size={32} color="black" />
                  <Feather style={{ paddingLeft: 10 }} name="share" size={32} color="black" />
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 1, height: 40, backgroundColor: '#fff', alignItems: 'center', }}>
                  <AntDesign style={{ paddingLeft: 10 }} name="heart" size={27} color="black" />
                  <Text style={{fontWeight:'bold', paddingLeft: 10,}}>{feed.likeCount} likes</Text>
                </View>
              </View>
            )
          })}
        </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: '#f3f6fa',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  imgHeader: {
    flex: 0.8,
    width: null,
    height: 40,
  },
  body: {
    flex: 0.9,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  feedItem: {
    backgroundColor: '#DDDDDD',
    flexDirection: 'column',
  },
  avatarWrapper: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: "#fff",
  },
  avatarImage: {
    width: 60,
    height: 60,
    marginTop: 15,
    marginLeft: 10,
  },
  posterName: {
    fontWeight: '500',
    paddingTop: 35,
    paddingLeft: 10,
  },
  imageWrapper: {
    height: 300,
  },
  imagePoster: {
    flex: 1,
    width: null,
    height: null,
  },
});
