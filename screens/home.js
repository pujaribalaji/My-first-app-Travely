import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TextInput, Image, SafeAreaView } from 'react-native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    // Perform the search logic here based on the text input
    // For example, you can filter a list of items based on their names
    const filteredResults = yourDataArray.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <View >
      <View style={styles.searchBar}>
        <Image source={require('../assets/search.png')} />
        <TextInput
          style={styles.searchInput}
          onChangeText={handleSearch}
          value={searchQuery}
          placeholder="Search For Places"
        />
      </View>
      <FlatList
        data={searchResults}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <View >
        <Text style={styles.title}>Hi, Balaji</Text>
        <Text style={styles.title1}>Alberto, Canada</Text>
      </View>
      <View>
        <Image style={styles.img1} source={require('../assets/bell.png')} />
      </View>
      <View>
        <Image style={styles.img2} source={require('../assets/profile.png')} />
      </View>
      <SearchScreen />
      <View style={styles.col1}>
        <Text style={{marginLeft:"09%" , marginTop:20 , fontSize:19, fontWeight:'bold'}}>Categories</Text>
        <Text style={{marginLeft:"72%" , marginTop:-21 , fontSize:19,fontWeight:'bold'}}>View all</Text>
      </View>
      <View style={styles.cat}>
      <View style={styles.round}>
        <Image style={{marginLeft:14 , marginTop:7}} source={require('../assets/bed.png')}></Image>
        <Text style={{marginLeft:4, marginTop:20, fontSize:17, fontWeight:'bold', }}>Rooms</Text>
      </View>
      <View style={styles.round}>
        <Image style={{marginLeft:12 , marginTop:13}} source={require('../assets/hotels.png')}></Image>
        <Text style={{marginLeft:8, marginTop:15, fontSize:17, fontWeight:'bold', }}>Hotels</Text>
      </View>
      <View style={styles.round}>
        <Image style={{marginLeft:12 , marginTop:13}} source={require('../assets/Ing.png')}></Image>
        <Text style={{marginLeft:4, marginTop:15, fontSize:16, fontWeight:'bold', }}>Grocery</Text>
      </View>
      <View style={styles.round}>
        <Image style={{marginLeft:12 , marginTop:13}} source={require('../assets/parks.png')}></Image>
        <Text style={{marginLeft:8, marginTop:15, fontSize:17, fontWeight:'bold', }}>Parks</Text>
      </View>
      </View> 
      <View style={styles.col2}>
        <Text style={{marginLeft:"09%" , marginTop:40 , fontSize:19, fontWeight:'bold'}}>Popular</Text>
        <Text style={{marginLeft:"72%" , marginTop:-19 , fontSize:15,fontWeight:'bold'}}>View all</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    fontWeight: '700',
    padding: 27,
  },
  title1: {
    fontSize: 13,
    padding: 30,
    marginTop: -59,
    color: '#B7B7B7',
  },
  img1: {
    marginTop: -77,
    marginLeft: '65%',
    display: 'flex',
  },
  img2: {
    marginLeft: '80%',
    display: 'flex',
    marginTop: -80,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor:'#EFEFEF',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginLeft: 30,
    marginRight:30,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
  col1:{
    display:'flex',
  },
  round:{
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFF',
    marginLeft:25,
    marginTop:20,
  },
  cat:{
    display:'flex',
    flexDirection:'row'
  },
  col2:{
    display:'flex'
  }
  
 
 
});
