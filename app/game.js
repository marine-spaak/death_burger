import { View } from 'react-native';
import { useRouter } from 'expo-router';

import GameComponent from "../components/game/Game";

const Game = () => {
  const router = useRouter();

  return (
    <View>
      <GameComponent />
    </View>
  )
}

export default Game;