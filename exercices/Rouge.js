{
  /*Importation de StyleSheet,Text, View dans react-native. */
}
import {StyleSheet, Text, View} from 'react-native';

{
  /*  Importation de React .*/
}
import React from 'react';

// Création de la constance rouge.
const Rouge = () => {

  return (

    <View style={styles.content}>

      <Text style={styles.titre}>

        <Text style={{fontWeight: 'bold'}}>
          Le rouge est sûrement la couleur la plus fascinante et ambiguë qui
          soit.

          <Text style={{color: 'black'}}></Text>
          Elle joue sur les paradoxes, anime des sentiments passionnels en
          complète contradiction comme : l'amour,la colère,la sensualité,la
          sexualité, le courage,le danger,l'ardeur,l'interdiction…

        </Text>
        Le rouge est associé à la passion, au sang, à la puissance, à la flamme.
        </Text>

    </View>
  );
};

export default Rouge;

const styles = StyleSheet.create({
  content: {backgroundColor: 'blue', 
  justifyContent:"center",
  width: 210, height: 210, },
});
