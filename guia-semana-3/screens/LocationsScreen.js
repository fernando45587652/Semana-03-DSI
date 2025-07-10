import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function LocationsScreen() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location')
      .then(response => setLocations(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <FlatList
      data={locations}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.name}</Text>
          <Text>{item.type} - {item.dimension}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { margin: 20, padding: 10, backgroundColor: '#87CEFA', borderRadius: 9},
  title: { fontWeight: 'LightSkyBlue', fontSize: 16 }
});