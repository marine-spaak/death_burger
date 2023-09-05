import { View, Text, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES, icons, images } from '../constants';

import { ScreenHeaderBtn } from '../components';

const Home = () => {
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
            <ScreenHeaderBtn iconURL={images.burger} dimension="100%"/>
          ),
          headerTitle: "",
        }}
      />

    </SafeAreaView>
  )
}

export default Home;

