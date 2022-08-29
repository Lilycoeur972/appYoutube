{
  /*Importation du StyleSheet, Text, View , ImageBackground, à partir du dossier Réact-Native.*/
}
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
} from 'react-native';

{
  /*Importation de React à partir de React.*/
}
import React from 'react';

{
  /*Importation de Bonjour à partir du dossier exercices. */
}
import Bonjour from '../exercices/Bonjour';

{
  /* Importation de NbStagiaire à partir du dossier exercices.*/
}
import NbStagiaire from '../exercices/NbStagiaire';

{
  /*Importation de Capitale à partir du dossier exercices. */
}
import Capitale from '../exercices/Capitale';

{
  /* Importation de Bleu à partir du dosiier exercices.*/
}

import Bleu from '../exercices/Bleu';

{
  /* Importation de Rouge à partir du dossier exercices .*/
}
import Rouge from '../exercices/Rouge';

{
  /*Imporation de Blanc à partir du dossier exercices.*/
}
import Blanc from '../exercices/Blanc';

{
  /* Importation de Mini.js à partir du dossier component*/
}

import Mini from './card/Mini';

{
  /*Importation de Maxi.js à partir du dossier component. */
}

import Maxi from './card/Maxi';

{
  /* Importation de Video.js à partir du dossier constance. */
}
import {videos} from '../constance/Videos';

{
  /*Création de la contance Home */
}

const Home = ({navigation}) => {
  {
    /* Création du style dans la view  et ajout de Bleu.js. Réalisation du style du text à partir de la balise. <Text>.*/
  }
  return (
    <View style={styles.content}>
      {/*Importer Bleu.js afin de l'utiliser dans app.js pour qu'il puisse s'afficher sur l'application. */}
      <Bleu></Bleu>

      {/* Importer Rouge.js afin de l'utiliser dans app.js pour qu'il puisse s'afficher sur l'application. */}
      {/* <Rouge></Rouge> */}

      {/*Importer Blanc.js afin de l'utiliser dans app.js pour qu'il puisse s'afficher sur l'application.*/}
      {/* <Blanc></Blanc> */}

      {/*Création du Bouton de la navigation. */}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Mondetail')}
      />

      {/* Importer Mini.js afin de l'utiliser dans app.js pour qu'il puisse s'afficher sur l'application.*/}
      {/* <Mini></Mini>  */}

      {/* Importer Maxi.js afin de l'utiliser dans app.js pour qu'il puisse s'afficher sur l'application.*/}

      {/* Création de la FlatList Maxi.*/}
      <FlatList
        data={videos}
        renderItem={({item}) => <Maxi item={item} />}
        keyExtractor={item => item.id}
      />

      {/*  Création de la FlaList Mini.*/}

      <FlatList>
        data={videos}
        renderItem={({item}) => <Mini item={item} />}
        keyExtractor={item => item.id}
      </FlatList>

      {/*<Text style={styles.titre}> Le soleil </Text>. Importation de la baslise <Text> afin de l'utiliser.*/}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignContent: 'center',
  },

  /* Ajout de la couleur du texte et du centrage avec justifyContent. */

  titre: {color: 'yellow', justifyContent: 'center'},
});
