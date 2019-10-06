import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
  { id: 1, imgSource: require('./assets/1.jpeg') },
  { id: 2, imgSource: require('./assets/2.jpeg') },
  { id: 3, imgSource: require('./assets/3.jpeg') },
  { id: 4, imgSource: require('./assets/4.jpeg') },
  { id: 5, imgSource: require('./assets/5.jpeg') },
  { id: 6, imgSource: require('./assets/6.jpeg') },
  { id: 7, imgSource: require('./assets/7.jpeg') },
  { id: 8, imgSource: require('./assets/8.jpeg') },
  { id: 9, imgSource: require('./assets/9.jpeg') },
  { id: 10, imgSource: require('./assets/10.jpeg') },
];

const centerImgData = Math.floor(imgData.length / 2);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.imgAvatar}
            source={require('./assets/user_avatar.jpeg')} />
        </View>
        <View style={styles.infoGroup}>
          <Text style={styles.nameText}>Nguyễn Phi Khang</Text>
          <Text style={styles.jobText}>Software Engineer</Text>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.followButton} onPress={()=>Alert.alert("Followed")}>
              <Text style={{ fontSize: 18, color: '#fff' }}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sendButton} onPress={()=>Alert.alert("Message sended")}>
              <MaterialIcons name='send' size={22} color='#fff' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.statisticGroup}>
        <View style={styles.photosWrapper}>
          <Text style={styles.countPhotos}>210</Text>
          <Text style={{ color: POLO_BLUE_COLOR, }}>Photos</Text>
        </View>
        <View style={styles.followersWrapper}>
          <Text style={styles.countFollowers}>15K</Text>
          <Text style={{ color: POLO_BLUE_COLOR, }}>Followers</Text>
        </View>
        <View style={styles.followingWrapper}>
          <Text style={styles.countFollowing}>605</Text>
          <Text style={{ color: POLO_BLUE_COLOR, }}>Following</Text>
        </View>
      </View>
      <View style={styles.imageGroup}>
        <ScrollView contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}>
        <View >
            {imgData.slice(0, centerImgData).map(item=>{
              return <Image 
              key={item.id}
              source={item.imgSource}
              style={styles.sortImages}/>
            })}
        </View>
        <View>
            {imgData.slice(centerImgData).map(item=>{
              return <Image 
              key = {item.id}
              source={item.imgSource}
              style={styles.sortImages}/>
            })}
        </View>
        </ScrollView>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  header: {
    flex: 0.2,
    flexDirection: 'row',
  },
  statisticGroup: {
    flex: 0.15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  imageGroup: {
    flex: 0.65,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imgAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  imageWrapper: {
    flex: 0.4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoGroup: {
    flex: 0.6,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingBottom: 15,
  },
  followButton: {
    backgroundColor: FOLLOW_COLOR,
    width: 110,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowRadius: 2,
    elevation: 5,
  },
  sendButton: {
    backgroundColor: SEND_MESSAGE_COLOR,
    width: 50,
    height: 30,
    marginLeft: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowRadius: 2,
    elevation: 5,
  },
  buttonWrapper: {
    flexDirection: 'row',
    marginTop: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  jobText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: POLO_BLUE_COLOR,
  },
  photosWrapper: {
    alignItems: 'center',
  },
  followersWrapper: {
    alignItems: 'center',
  },
  followingWrapper: {
    alignItems: 'center',
  },
  countPhotos: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  countFollowers: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  countFollowing: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sortImages: {
    width: 160,
    height: 160,
    margin: 10,
    borderRadius: 10,
  }
});
