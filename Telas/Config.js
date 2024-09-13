import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ImageBackground, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { useFonts } from 'expo-font';
const { width, height } = Dimensions.get('window');


export default function Config() {

  const [isDisabled, setIsDisabled] = useState(false);

const Obrigado = async () => {
  try {
    if (Obrigado) {
      Alert.alert('Aceitou os Termos de uso', 'Obrigado pela confiança');
      setIsDisabled(true);
      return;
    }
  } catch (error) {
    Alert.alert('Erro de autenticação', error.message);
  }
};

const ObrigadoNao = async () => {
  try {
    if (ObrigadoNao) {
      Alert.alert('Você não aceitou os Termos de uso', 'Desculpe, gostariamos que revisasse para ter certeza');
      setIsDisabled(true);
      return;
    }
  } catch (error) {
    Alert.alert('Erro de autenticação', error.message);
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
          height: height+20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={require('../img/fundoConfig.png')}>
          <Text style={{ fontSize: 32, color: '#553c8b', marginTop: '10%', fontFamily: 'SunBorn', width: 300, textAlign: 'center' }}>
            Configurações
          </Text>
          <Text style={{ color: '#553c8b', marginBottom: 50 }}>
            Confira os termos de uso
          </Text>
          <Text style={{ color: '#553c8b', marginTop: -10, width: 350 }}>
          1.1 O cadastro para uso do Aplicativo é realizado no primeiro acesso do Usuário que deverá fornecer: Email, CPF, Nome Completo e Senha.
          </Text>
          <Text style={{ color: '#553c8b', marginTop: 10, width: 350 }}>
          1.2 Será permitido um único cadastramento por Usuário, devendo o acesso, visualização e uso do Aplicativo ser feito pelo Usuário em caráter pessoal e intransferível.
          </Text>
          <Text style={{ color: '#553c8b', marginTop: 10, width: 350 }}>
          2.1 Para a utilização e baixa (download) do Breath não haverá custo nenhum, tampouco para eventuais atualizações.
          </Text>
          <Text style={{ color: '#553c8b', marginTop: 10, width: 350 }}>
          2.2 O Breath não declara ou garante que o Aplicativo será livre de perdas, defeitos, ataques, vírus, interferências, atividades de hackers ou outra intrusão de segurança, e o Breath renuncia a qualquer responsabilidade com relação a isso por ser culpa de terceiros.
          </Text>
          <Text style={{ color: '#553c8b', marginTop: 10, width: 350 }}>
          3.1 Os dados pessoais inseridos no Aplicativo serão armazenados em nossas bases, em ambiente seguro, garantindo o sigilo e confidencialidade dos mesmos.
          </Text>
          <Text style={{ color: '#553c8b', marginTop: 10, width: 350 }}>
          3.2 O Breath não vende ou aluga as informações pessoais dos usuários para terceiros.
          </Text>
          <Text style={{ color: '#553c8b', marginTop: 10, width: 350 }}>
          4.1 usuário poderá, a qualquer tempo, desinstalar o App Breath, sem que isto gere para qualquer das partes o direito de indenização ou qualquer outra quantia.
          </Text>
          <Text style={{ color: '#553c8b', marginTop: 10, width: 350 }}>
          4.2 O Breath reserva o direito de alterar, suspender ou interromper o App Breath (ou qualquer parte ou conteúdo) a qualquer tempo, com ou sem aviso prévio, e o Breath não será responsável perante o Usuário ou qualquer terceiro caso exerça tais direitos.
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={[styles.button1, isDisabled && styles.buttonDisabled]} onPress={Obrigado} disabled={isDisabled}><Text style={{color: 'white', textAlign: 'center', fontSize: 20, top: 10}}>Aceito</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.button2, isDisabled && styles.buttonDisabled]} onPress={Obrigado} disabled={isDisabled}><Text style={{color: 'white', textAlign: 'center', fontSize: 20, top: 10}}>Não Aceito</Text></TouchableOpacity>
          </View>
        </ImageBackground>
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
    button1:{
      backgroundColor: '#553c8b', 
      width: 140, 
      height: 50, 
      borderRadius: 50, 
      marginTop: 50, 
      marginLeft: 0
    },
    button2:{
      backgroundColor: '#553c8b', 
      width: 140, 
      height: 50, 
      borderRadius: 50, 
      marginTop: 50, 
      marginLeft: 50
    },
    buttonDisabled:{
      backgroundColor: 'gray'
    }
  });