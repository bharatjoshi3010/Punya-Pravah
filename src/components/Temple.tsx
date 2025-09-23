import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { data } from '../assets/templeList'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
export default function Temple() {
  return (
    <View style={styles.pagebg}>
    <FlatList
          style={styles.flatList}
          numColumns={1}
          data = {data}
          contentContainerStyle={{ paddingBottom: 200 }}
          keyExtractor = {item => item.id.toString()}
          renderItem={({item}) => {
            console.log(item.imageURL)
            console.log(screenWidth)
            return (
            <View style={styles.card}>
              <View style={styles.imageView}>
            <Image
            style={styles.cardImage}
            source={
              {
                uri : item.imageURL
              }
            }
            />
            </View>
            <View style={styles.details}>
            <View style={styles.name}>
            <Text style={styles.nameTxt}>{item.name}</Text>
            </View>
            <View style={styles.loc}>
            <Text style={styles.locTxt}>{item.location}</Text>
            </View>
            <View style={styles.ff}>
            <Text style={styles.ffTxt}><Text style={{fontWeight : '800'}}>Famous for : </Text>{item.famousFor}</Text>
            </View>
            </View>
            <View style={styles.btns}>
              
              <TouchableOpacity>
                <View style={[styles.dpbtn, styles.btn]}>
                <Text style={styles.btnText}>Add to Dreamplace</Text>
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity>
                <View style={[styles.pdbtn, styles.btn]}>
                <Text style={styles.btnText}>Plan Darshan</Text>
                </View>
              </TouchableOpacity>
              
            </View>
            </View>
  )}}

          />  
    </View>  
  )
}

const styles = StyleSheet.create({
  pagebg:{
    backgroundColor : '#FAA533',
  },
  flatList:{
    // marginBottom: 800
    // paddingEnd : 50
    // paddingBottom: 20
  },
  card:{
    marginTop: 10,
    marginHorizontal : 8,
    backgroundColor: 'white',
    borderRadius : 20,
    paddingBottom : 10,
    elevation : 4
  },
  cardImage:{
    height: 270,
    width: (screenWidth-16),
    borderTopLeftRadius:20,
    borderTopRightRadius:20
    // resizeMode : 'contain'
  },
  imageView:{
    justifyContent:'center',
    alignItems:'center'
  },
  details:{
    marginHorizontal: 10,
    marginTop : 10
  },
  nameTxt:{
    fontSize : 25,
    fontWeight : '700',
    color: 'black'
  },
  locTxt:{
    color:'#7c7b7bff'
  },
  ffTxt:{
    marginTop : 8,
    color : 'black'
  },
  btns:{
    flexDirection : "row",
    justifyContent :'space-between',
    marginHorizontal : 8,
    marginTop : 8, 
  },
  btn:{
    backgroundColor : '#FAA533',
    width: ((screenWidth)/2)-20,
    borderRadius : 15,
    justifyContent : 'center',
    alignItems : 'center',
    height : 50
  },
  dpbtn:{
    
  },
  pdbtn:{
    
  },
  btnText:{
    color : 'white',
    fontSize : 16,
    fontWeight : 'bold',

  }
})