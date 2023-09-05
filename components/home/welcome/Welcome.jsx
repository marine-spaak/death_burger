import { useState } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { useRouter } from 'expo-router';

import styles from './welcome.style';


const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.largeText}>Le burger de la mort</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.largeText}>Règles du jeu</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.largeText}>Jouer</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.largeText}>Alain Chabat</Text>
      </View>
    </View>
  )
}

export default Welcome;