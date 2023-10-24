import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function BookSearchApp() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchBooks = async () => {
    try {
      const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`);
      const booksWithRating = response.data.hits.map(book => ({
        ...book,
        rating: 0, // Inicialmente, a nota é definida como 0
      }));
      setResults([...results, ...booksWithRating]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Função para definir a nota de um livro
  const setRating = (index, rating) => {
    const updatedResults = [...results];
    updatedResults[index].rating = rating;
    setResults(updatedResults);
  };

  // Componente de estrela para exibir visualmente a nota
  const StarRating = ({ rating, onRate }) => {
    const stars = [1, 2, 3, 4];
    return (
      <View style={styles.starContainer}>
        {stars.map((star, index) => (
          <TouchableOpacity key={index} onPress={() => onRate(star)}>
            <Text style={star <= rating ? styles.starActive : styles.star}>★</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Chave de busca"
          value={query}
          onChangeText={text => setQuery(text)}
        />
        <TouchableOpacity onPress={searchBooks}>
          <Image
            source={{
              uri: 'https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-search-magnifier-icon-material-image_1338211.jpg',
            }}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>
              Autor: {item.author}
            </Text>
            <Text style={styles.itemText}>
              Título: {item.title}
            </Text>
            <Text style={styles.itemText}>
              URL: {item.url}
            </Text>
            <StarRating rating={item.rating} onRate={rating => setRating(index, rating)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F8FF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:20,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderColor: 'cyan',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  listItem: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  itemText: {
    fontSize: 18,
  },
  searchIcon: {
    width: 50,
    height: 50,
    marginLeft: 8,
  },
  starContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 40,
    color: '#E6E6FA',
  },
  starActive: {
    fontSize: 40,
    color: 'cyan',
  },
});
