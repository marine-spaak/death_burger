import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES, icons, images } from '../constants';

import { ScreenHeaderBtn, Welcome } from '../components';
import { useNavigation } from 'expo-router';

const Home = () => {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    // Couleur du background de l'app
    <SafeAreaView style={{ flex:1, backgroundColor: COLORS.lightWhite }}>

      <Stack.Screen
        options={{
          // Couleur du header
          headerStyle: { backgroundColor: COLORS.grayWhite },
          headerShadowVisible: true,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconURL={icons.menu}
              dimension="60%"
              onPress={() => navigation.openDrawer()}
            />
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
          <Welcome />
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Home;

