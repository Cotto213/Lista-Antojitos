import React from 'react';
import { Card } from 'react-native-elements';
import { View, Text, Image, StyleSheet } from 'react-native';

const Comida = ({ nombre, calorias, imagen }) => {
  return (
    <Card containerStyle={styles.card}>
      <Image source={{ uri: imagen }} style={styles.imagen} />
      <View style={styles.infoContainer}>
        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.calorias}>{`${calorias} cal`}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 0,
    borderRadius: 10,
  },
  imagen: {
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infoContainer: {
    padding: 10,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  calorias: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Comida;