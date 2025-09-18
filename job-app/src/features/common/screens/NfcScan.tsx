import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export const NfcScan = () => {
	const router = useRouter();
	return (
		<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
			<Text>NFC Scan</Text>
			<Button title="Back to Welcome" onPress={() => router.replace('/welcome' as any)} />
		</View>
	);
};

export default NfcScan;
