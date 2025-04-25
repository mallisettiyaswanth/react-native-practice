import LinearGradient from 'react-native-linear-gradient';
import { View, Text } from 'react-native';
import { Link } from "expo-router"
export default function Index() {
  return (
      <View className="items-center justify-center flex-1 bg-gray-500">
          <Text className="text-white">Hello World</Text>
          <Link href="/onboarding" >
                Go to Onboarding
          </Link>

          <Link href="/movie/avengers">Avengers</Link>
          <Link href="/movie/random">Random</Link>
      </View>
  );
}
