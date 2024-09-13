import React from 'react';
import { useFonts } from 'expo-font';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Linking
} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');

const Contatos = () => {
  const [fontsLoaded] = useFonts({
    SunBorn: require('../img/sunborn-sans-one.otf'),
  });
  const phoneNumber = "992581056";
  const phoneNumber2 = "40097652";
  const phoneNumber3 = "840025209";
  const phoneNumber4 = "188";

  const _handleOpenWithLinking = () => {
    Linking.openURL(`tel:${phoneNumber4}`);
  };
  const _handleOpenWithLinking2 = () => {
    Linking.openURL(`tel:${phoneNumber3}`);
  };
  const _handleOpenWithLinking3 = () => {
    Linking.openURL(`tel:${phoneNumber2}`);
  };
  const _handleOpenWithLinking4 = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../img/fundo20.png')}
      >
        <SafeAreaView style={styles.content}>
          <ScrollView>
            <View style={styles.headerContainer}>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesome5
                  name="user-alt"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
              <View>
                <Text style={styles.titleText}>
                  Está em crise?
                </Text>
                <Text style={styles.subtitleText}>
                  Encontre ajuda aqui!
                </Text>
              </View>
            </View>
            <Text style={styles.descriptionText}>
              Fizemos uma seleção cuidadosa de números onde você pode conseguir
              ajuda quando necessário.
            </Text>
            <Text style={styles.psychText}>
              Números de psicólogos:
            </Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={[styles.contactButton, { backgroundColor: '#553c8b' }]} onPress={_handleOpenWithLinking4}>
                <FontAwesome5 name="whatsapp" size={60} color="white" />
                <View style={styles.contactInfo}>
                  <Text style={styles.contactName}>SES-AM</Text>
                  <Text style={styles.contactNumber}>(92) 99258-1056</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.contactButton, { backgroundColor: '#6765c2' }]}onPress={_handleOpenWithLinking3}>
                <FontAwesome5 name="whatsapp" size={60} color="white" />
                <View style={styles.contactInfo}>
                  <Text style={styles.contactName}>UFES</Text>
                  <Text style={styles.contactNumber}>(027) 4009-7652</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.contactButton, { backgroundColor: '#9ea9f0' }]} onPress={_handleOpenWithLinking2}>
                <FontAwesome5 name="whatsapp" size={60} color="white" />
                <View style={styles.contactInfo}>
                  <Text style={styles.contactName}>UFPR</Text>
                  <Text style={styles.contactNumber}>(41) 8402-5209</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.contactButton, { backgroundColor: '#dcc8e9' }]}
                onPress={_handleOpenWithLinking}
              >
                <FontAwesome5 name="phone-alt" size={60} color="white" />
                <View style={styles.contactInfo}>
                  <Text style={styles.contactName}>CVV</Text>
                  <Text style={styles.contactNumber}>188</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: width,
    height: height + 25,
    padding: 20,
  },
  content: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: '#9ea9f0',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 15,
  },
  titleText: {
    fontFamily: 'SunBorn',
    fontSize: 35,
    color: '#553c8b',
    marginTop: 15,
    marginBottom: -10,
  },
  subtitleText: {
    color: '#230b41',
    fontSize: 20,
  },
  descriptionText: {
    color: '#230b41',
    fontSize: 16, 
    width: 300,
    marginTop: 20,
    marginLeft: 10,
  },
  psychText: {
    fontFamily: 'SunBorn',
    fontSize: 20,
    color: '#553c8b',
    marginTop: 20,
    marginLeft: 10,
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
  },
  contactButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '85%',
    padding: 10,
    paddingLeft: 15,
    borderRadius: 20,
  },
  contactInfo: {
    marginRight: 60,
  },
  contactName: {
    fontFamily: 'SunBorn',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  contactNumber: {
    color: '#fff',
  },
});

export default Contatos;
