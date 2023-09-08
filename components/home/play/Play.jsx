import {
  View,
  Text,
  Image,
} from 'react-native'

import { useRouter } from 'expo-router';
import styles from '../homeSections.style';
import { icons } from '../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Play = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Jouer</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>
          Vous êtes prêt·e ? Vraiment ?
          Alors allez-y !
        </Text>

        <TouchableOpacity>
          <Image
            source={icons.play}
            style={styles.playBtn}
          />
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Play;