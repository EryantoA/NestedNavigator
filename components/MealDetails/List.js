import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function List({data}) {
  return data.map(dataPoint => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.listText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  listText: {
    color: '#351401',
    textAlign: 'center',
  },
});
