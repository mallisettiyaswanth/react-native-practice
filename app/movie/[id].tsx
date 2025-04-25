import {useLocalSearchParams} from "expo-router";
import {View, Text} from "react-native"

const MovieDynamic = () => {
    const {id} = useLocalSearchParams()

    return <View>
        <Text>
            {id}
        </Text>
    </View>
}


export default MovieDynamic;