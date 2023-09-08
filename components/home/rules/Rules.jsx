import {
  View,
  Text,
  Image,
} from 'react-native'

import { useRouter } from 'expo-router';
import styles from '../homeSections.style';
import { icons } from '../../../constants';

const Rules = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.titleContainer}>
        <Image
          source={icons.sheet}
          style={styles.icon}
        />
        <Text style={styles.titleText}>Règles du jeu</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>
          L'application va vous poser dix questions très sérieuses. Retenez toutes les réponses. Restituez-les à la fin, dans le bon ordre.
        </Text>
      </View>
    </View>
  )
}

export default Rules;