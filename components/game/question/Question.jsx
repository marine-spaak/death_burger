import {
  View,
  Text,
} from 'react-native'
import { useRouter } from 'expo-router';
import styles from '../gameSections.style';

import questionsData from '../../../assets/data/questionsData';

const Question = () => {
  const router = useRouter();
  const questionIndex = 0;

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>La question actuelle</Text>
      </View>

      <View style={styles.container}>
      <Text style={styles.questionText}>{questionsData[questionIndex].text}</Text>
      </View>
    </View>
  )
}

export default Question;