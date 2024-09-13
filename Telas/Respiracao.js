import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView, Image } from 'react-native';
const { width, height } = Dimensions.get('window');
import { useFonts } from 'expo-font';

export default function Respiracao() {
  const [fontsLoaded] = useFonts({
    'SunBorn': require('../img/sunborn-sans-one.otf'),
  });

    return (
      <View style={styles.container}>
        <ScrollView>
        <ImageBackground
        style={{ width: width, height: height,}}
        source={require('../img/fundoTele.png')}> 
        <Text style={{ fontSize: 40, color: '#553c8b', marginTop: 70, fontFamily: 'SunBorn', width: 300, textAlign: 'center' }}>
            RESPIRAÇÃO
          </Text>
          <Text style={{ color: '#553c8b', marginBottom: 50, marginLeft: 80, fontSize: 20, marginTop: -10}}>
          Técnica 4-7-8.
          </Text>
          <Text style={{ color: '#553c8b', marginBottom: 50, marginLeft: 50, marginTop: -40, width: 250, fontSize: 15, textAlign: 'justify'}}>
          A técnica de respiração 4-7-8 é muito utilizada para controlar a ansiedade, por ativar o sistema nervoso parassimpático, induzindo o relaxamento e reduzindo os sintomas da ansiedade.
          </Text>
          <Text style={{ fontSize: 30, color: 'white', marginTop: 10,marginLeft: 60, fontFamily: 'SunBorn', textAlign: 'center' }}>
            VAMOS RESPIRAR?
          </Text>

          <View>
          <Image source={require('../img/fig1.png')} style={{height: 230, width: 320, marginLeft: 40}}/>
          <Image source={require('../img/fig2.png')} style={{height: 230, width: 320, marginLeft: 40, marginTop: 40}}/>
          </View>
        
        </ImageBackground>
        <ImageBackground
        style={{ width: width, height: height, zIndex: 1000}}
        source={require('../img/fundoTele2.png')}> 
        <View>
          <Image source={require('../img/fig3.png')} style={{height: 230, width: 350, marginLeft: 30, marginTop: 30}}/>
          <Image source={require('../img/fig4.png')} style={{height: 230, width: 350, marginLeft: 30, marginTop: 70}}/>
          <Image source={require('../img/fig5.png')} style={{height: 230, width: 370, marginLeft: 20, marginTop: 60}}/>
          </View>
        </ImageBackground>
        <ImageBackground
        style={{ width: width, height: height,marginTop: -180, zIndex: 10}}
        source={require('../img/fundoTele3.png')}> 
        <View>
          <Image source={require('../img/fig6.png')} style={{height: 240, width: 350, marginLeft: 30, marginTop: 240}}/>
          <Image source={require('../img/fig7.png')} style={{height: 290, width: 370, marginLeft: 20, marginTop: 60}}/>
          </View>
        </ImageBackground>
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });