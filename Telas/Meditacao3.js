import { Text, View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Meditacao3() {
  return (
    <View style={{backgroundColor: '#9EA9F0'}}>
      <ImageBackground
        style={{ width: width , height: height, top: 60, }}
        source={require('../img/fundo3.png')}> 

      <TouchableOpacity>
         <Image source={require('../img/perfil.png')} style={{width: 55, height: 55, borderRadius: 19, top: -5, left: 20}}/>
      </TouchableOpacity>

        <Image source={require('../img/personagem3.png')} style={{width: 190, height: 190, borderRadius: 19, top: -25, left: 210}}/>

        <Image source={require('../img/titu3.png')} style={{width: 270, height: 30, borderRadius: 19, top: 25, left: 85}}/>

        <Text style={{top: 60, fontSize: 15, left: 50, marginRight: 100, textAlign: 'justify'}}> É uma prática que acredita no contato com o seu “eu” verdadeiro. Ou seja, não envolve controle mental, e, sim, o controle de si mesmo. </Text>

        <Image source={require('../img/passoapasso.png')} style={{width: 205, height: 28, borderRadius: 19, top: 160, left: 105}}/>

        <View style={{alignItems: "center", justifyContent: "center", flexDirection: "row", display: 'flex'}}>
          <Image source={require('../img/1.png')} style={{width: 40, height: 40, borderRadius: 19, top: 175, left: 30}}/>
          <Text style={{top: 180, fontSize: 14, marginLeft: 40, marginRight: 67, textAlign: 'left'}}> Sente-se em um lugar calmo com a postura reta e feche os olhos; </Text>
        </View>

        <View style={{alignItems: "center", justifyContent: "center", flexDirection: "row", display: 'flex'}}>
          <Image source={require('../img/2.png')} style={{width: 40, height: 40, borderRadius: 19, top: 185, left: 40}}/>
          <Text style={{top: 190, fontSize: 14, marginLeft: 50, marginRight: 55, textAlign: 'left'}}> Use um mantra de 15 a 20 minutos, duas vezes ao dia; </Text>
        </View>

        <View style={{alignItems: "center", justifyContent: "center", flexDirection: "row", display: 'flex'}}>
          <Image source={require('../img/3.png')} style={{width: 40, height: 40, borderRadius: 19, top: 195, left: -25}}/>
          <Text style={{top: 200, fontSize: 14, marginLeft: -20, marginRight: 80, textAlign: 'left'}}> Sente-se com os olhos fechados. </Text>
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
});