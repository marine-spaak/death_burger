import {
  View,
  Text,
  Image,
} from 'react-native'
import { useRouter } from 'expo-router';

import styles from './game.style';

import { images, icons } from '../../constants';
import Progress from './progress/Progress';
import Question from './question/Question';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Game = () => {
  const router = useRouter();

  return (
    <View>

      <View style={styles.titleContainer}>
        <TouchableOpacity>
          <Image
            source={images.logo}
            style={styles.titleLogo}
          />
        </TouchableOpacity>

        <Text style={styles.largeText}>Le burger de la mort</Text>
      </View>

      <Progress style={styles.container}/>

      <Question style={styles.container}/>

      <TouchableOpacity
        style={styles.nextBtn}
      >
        <Image
          source={icons.next}
          style={styles.nextIcon}
        />
        <Text style={styles.nextBtnText}>Passer à la suite</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Game;