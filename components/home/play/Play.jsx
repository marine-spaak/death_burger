import {
  View,
  Text,
  Image,
} from 'react-native'

import { useRouter } from 'expo-router';
import styles from '../homeSections.style';
import { icons } from '../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import { Link } from 'expo-router';


const Play = () => {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.titleContainer}>
        <Image
          source={icons.star}
          style={styles.icon}
        />
        <Text style={styles.titleText}>Jouer</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>
          Vous êtes prêt·e ? Vraiment ?
          Alors allez-y !
        </Text>

        <Link
          href={{ pathname: "game" }}
          style={styles.playBtn}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('game')}
          >
            <Image
              source={icons.play}
              style={styles.playBtn}
            />
          </TouchableOpacity>
        </Link>


      </View>
    </View>
  )
}

export default Play;