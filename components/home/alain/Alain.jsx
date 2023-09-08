import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

import { useRouter } from 'expo-router';
import styles from '../homeSections.style';
import { images } from '../../../constants';

const Alain = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Alain Chabat</Text>
      </View>

      <View style={styles.alainContainer}>
        <Image
          source={images.alain}
          style={styles.alainPicture}
        />
        <View style={styles.alainText}>
          <Text style={styles.alainParagraph}>
            Vous aussi vous trouvez qu'Alain Chabat est merveilleux, drôle et attendrissant ?
          </Text>

          <Text style={styles.alainParagraph}>
            Vous pouvez lui écrire pour lui dire et ainsi réchauffer son petit cœur.
          </Text>

          <TouchableOpacity style={styles.alainContactBtn}>
            <Text
              style={styles.alainContactText}
              resizeMode="contain"
            >
            Lui écrire !</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  )
}

export default Alain;