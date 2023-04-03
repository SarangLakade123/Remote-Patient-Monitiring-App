import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Card from '../components/card';
import {LineChart} from "react-native-chart-kit-bar";
import { Dimensions } from "react-native";
import { Header as HeaderRNE, HeaderProps,Button, Overlay, } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Octicons';



const data = {
  // labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 30, 21, 33, 19, 32,20, 30, 21, 33, 19, 32,20, 30, 21, 33, 19, 32,30, 21, 33, 19, 32,20, 30, 21, 33, 19, 32, ],
      color: (opacity = 1) => `rgba(237, 47, 47 , ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
  // legend: ["Rainy Days"] // optional
};
const screenWidth = Dimensions.get("window").width;
const chartConfig = {
  backgroundGradientFrom: "#ffff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#ffff",
  backgroundGradientToOpacity: 0,
  color: (opacity = 10) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
const img = require("../assets/Vector.png");
const img1 = require("../assets/thermometer.png");
const img3 = require("../assets/Chart-1.png");
const Logo = require("../assets/logo1.png");

export default function DashBoard() {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <ScrollView>
    <HeaderRNE
      backgroundColor='#7DC253'
      leftComponent={
        <Image source={Logo} style={{width: '100%', resizeMode: 'contain', }}></Image>
  }
      rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={toggleOverlay}>
              <Icon name="unverified" color="white" size={25} />
                   </TouchableOpacity>
          </View>
      }
      centerComponent={{ text: 'DashBoard', style: styles.heading }}
      
    />
     <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{borderRadius: 25, padding: 25, alignItems: 'center'}}>
      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 15}}>
        <Icon 
            name="alert"
            color="#FF0000"
            size={45}
           />
      </View>
      <Text style={styles.textSecondary }>
        Welcome to React Native Elements
      </Text>
      <Button 
        type="outline"
        titleStyle={{ color: '#FF0000' }} 
        buttonStyle={{
          borderWidth: 1,
          backgroundColor: '#fff',
          borderColor: "#FF0000",
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginVertical: 10,
        }}
        title="Start Building"
        onPress={toggleOverlay}
      />
    </Overlay>
    <View style={{padding: 20}}>
      <Card>
        <Text style={styles.h1}>
          Heart  Rate Variablity (HRC)
        </Text>
        <Text style={styles.h3}>67 ms</Text>
      </Card>

      <Card>
        <Text style={styles.h1}>
          ECG T vs HR
        </Text>
        <View style={{marginRight: 50}}>
        
        <LineChart
          data={data}
          width={screenWidth}
          height={110}
          chartConfig={chartConfig}
          withDots= {false}
          withInnerLines= {false}
          withOuterLines={false}
          withHorizontalLabels={false}
          withVerticalLabels= {false}
          getDotColor= {(opacity = 15) => `rgba(255, 255, 255, ${opacity})`}
          />
          </View>
      </Card>

      <Card>
        <View style={{flexDirection: "row", gap: 10}} >
          <View style={{ flex: 0.4, flexWrap: 'wrap', alignItems: 'center'}}>
      
              <Text style={styles.h1}>%SpO2</Text>
              <Text style={styles.h2}>98</Text>
          </View>
          <View style={{ flex: 0.2, flexWrap: 'wrap', alignItems: "center", justifyContent: 'center'}}>
          
              <Text>P1 10.5</Text>
            
          </View>
          <View style={{ flex: 0.4, flexWrap: 'wrap', alignItems: 'center'}}>
          
              <Text style={styles.h1}>PR bpm</Text>
              <Text style={styles.h2}>76</Text>
            
          </View>
        </View>
        <View style={{flexDirection: "row", height: 35}}>
          <Image source={img3} style={{width: '100%', resizeMode: 'contain'}}></Image>
        </View>
      </Card>


      <View style={{ flexDirection: "row", gap: 10,}} >

        <View style={{ flex: 0.5, position: 'relative', flexWrap: 'nowrap'}}>
         <Card>
            <Text style={styles.h1}>Temprature</Text>
            <View style={{flexDirection: 'row',}}>

              <Image  source={img1} style={styles.image1}  resizeMode='contain' />
              <View style={{left: 20 }}>
                <Text style={styles.h4}>97.7*F</Text>
                <Text style={styles.h5}>
                Normal Range 97.99
                </Text> 
              </View>
            </View>
         </Card>
        </View>

        <View style={{ flex: 0.5, position: 'relative', flexWrap: 'nowrap'}}>
         <Card>
            <Text style={styles.h1}>Humidity</Text>
            <View style={{flexDirection: 'row', }}>

              <Image  source={img} style={[styles.image,{height: 132, resizeMode: 'contain', right: 20, top: 10}]}/>
              <View style={{position: 'absolute',left: 40 }}>
              <Text style={styles.h4}>50%</Text>
              </View>
            </View>
         </Card>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  h1: {
    // fontfamily: 'Qualion',
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: 800,
    paddingBottom: 10,
    color: "#7DC253",
  },
  h2: {
      // fontfamily: 'Qualion',
      fontStyle: 'normal',
      fontSize: 35,
      fontWeight: 800,
      lineHeight: 50,
      color: "#000",
  },
  h3:{
    // fontfamily: 'Qualion',
    fontStyle: 'normal',
    fontSize: 25,
    fontWeight: 600,
    lineHeight: 40,
    color: "#C15252",
  },
  h4: {
      // fontfamily: 'Qualion',
      fontStyle: 'normal',
      fontSize: 30,
      fontWeight: 700,
      lineHeight: 45,
      color: "#000",
  },
  card: {
    backgroundColor: '#ffff',
    borderRadius: 20,
  },
  image:{
    width: 79,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  textSecondary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 17,
    color: 'red'
  },
});
