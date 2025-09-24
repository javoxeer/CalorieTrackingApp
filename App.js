import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, Button } from 'react-native';

function HomeScreen({ navigation }) {
  const [name, setName] = React.useState('');
  const [tcl, setTcl] = React.useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>칼로리 추적 앱</Text>
      <TextInput
        placeholder="이름"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 12,
          borderRadius: 6,
        }}
      />
      <TextInput
        placeholder="TCL"
        value={tcl}
        onChangeText={setTcl}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 12,
          borderRadius: 6,
        }}
      />
      <Button title="다음" onPress={() => navigation.navigate('Result', { name, tcl })} />
    </View>
  );
}

function ResultScreen({ route }) {
  const { name, tcl } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>{name} 님의 하루 TCL: {tcl}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
