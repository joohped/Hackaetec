import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';
import { useRoute } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');



export default function Home({navigation}) {

  const _handleOpenWithLinking = () => {
    Linking.openURL("https://scholar.google.com.br/scholar?hl=pt-BR&as_sdt=0%2C5&q=ansiedade&btnG=#d=gs_qabs&t=1726145526596&u=%23p%3DNmtjok_tJu4J");
  };
  const _handleOpenWithLinking2 = () => {
    Linking.openURL("https://search.app/LR4RpHbimEomfaA59");
  };
  const _handleOpenWithLinking3 = () => {
    Linking.openURL("https://scholar.google.com.br/scholar?hl=pt-BR&as_sdt=0%2C5&q=ansiedade&oq=ansied#d=gs_qabs&t=1726145604650&u=%23p%3DTs7IWtaqGrMJ");
  };
  return (
    <View style={{ backgroundColor: '#fff7f0', flex: 1 }}>
    
      <ImageBackground
        style={{ width: width + 20, height: height - 540, top: 0 }}
        source={require('../img/img1.png')}> 
        
        </ImageBackground>

      <Image
        style={{
          width: 180,
          height: 90,
          resizeMode: 'contain',
          top: -65,
          marginLeft: 'auto',
          marginRight: 'auto',
          left: 10,
        }}
        source={require('../img/bemVindo.png')}
      />


      <Text style={{textAlign: 'justify', left: 35, marginRight: 70, fontSize: 18, top: -70}}>Olá, tudo bem com você? Eu sou o Thinker, cérebro da Breath. Você sabia que a ansiedade é um sentimento muito comum em toda vida? Ele traz diversos benefícios, mas quando ele sai de controle ele pode causar diversos malefícios, pensando nisso a Breath está aqui para te ajudar quando esses momentos chegarem! Mantenha a calma e Breath (espire)!  </Text>


      <Image
        style={{
          width: 350,
          height: 300,
          resizeMode: 'contain',
          top: -185 ,
          marginLeft: 'auto',
          marginRight: 'auto',
          left: 5,
        }}
        source={require('../img/frase1.png')}
      />

       <View style={{alignItems: "center", justifyContent: "center", flexDirection: "row", display: 'flex'}}>

        <TouchableOpacity
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: -510,
          zIndex: 1000,
          backgroundColor: 'white',

          borderStyle: 'solid',
          borderColor: "#9ea9f0",
          borderRightWidth: 3,
          borderLeftWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 2,
          borderRadius: 19,

          shadowOpacity: 0,
          shadowColor: "#9ea9f0",
          shadowRadius: 4,
          shadowOffset: {width: 0, height: 3}
          }} onPress={_handleOpenWithLinking}>

        <Image source={require('../img/cerebro1.png')} style={{width: 100, height: 100, borderRadius: 19,}}/>

        </TouchableOpacity>

        <TouchableOpacity
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: -510,
          zIndex: 1000,
          backgroundColor: 'white',

          borderStyle: 'solid',
          borderColor: "#9ea9f0",
          borderRightWidth: 3,
          borderLeftWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 2,
          borderRadius: 19,

          shadowOpacity: 0,
          shadowColor: "#9ea9f0",
          shadowRadius: 4,
          shadowOffset: {width: 0, height: 3}
          }} onPress={_handleOpenWithLinking2}>

          <Image source={require('../img/cerebro2.png')} style={{width: 100, height: 100, borderRadius: 19,}}/>

        </TouchableOpacity>

        <TouchableOpacity
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: -510,
          zIndex: 1000,
          backgroundColor: 'white',

          borderStyle: 'solid',
          borderColor: "#9ea9f0",
          borderRightWidth: 3,
          borderLeftWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 2,
          borderRadius: 19,

          shadowOpacity: 0,
          shadowColor: "#9ea9f0",
          shadowRadius: 4,
          shadowOffset: {width: 0, height: 3}
            }} onPress={_handleOpenWithLinking3}>

            <Image source={require('../img/cerebro3.png')} style={{width: 100,
            height: 100, borderRadius: 19,}}/>

        </TouchableOpacity>
      </View>

      <Text style={{textAlign: 'justify', left: 70, marginRight: 70, fontSize: 15, top: -185, color: '#230b41'}}> Confira alguns artigos sobre o assunto</Text>

    </View>
  );
}

const styles = StyleSheet.create({});
