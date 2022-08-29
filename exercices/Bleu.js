{
  /* Importation de StyleSheet, Text, View. */
}
import {StyleSheet, Text, View} from 'react-native';

{
  /*Importation de React. */
}
import React from 'react';

{
  /* Création de la constance Bleu. */
}
const Bleu = () => {
  {
    /* Création du style dans la view.Création du style dans le Text. Ajout de la police et de la couleur. */
  }
  return (

    <View style={styles.content}>

      <Text style={styles.titre}>

        <Text style={{fontWeight: 'bold'}}>
          Le bleu est synonyme d’évasion et symbole de fidélité, de sagesse, de
          justice et de la foi. Le bleu est la couleur de la mer et du ciel. La
          couleur bleu utilisé pour donner une ambiance, un style de décoration.

          <Text style={{color: 'red'}}></Text>
          Le bleu est une couleur et un champ chromatique. Certaines de ses
          teintes peuvent être associées aux nuances du ciel de jour ou de nuit
          et de la mer.{' '}
        </Text>

      </Text>

    </View>
  );
};

export default Bleu;

{
  /* Ajout de la couleur, la hauteur et la largeur. Ajout de la contance.*/
}
const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    justifyContent: 'center',
    width :210, height:210,
    
  },
});
