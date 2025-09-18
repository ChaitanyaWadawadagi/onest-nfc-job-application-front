import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  onPress?: () => void;
};

export const Button: React.FC<Props> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.btn} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: { padding: 12, backgroundColor: '#007AFF', borderRadius: 8 },
  text: { color: '#fff', textAlign: 'center' },
});
