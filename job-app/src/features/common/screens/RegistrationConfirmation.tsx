import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export const RegistrationConfirmation = () => {
	const router = useRouter();
	return (
		<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
			<Text>Registration Complete</Text>
			<Button title="Go to Profile" onPress={() => router.replace('/profile-selection' as any)} />
		</View>
	);
};

export default RegistrationConfirmation;
