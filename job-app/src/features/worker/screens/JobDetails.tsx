import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export const JobDetails = () => {
  const params = useLocalSearchParams();
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Job Details for id: {params.id}</Text>
    </View>
  );
};

export default JobDetails;
