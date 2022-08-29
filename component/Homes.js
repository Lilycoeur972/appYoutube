import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import {Button} from '@rneui/themed';
import {Image} from '@rneui/themed';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Bienvenido a Martinica!!',
    description:
      'Pequenas  olas rompen con fuerza en la playa,donde la arena es ligery , blanca y cubierta de pequenas conchas de todas las formas. Podemos ver en el horizonte, barcos de vela flotando en el agua, tranquilamente. Se puede sentir un agradable brisa de aire ligero , un olor a aire fresco traido por el mar.Los atardeceres son siempre paisajes que aportan calma, suavidad y tranquilidad. El sol se pone para todos , un momento unificador en los cuatro rincones del planta. Para los romanticos es un momento para compartir a dos,un momento de silencio y complicidad frente a esta hermosa naturaleza.',

    prix: '500 euros el viaje.',
    image: require('../images/images4.jpg'),
    
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Welcome to a paradise island!',
    description:
      'Martinique is a small paradise in the heart of the West Indies! Martinique is an island in the Caribbean which is part of the Antilles. We can hike.',
    prix: '25 euros',
    image: require('../images/images2.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'La playa',
    description:
      'Esta isla tropical esta cubierta de suntuosos bosques tropicas, sabanas,frutas exoticas y flores, sin mencionar los manglares de los manglares.El conjonto hace de la isla un extraordinario jardin exotico.La playa es un acumulacion de sedimentos situados al borde del mar o de un curso de agua,compuesta por materiales sueltos en granos, mas o menos pequenos.',
    prix: '50',
    image: require('../images/images3.jpg'),
  },
];

const Item = ({title, description, prix, image}) => (
  <View style={styles.item}>
    <Text style={styles.text1}>{title}</Text>
    <Text style={styles.text2}>{description}</Text>
    <Text style={styles.text3}>{prix}</Text>

    <Image
      source={image}
      containerStyle={styles.image}
      style={{ flex :1,width:'100%', height:"100%"}}  
      
    />
    <Image style={styles.images}/>
    <Button size="sm">Welcome!</Button>
    
  </View>
);

const Homes = () => {
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      description={item.description}
      prix={item.prix}
      image={item.image}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    fontSize: 32,
  },
  image: {
    aspectRatio: 1,
    borderWidth:1, 
    borderColor:"blue",
    display :"flex",
    justifyContent :"space-around",
   alignItems :"center",
    
  },
  text1: {
    fontSize: 40,
    fontWeight: '500',
    textAlign: 'center',
    flexDirection :"column", 
    justifyContent:"flex-end"
  },
  text2:{
    fontSize:20,
    fontWeight:'400',
    textAlign:"center",
    flexDirection :'column',
    justifyContent:"flex-end",

  },
  text3:{
    fontSize:20,
    fontWeight:'300',
    textAlign:'center',
    flexDirection :'column',
    justifyContent:"flex-end",
  },
});

export default Homes;
