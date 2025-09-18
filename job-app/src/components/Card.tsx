import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  children?: React.ReactNode;
};

export const Card: React.FC<Props> = ({ children }) => (
  <View style={styles.card}>{children}</View>
);

const styles = StyleSheet.create({
  card: { padding: 12, backgroundColor: '#fff', borderRadius: 8, elevation: 2 },
});
