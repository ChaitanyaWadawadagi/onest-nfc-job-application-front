import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export const EmployerHomeProfile = () => {
	const router = useRouter();
	return (
		<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
			<Text>Employer Profile</Text>
			<Button title="Open Dashboard" onPress={() => router.push('/employer/dashboard' as any)} />
		</View>
	);
};

export default EmployerHomeProfile;
