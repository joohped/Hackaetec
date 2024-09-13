import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image,  Dimensions, } from 'react-native';
import { useRoute } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');

export default function Relaxamento({navigation}) {

  const respira = async () => {
    navigation.navigate('Respiracao');
  }
  const medita = async () => {
    navigation.navigate('Meditacao');
  }
  const musica = async () => {
    navigation.navigate('Musica');
  }

  return (
    <View style={{ backgroundColor: '#9ea9f0', flex: 1 }}>

     <Image source={require('../img/titulo1.png')} style={{width: 252, height: 70, top: 60, left: 85, zIndex: 1000}}/>

    <ImageBackground
        style={{ width: width - 0, height: height - 200, top: 60, }}
        source={require('../img/fundo2.png')}> 
    
        <View>

        <TouchableOpacity
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 40,
          zIndex: 1000,
          backgroundColor: 'white',

          borderStyle: 'solid',
          borderColor: "#9ea9f0",
          borderRightWidth: 9,
          borderLeftWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 2,
          borderRadius: 19,

          shadowOpacity: 0,
          shadowColor: "#9ea9f0",
          shadowRadius: 4,
          shadowOffset: {width: 0, height: 3}
          }} onPress={musica}>

        <Image source={require('../img/botao1.png')} style={{width: 300, height: 110, borderRadius: 19,}}/>

        </TouchableOpacity>

        <TouchableOpacity
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 60,
          zIndex: 1000,
          backgroundColor: 'white',

          borderStyle: 'solid',
          borderColor: "#9ea9f0",
          borderRightWidth: 9,
          borderLeftWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 2,
          borderRadius: 19,

          shadowOpacity: 0,
          shadowColor: "#9ea9f0",
          shadowRadius: 4,
          shadowOffset: {width: 0, height: 3}
          }} onPress={medita}>

          <Image source={require('../img/botao2.png')} style={{width: 300, height: 110, borderRadius: 19,}}/>

        </TouchableOpacity>

        <TouchableOpacity
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 70,
          zIndex: 1000,
          backgroundColor: 'white',

          borderStyle: 'solid',
          borderColor: "#9ea9f0",
          borderRightWidth: 9,
          borderLeftWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 2,
          borderRadius: 19,

          shadowOpacity: 0,
          shadowColor: "#9ea9f0",
          shadowRadius: 4,
          shadowOffset: {width: 0, height: 3}
            }} onPress={respira}>

            <Image source={require('../img/botao3.png')} style={{width: 300, height: 110, borderRadius: 19,}}/>

        </TouchableOpacity>
      </View>
    </ImageBackground>

         <Image source={require('../img/cerebro.png')} style={{width: 180, height: 180, borderRadius: 19, top: -90, left: 240}}/>
    </View>
  );
}

const styles = StyleSheet.create({

});
