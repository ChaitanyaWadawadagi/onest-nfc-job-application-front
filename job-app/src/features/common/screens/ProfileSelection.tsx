import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export const ProfileSelection = () => {
	const router = useRouter();
	return (
		<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
			<Text>Choose Profile</Text>
			<Button title="I'm an Employer" onPress={() => router.push('/employer/dashboard' as any)} />
			<Button title="I'm a Worker" onPress={() => router.push('/worker/dashboard' as any)} />
		</View>
	);
};

export default ProfileSelection;
