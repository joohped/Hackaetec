import { Text, View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Meditacao4() {
  return (
    <View style={{backgroundColor: '#9EA9F0'}}>
      <ImageBackground
        style={{ width: width , height: height, top: 60, }}
        source={require('../img/fundo3.png')}> 

      <TouchableOpacity>
         <Image source={require('../img/perfil.png')} style={{width: 55, height: 55, borderRadius: 19, top: -5, left: 20}}/>
      </TouchableOpacity>

        <Image source={require('../img/personagem4.png')} style={{width: 190, height: 190, borderRadius: 19, top: -18, left: 220}}/>

        <Image source={require('../img/titu4.png')} style={{width: 135, height: 46, borderRadius: 19, top: 25, left: 133}}/>

        <Text style={{top: 60, fontSize: 15, left: 50, marginRight: 90, textAlign: 'justify'}}> É uma prática que acredita no contato com o seu “eu” verdadeiro. Ou seja, não envolve controle mental, e, sim, o controle de si mesmo. </Text>

        <Image source={require('../img/passoapasso.png')} style={{width: 205, height: 28, borderRadius: 19, top: 160, left: 105}}/>

        <View style={{alignItems: "center", justifyContent: "center", flexDirection: "row", display: 'flex'}}>
          <Image source={require('../img/1.png')} style={{width: 40, height: 40, borderRadius: 19, top: 175, left: 30}}/>
          <Text style={{top: 180, fontSize: 14, left: 40, marginRight: 70, textAlign: 'left'}}> Mantenha a mente focada na atividade: pense no que você está fazendo.
 </Text>
        </View>

        <View style={{alignItems: "center", justifyContent: "center", flexDirection: "row", display: 'flex'}}>
          <Image source={require('../img/2.png')} style={{width: 40, height: 40, borderRadius: 19, top: 185, left: 24}}/>
          <Text style={{top: 190, fontSize: 14, left: 29, marginRight: 60, textAlign: 'left'}}> Observe o movimento das suas mãos ou dos pés.
 </Text>
        </View>

        <View style={{alignItems: "center", justifyContent: "center", flexDirection: "row", display: 'flex'}}>
          <Image source={require('../img/3.png')} style={{width: 40, height: 40, borderRadius: 19, top: 195, left: 34}}/>
          <Text style={{top: 200, fontSize: 14, left: 38, marginRight: 64, textAlign: 'left'}}> Sinta a textura dos objetos que você está utilizando.
 </Text>
        </View>

        <View style={{alignItems: "center", justifyContent: "center", flexDirection: "row", display: 'flex'}}>
          <Image source={require('../img/4.png')} style={{width: 42, height: 42, borderRadius: 19, top: 205, left: 15}}/>
          <Text style={{top: 210, fontSize: 14, left: 20, marginRight: 90, textAlign: 'left'}}> Perceba se há algum aroma no ambiente. </Text>
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
});