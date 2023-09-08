import {
  View,
  Text,
  Image,
} from 'react-native'
import { useRouter } from 'expo-router';

import styles from './game.style';

import { images } from '../../constants';
import Progress from './progress/Progress';
import Question from './question/Question';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Game = () => {
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

      <Progress style={styles.container}/>

      <Question style={styles.container}/>

      <TouchableOpacity>Passer à la suite</TouchableOpacity>
    </View>
  )
}

export default Game;