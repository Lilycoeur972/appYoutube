{/* Importation de StyleSheet, Text, View.*/}
import { StyleSheet, Text, View } from 'react-native'

{/* Importation de React.*/ }
import React from 'react'

{/* Importation de Card.js*/}
import { Card } from '@rneui/base'

{/* Création de la constance Maxi. */}
const Maxi = ({item}) => {


  return (

    <View>

      <Text>({item.titre})</Text>

         {/* Création de la carte avec con titre, son image.*/}
      <Card>
          <Card.Title>LOS COLORES  MARKETING</Card.Title>

          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
    </Card>

    {/*Création du style du Texte. */}
    <Text style ={{marginBottom :10}}> Los colores de la identidad visual de tu marca porta valores simbolicos y significados que in influen en las elecciones de tus consumidores. 
    Las percepciones y emociones que liberan los colores contribuyen a la imagen de la marca y son parte integral de su estrategia de comunicacion.
     Por lo tanto, es importante conocer el significado de los colores y sus representaciones para utilizar mejor sus puntos fuertes para llegar a su publico objectivo a través de su carta grafico</Text>
            
     
    </View>

  )
}

export default Maxi

const styles = StyleSheet.create({
    
})