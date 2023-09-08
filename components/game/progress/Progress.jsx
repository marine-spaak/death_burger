import {
  View,
  Text,
} from 'react-native'
import { useRouter } from 'expo-router';

const Progress = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Progression</Text>
    </View>
  )
}

export default Progress;