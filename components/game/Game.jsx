import {
  View,
  Text,
  Image,
} from 'react-native'
import { useRouter } from 'expo-router';

import styles from './game.style';

import { images } from '../../constants';

const Game = () => {
  const router = useRouter();

  return (
    <View>
      <Text style={styles.largeText}>Game texte</Text>
    </View>
  )
}

export default Game;