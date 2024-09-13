import { Text, View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Meditacao1() {
  return (
    <View style={{backgroundColor: '#9EA9F0'}}>
      <ImageBackground
        style={{ width: width , height: height, top: 60, }}
        source={require('../img/fundo3.png')}> 

      <TouchableOpacity>
         <Image source={require('../img/perfil.png')} style={{width: 55, height: 55, borderRadius: 19, top: -5, left: 20}}/>
      </TouchableOpacity>

        <Image source={require('../img/personagem1.png')} style={{width: 190, height: 190, borderRadius: 19, top: -30, left: 220}}/>

        <Image source={require('../img/titu1.png')} style={{width: 235, height: 35, borderRadius: 19, top: 25, left: 100}}/>

        <Text style={{top: 60, fontSize: 17, left: 20, marginRight: 40, textAlign: 'justify'}}> A  Mindfulness é uma prática de atenção. Ou seja, ela foca no momento presente, evitando que pensamentos intrusivos e inquietos atrapalhem. </Text>

        <Image source={require('../img/passoapasso.png')} style={{width: 205, height: 28, borderRadius: 19, top: 160, left: 105}}/>

        <View style={{alignItems: "center", justifyContent: "center", flexDirection: "row", display: 'flex'}}>
          <Image source={require('../img/1.png')} style={{width: 40, height: 40, borderRadius: 19, top: 175, left: 30}}/>
          <Text style={{top: 180, fontSize: 14, left: 40, marginRight: 60, textAlign: 'left'}}> Sente-se em um lugar calmo com a postura reta e feche os olhos; </Text>
        </View>

        <View style={{alignItems: "center", justifyContent: "center", flexDirection: "row", display: 'flex'}}>
          <Image source={require('../img/2.png')} style={{width: 40, height: 40, borderRadius: 19, top: 185, left: 15}}/>
          <Text style={{top: 190, fontSize: 14, left: 20, marginRight: 60, textAlign: 'left'}}> Concentre toda a atenção na sua respiração; </Text>
        </View>

        <View style={{alignItems: "center", justifyContent: "center", flexDirection: "row", display: 'flex'}}>
          <Image source={require('../img/3.png')} style={{width: 40, height: 40, borderRadius: 19, top: 195, left: 30}}/>
          <Text style={{top: 200, fontSize: 14, left: 40, marginRight: 60, textAlign: 'left'}}> Caso sua mente comece a divagar, volte seu foco suavemente para sua respiração; </Text>
        </View>

        <View style={{alignItems: "center", justifyContent: "center", flexDirection: "row", display: 'flex'}}>
          <Image source={require('../img/4.png')} style={{width: 42, height: 42, borderRadius: 19, top: 205, left: 44}}/>
          <Text style={{top: 210, fontSize: 14, left: 50, marginRight: 90, textAlign: 'left'}}> Após 5 minutos, abra os olhos e observe o ambiente ao seu redor. Você pode ir aumentando o tempo gradativamente. </Text>
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
});
