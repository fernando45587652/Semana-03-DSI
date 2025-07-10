import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function EpisodesScreen() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode')
      .then(response => setEpisodes(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <FlatList
      data={episodes}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.name}</Text>
          <Text>{item.episode} - {item.air_date}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { margin: 10, padding: 10, backgroundColor: '#87CEFA', borderRadius: 8 },
  title: { fontSize: 17, fontWeight: 'LightSkyBlue' }
});