{
  /* Importation de StylesSheet, Text, View à partir de React-Native.*/
}
import {StyleSheet, Text, View} from 'react-native';

{
  /* Importation de React .*/
}
import React from 'react';

{
  /* Création de la constance Blanc.*/
}
const Blanc = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.titre}>
        {' '}
        Le blanc représente la paix et la compassion.L’utilisation du blanc
        symbolise la propreté, la netteté et la perfection. Le blanc est la
        couleur de la pureté.Le blanc permettra d’éclairer votre pièce,
        indispensable pour une belle décoration…{' '}
      </Text>
    </View>
  );
};

export default Blanc;

{/* Ajout de la couleur, de la hauteur, la largueur. Ajout de la contance.*/}
const styles = StyleSheet.create({
  content: {
    backgroundColor: 'red',
    width: 205,
    height: 205,
    justifyContent: 'center',
    
  },
});
