import { Button } from '@react-navigation/elements';
import { StyleSheet, Text, View } from 'react-native';
import { createStaticNavigation,
    useNavigation } from '@react-navigation/native';

export function HomeScreen() {
    const xp = 0
    const navigation = useNavigation();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button onPress={() => navigation.navigate('Quiz', {
           xp: xp
          })}>Take a Quiz</Button>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });