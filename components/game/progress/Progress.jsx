import {
  View,
  Text,
} from 'react-native'
import { useRouter } from 'expo-router';
import styles from '../gameSections.style';
import Animated from 'react-native-reanimated';

const Progress = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Progression</Text>
      </View>

      <View 
        style={styles.progressBar}
        currentIndex={2}
        maxIndex={10}
      />
    </View>
  )
}

export default Progress;