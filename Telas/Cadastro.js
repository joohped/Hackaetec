import { useFonts } from 'expo-font';

import {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert
} from 'react-native';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { doc, setDoc } from '@firebase/firestore';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {auth, db} from '../firebaseConfig'



const { width, height } = Dimensions.get('window');
export default function Cadastro({navigation}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  
    const Cadastrar = async () => {
      try {
        if (!email || !senha || !nome || !cpf) {
          Alert.alert('Erro de login', 'Por favor coloque email, senha, cpf e nome completo');
          return;
        }
        if (senha.length < 6) {
          Alert.alert('Erro de Login', 'Senha precisa ter no minimo 6 caracteres');
          return;
        }
        if (cpf.length < 6) {
          Alert.alert('Erro de Login', 'Senha precisa ter no minimo 6 caracteres');
          return;
        }
  
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;
  
        const userDocRef = doc(db, 'users', user.uid);
        await setDoc(userDocRef, {
          email,
          nome,
          cpf,
          uid: user.uid
        });

        navigation.navigate('Navegar', {
          email,
          nome,
          cpf,
        });
      } catch (error) {
        console.error('Error creating user:', error.message);
      }
    };


  const [fontsLoaded] = useFonts({
    'SunBorn': require('../img/sunborn-sans-one.otf'),
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          flex: 1,
          width: width,
          height: height + 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={require('../img/ImagemFundo.png')}>
        <SafeAreaView style={styles.content}>
          <Text style={{ fontSize: 40, color: '#553c8b', marginTop: 70, fontFamily: 'SunBorn', width: 300, textAlign: 'center' }}>
            CADASTRO
          </Text>
          <Text style={{ color: '#553c8b', marginBottom: 50 }}>
            É novo no Breath? Cadastre-se já.
          </Text>
          <View style={styles.inputContent}>
            <View
              style={{
                backgroundColor: '#553c8b',
                height: 40,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <FontAwesome5
                name="user-alt"
                size={24}
                color="white"
                style={{ textAlign: 'center', textAlignVertical: 'center' }}
              />
            </View>
            <TextInput style={styles.input} placeholder="Nome Completo" value= {nome} onChangeText={setNome}/>
          </View>
          <View style={styles.inputContent}>
            <View
              style={{
                backgroundColor: '#553c8b',
                height: 40,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <FontAwesome5
                name="file-alt"
                size={24}
                color="white"
                style={{ textAlign: 'center', textAlignVertical: 'center' }}
              />
            </View>
            <TextInput style={styles.input} placeholder="CPF" value= {cpf} onChangeText={setCpf}/>
          </View>
          <View style={styles.inputContent}>
            <View
              style={{
                backgroundColor: '#553c8b',
                height: 40,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <FontAwesome5
                name="envelope"
                size={24}
                color="white"
                style={{ textAlign: 'center', textAlignVertical: 'center' }}
              />
            </View>
            <TextInput style={styles.input} placeholder="Email" value= {email} onChangeText={setEmail}/>
          </View>
          <View style={styles.inputContent}>
            <View
              style={{
                backgroundColor: '#553c8b',
                height: 40,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <FontAwesome5
                name="lock"
                size={24}
                color="white"
                style={{ textAlign: 'center', textAlignVertical: 'center' }}
              />
            </View>
            <TextInput style={styles.input} placeholder="Senha" value= {senha} onChangeText={setSenha} secureTextEntry/>
          </View>
          <TouchableOpacity style={{backgroundColor: '#553c8b', padding: 10, width: 150, borderRadius: 20, marginTop: 50}} onPress={Cadastrar}><Text style={{color: '#fff', textAlign: 'center'}} >LOGIN</Text></TouchableOpacity>
        </SafeAreaView>
        <Image
          style={{
            width: 300,
            height: 300,
            position: 'fixed',
            bottom: '-5%',
            left: '-15%',
          }}
          source={require('../img/mentePensando.png')}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContent: {
    width: 300,
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    borderWidth: 1,
    width: '75%',
    borderRadius: 20,
    height: 40,
    padding: 10,
    paddingLeft: 15,
    fontSize: 17,
    marginBottom: 20,
  },
});
