import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
};

export const Input: React.FC<Props> = ({ value, onChange, placeholder }) => (
  <TextInput style={styles.input} value={value} onChangeText={onChange} placeholder={placeholder} />
);

const styles = StyleSheet.create({ input: { padding: 8, borderWidth: 1, borderRadius: 6 } });
