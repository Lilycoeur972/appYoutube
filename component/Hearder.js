import {StyleSheet, Text, View, S} from 'react-native';

import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import {ListItem} from '@rneui/themed';

{
  /* Création de la constance Header. */
}

const Hearder = () => {
  return (
    <View style={styles.hearder}>
      {/*  Insertion de l'icon.*/}
      <Icon name="menu" size={30} color="#900" />
      <Icon name="toy-brick-search-outline" size={30} color="#900" />
    </View>
  );
};

export default Hearder;

{
  /* Création du visuel de l'entête de l'application: hauteur, couleur, emplacement. */
}

const styles = StyleSheet.create({
  hearder: {
    height: 150,

    backgroundColor: 'red',

    flexDirection: 'row',

    justifyContent: 'space-between',
  },
});
