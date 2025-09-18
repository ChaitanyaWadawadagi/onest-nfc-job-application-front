import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export const LoginScreen = () => {
  const router = useRouter();

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Login</Text>
  <Button title="Go to Employer" onPress={() => router.push('/employer/dashboard' as any)} />
    </View>
  );
};
