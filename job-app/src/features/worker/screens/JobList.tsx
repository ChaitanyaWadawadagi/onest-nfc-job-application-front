import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export const JobList = () => {
  const router = useRouter();
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Job List</Text>
      <Button title="Open Job" onPress={() => router.push('/worker/job/1' as any)} />
    </View>
  );
};

export default JobList;
