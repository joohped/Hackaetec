import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, ImageBackground, Dimensions, Alert, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword, onAuthStateChanged } from '@firebase/auth';
import { doc, getDoc } from '@firebase/firestore';
import { auth, db } from '../firebaseConfig';
import { useFonts } from 'expo-font';


const { width, height } = Dimensions.get('window');

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState(null);


  const [carrregarFontes] = useFonts({
    SunBorn: require('../img/sunborn-sans-one.otf'), 
  });

  const logar = async () => {
    try {
      if (!email || !senha) {
        Alert.alert('Erro de login', 'Por favor coloque email e senha');
        return;
      }

      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);


      if (userDoc.exists()) {
        navigation.navigate('Navegar', { userData: userDoc.data() });
      } else {
        console.error('Nenhum documento !!');
      }
    } catch (error) {
      Alert.alert('Erro de login', error.message);
    }
  };

  const Cadastro = async () => {
    navigation.navigate('Cadastro');
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ width: width, height: height+40}}
        source={require('../img/entrar.png')}>
        <View style={{ flex: 1, zIndex: 1000 }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'black',
              backgroundColor: '#fff7f0',
              zIndex: 1000,
              width: 270,
              height: 40,
              top: '53%',
              left: 100,
              borderRadius: 20,
              paddingLeft: 12
            }}
            
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="#000"
          />

          <TextInput
          
            style={{
              borderWidth: 1,
              borderColor: 'black',
              backgroundColor: '#fff7f0',
              zIndex: 1000,
              width: 270,
              height: 40,
              top: '57%',
              left: 100,
              borderRadius: 20,
              paddingLeft: 12
            }}
          
            value={senha}
            onChangeText={setSenha}
            placeholder="Senha"
            placeholderTextColor="#000"
            secureTextEntry
          />
          
          <View>
          <TouchableOpacity style={{backgroundColor: '#553c8b', width: 150, height: 45, top: 580, left: 140, borderRadius: 25}} onPress={logar}>
             <Text style={{color: '#fff', textAlign: 'center', top: 10, fontSize: 18, fontWeight: 'bold'}} >Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor: '#553c8b', width: 150, height: 45, top: 600, left: 140, borderRadius: 25}} onPress={Cadastro}>
             <Text style={{color: '#fff', textAlign: 'center', top: 10, fontSize: 18, fontWeight: 'bold'}} >Cadastro</Text>
            </TouchableOpacity>
          </View>
          
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default Login;

