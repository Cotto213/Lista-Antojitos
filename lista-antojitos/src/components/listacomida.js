import React from 'react';
import { ScrollView } from 'react-native';
import Comida from './comida';

const ListaComidas = ({ comidas }) => {
  return (
    <ScrollView>
      {comidas.map((comida, index) => (
        <Comida
          key={index}
          nombre={comida.nombre}
          calorias={comida.calorias}
          imagen={comida.imagen}
        />
      ))}
    </ScrollView>
  );
};

export default ListaComidas;