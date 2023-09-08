import {
  View,
  Text,
} from 'react-native'
import { useRouter } from 'expo-router';

const Question = () => {
  const router = useRouter();

  return (
    <View>
      <Text>La question actuelle</Text>
    </View>
  )
}

export default Question;