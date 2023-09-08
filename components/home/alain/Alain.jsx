import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native'

import { useRouter } from 'expo-router';
import styles from '../homeSections.style';
import { images, icons } from '../../../constants';

const Alain = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.titleContainer}>
        <Image
          source={icons.favorite}
          style={styles.icon}
        />
        <Text style={styles.titleText}>Alain Chabat</Text>
      </View>

      <View style={styles.alainContainer}>
        {/* Pour rendre l'image cliquable, il faudrait lui ajouter */}
        {/* un wrapper "Touchable Opacity" */}
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

          <TouchableOpacity
            style={styles.alainContactBtn}
            onPress={() => Linking.openURL("https://artistes-productions.com/2019/08/07/contacter-alain-chabat-l-ecrire-a-alain-chabat/")}
          >
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