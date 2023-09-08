import {
  View,
  Text,
  Image,
} from 'react-native'

import { useRouter } from 'expo-router';
import styles from '../homeSections.style';
import { images } from '../../../constants';

const Rules = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Règles du jeu</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>
          Dix questions extrêmement sérieuses vont vous être posées. Retenez toutes les réponses dans votre tête puis restituez-les dans le bon ordre.
        </Text>
      </View>
    </View>
  )
}

export default Rules;