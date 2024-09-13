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
} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');

export default function Musica({navigation}) {
  const [fontsLoaded] = useFonts({
    SunBorn: require('../img/sunborn-sans-one.otf'),
  });

  const Volte = async () => {
    navigation.navigate('Navegar');
  }



  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../img/Fundo.png')}>
        <SafeAreaView style={styles.content}>
          <ScrollView>
            <TouchableOpacity
              style={styles.iconButton} onPress={Volte}>
              <FontAwesome5
                name="user-alt"
                size={24}
                color="white"
                style={styles.icon}
              />
            </TouchableOpacity>

            <Text style={styles.titleText}>
              MÚSICA
            </Text>

            <Text style={styles.subtitleText}>
              Vamos relaxar?
            </Text>
            <Text style={styles.descriptionText}>
              A música pode transmitir diversas emoções, e, entre elas, a
              calmaria. Em momentos barulhentos em nossa mente, a música vem e
              traz a calma, o conforto e restabelece o controle de sua mente.
            </Text>
            <Text style={styles.beforeText}>
              ANTES DE TUDO!
            </Text>
            <Text style={styles.stepText}>
              1. Vá para um lugar tranquilo e confortante;
            </Text>
            <Text style={styles.stepText}>
              2. Deixe a mente limpa
            </Text>
            <Text style={styles.stepText}>
              3. Ouça e sinta a música
            </Text>

            <Text style={styles.relaxingMusicText}>
              MÚSICAS RELAXANTES:
            </Text>

            <View style={styles.musicsContainer}>
              <View style={styles.musicItem}>
                <TouchableOpacity
                  style={styles.musicButton}>
                  <Image
                    style={styles.musicImage}
                    source={require('../img/Woman.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.musicLabel}>
                  Harmonic Awakening
                </Text>
              </View>
              <View style={styles.musicItem}>
                <TouchableOpacity
                  style={styles.musicButton}>
                  <Image
                    style={styles.musicImage}
                    source={require('../img/CD.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.musicLabel}>
                  perene
                </Text>
              </View>
            </View>
            <View style={styles.musicsContainer}>
              <View style={styles.musicItem}>
                <TouchableOpacity
                  style={styles.musicButton}>
                  <Image
                    style={styles.musicImage}
                    source={require('../img/CD.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.musicLabel}>
                  reiki healing
                </Text>
              </View>
              <View style={styles.musicItem}>
                <TouchableOpacity
                  style={styles.musicButton}>
                  <Image
                    style={styles.musicImage}
                    source={require('../img/Man.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.musicLabel}>
                  joyful
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
  relaxingMusicText: {
    fontFamily: 'SunBorn',
    fontSize: 30,
    color: '#553c8b',
    marginTop: 20,
  },
  musicsContainer: {
    flexDirection: 'row',
    gap: 30,
    marginBottom: 30,
  },
  musicItem: {
    alignItems: 'center',
  },
  musicButton: {
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
  musicImage: {
    height: 130,
    width: 130,
  },
  musicLabel: {
    fontFamily: 'SunBorn',
    color: '#553c8b',
    fontSize: 12,
    marginTop: 10,
  },
});
