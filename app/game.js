import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES, icons, images } from '../constants';

import { ScreenHeaderBtn } from '../components';
import GameComponent from "../components/game/Game";

const Game = () => {
  const router = useRouter();

  return (
    // Couleur du background de l'app
    <SafeAreaView style={{ flex:1, backgroundColor: COLORS.lightWhite }}>

      <Stack.Screen
        options={{
          // Couleur du header
          headerStyle: { backgroundColor: COLORS.grayWhite },
          headerShadowVisible: true,
          headerLeft: () => (
            <ScreenHeaderBtn iconURL={icons.menu} dimension="60%"/>
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconURL={images.burger} dimension="70%"/>
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium
          }}
        >
          <GameComponent />
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Game;