import { useState } from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import { useRouter } from 'expo-router';

import styles from './welcome.style';

import { images } from '../../../constants';

import Rules from '../rules/Rules';
import Play from '../play/Play';
import Alain from '../alain/Alain';

const Welcome = () => {
  const router = useRouter();

  return (
    <View>

      <View style={styles.titleContainer}>
        <Image
          source={images.logo}
          style={styles.titleLogo}
        />
        <Text style={styles.largeText}>Le burger de la mort</Text>
      </View>

      <Rules style={styles.container}/>
      <Play style={styles.container}/>
      <Alain style={styles.container}/>

    </View>
  )
}

export default Welcome;