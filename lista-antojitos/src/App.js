import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import ListaComidas from './src/components/listacomida';

const comidasData = [
  {
    nombre: 'Pupusa',
    calorias: 150, 
    imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Pupusas_El_Salvador_Centro_America.JPG/1200px-Pupusas_El_Salvador_Centro_America.JPG'
    
  },
  {
    nombre: 'Tamales',
    calorias: 250,
    imagen:
      'https://www.recetassalvador.com/base/stock/Post/6-image/6-image_web.jpg',
  },
  {
    nombre: 'Torreja',
    calorias: 300, 
    imagen:
      'https://www.elsalvadormipais.com/wp-content/uploads/2017/01/torrejas-salvadorenas.jpg',
  },
  {
    nombre: 'Pastelitos',
    calorias: 180, 
    imagen:
      'https://www.196flavors.com/wp-content/uploads/2020/09/pastelitos-salvadorenos-1-FP.jpeg',
  },
  {
    nombre: 'Nuegados',
    calorias: 220, 
    imagen:
      'https://www.recetassalvadorenas.com/wp-content/uploads/2014/04/nuegados-de-huevo-e1444742405974.jpg',
  },
  {
    nombre: 'Poleada',
    calorias: 280,
    imagen:
      'https://i.ytimg.com/vi/OmR6sysXk_o/maxresdefault.jpg',
  },
  {
    nombre: 'Empanadas',
    calorias: 200, 
    imagen:
      'https://i.ytimg.com/vi/Rwk0S8Mn278/maxresdefault.jpg',
  },
  {
    nombre: 'Quesadilla',
    calorias: 320, 
    imagen:
      'https://www.curiouscuisiniere.com/wp-content/uploads/2020/02/Salvadoran-Quesadilla-Breakfast-Cheese-Pound-Cake-with-coffee.600.jpg',
  },
  {
    nombre: 'Semita',
    calorias: 240, 
    imagen:
      'https://www.recetassalvadorenas.com/wp-content/uploads/2014/03/semita.jpg',
  },
  {
    nombre: 'Minutas',
    calorias: 150, 
    imagen:
      'https://www.minutaspremium.com//wp-content/uploads/2021/08/slide-1.jpg',
  },
];


function HomeScreen() {
  return (
    <ScrollView>
      <ListaComidas comidas={comidasData} />
    </ScrollView>
  );
}

function FooterScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text style={{ fontSize: 20, margin: 10, color:'white', fontWeight:'bold'}}>ALFONSO FERNÁNDEZ FC200910</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor:'#193167' }}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, margin: 10, color:'white', fontWeight:'bold' }}>
        Antojitos Típicos de El Salvador
      </Text>
    </View>
    <View style={{ flex: 6 }}>
        <HomeScreen />
      </View>
      <View style={{ flex: 1 }}>
        <FooterScreen />
      </View>
    </View>
  );
}