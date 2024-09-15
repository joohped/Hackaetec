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
  Image,
  Linking
} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');

export default function Meditacao({ navigation }) {
  const medita1 = () => {
    navigation.navigate('Meditacao1');
  }
  const medita2 = () => {
    navigation.navigate('Meditacao2');
  }
  const medita3 = () => {
    navigation.navigate('Meditacao3');
  }
  const medita4 = () => {
    navigation.navigate('Meditacao4');
  }
  const Volte = async () => {
    navigation.navigate('Navegar');
  }

  const [fontsLoaded] = useFonts({
    SunBorn: require('../img/sunborn-sans-one.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../img/Fundo.png')}
      >
        <SafeAreaView style={styles.content}>
          <ScrollView>
            <TouchableOpacity
              style={styles.iconButton}
            onPress={Volte}>
              <FontAwesome5
                name="user-alt"
                size={24}
                color="white"
                style={styles.icon}
              />
            </TouchableOpacity>

            <Text style={styles.titleText}>
              Meditação
            </Text>

            <Text style={styles.subtitleText}>
              Vamos começar?
            </Text>
            <Text style={styles.descriptionText}>
              Existem 4 formas de meditação e nós iremos lhe ensinar todas elas! A meditação é uma técnica que ajuda no controle da ansiedade, na saúde mental e no autoconhecimento. O que acha de começar agora?
            </Text>
            <Text style={styles.beforeText}>
              ANTES DE TUDO!
            </Text>
            <Text style={styles.stepText}>
              1. Utilize roupas leves;
            </Text>
            <Text style={styles.stepText}>
              2. Encontre um lugar tranquilo;
            </Text>
            <Text style={styles.stepText}>
              3. Deixe a mente limpa;
            </Text>
            <Text style={styles.stepText}>
              4. O que acha de um aromatizador para criar o clima?
            </Text>

            <Text style={styles.typesText}>
              Tipos de Meditação:
            </Text>

            <View style={styles.musicsContainer}>
              <View style={styles.itemContainer}>
                <TouchableOpacity
                  style={styles.itemButton}
                  onPress={medita1}
                >
                  <Image
                    style={styles.itemImage}
                    source={require('../img/Man1.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.itemLabel}>
                  mindfulness
                </Text>
              </View>
              <View style={styles.itemContainer}>
                <TouchableOpacity
                  style={styles.itemButton}
                  onPress={medita2}
                >
                  <Image
                    style={styles.itemImage}
                    source={require('../img/Woman1.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.itemLabel}>
                  Guiada
                </Text>
              </View>
            </View>
            <View style={styles.musicsContainer}>
              <View style={styles.itemContainer}>
                <TouchableOpacity
                  style={styles.itemButton}
                  onPress={medita3}
                >
                  <Image
                    style={styles.itemImage}
                    source={require('../img/Woman2.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.itemLabel}>
                  transcendental
                </Text>
              </View>
              <View style={styles.itemContainer}>
                <TouchableOpacity
                  style={styles.itemButton}
                  onPress={medita4}
                >
                  <Image
                    style={styles.itemImage}
                    source={require('../img/Man2.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.itemLabel}>
                  ativa
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

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
  iconButton: {
    backgroundColor: '#9ea9f0',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 20,
  },
  icon: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  titleText: {
    fontFamily: 'SunBorn',
    fontSize: 40, 
    color: '#553c8b',
    marginTop: 30,
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
  },
  beforeText: {
    fontFamily: 'SunBorn',
    fontSize: 30,
    color: '#553c8b',
    marginTop: 30,
    marginLeft: 10,
  },
  stepText: {
    color: '#230b41',
    fontSize: 16,
    width: 350,
    marginTop: 10,
    marginLeft: 20,
  },
  typesText: {
    fontFamily: 'SunBorn',
    fontSize: 30,
    color: '#553c8b',
    marginTop: 20,
    textAlign: 'center',
  },
  musicsContainer: {
    flexDirection: 'row',
    gap: 30,
    marginBottom: 30,
  },
  itemContainer: {
    alignItems: 'center',
  },
  itemButton: {
    backgroundColor: '#fff',
    width: 150,
    height: 150,
    borderRadius: 20,
    shadowColor: '#9ea9f0',
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    height: 130,
    width: 130,
  },
  itemLabel: {
    fontFamily: 'SunBorn',
    color: '#553c8b',
    fontSize: 12, 
    marginTop: 10,
  },
});

