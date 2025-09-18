import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export const Loader: React.FC = () => (
  <View style={styles.center}>
    <ActivityIndicator size="large" />
  </View>
);

const styles = StyleSheet.create({ center: { flex: 1, justifyContent: 'center', alignItems: 'center' } });
