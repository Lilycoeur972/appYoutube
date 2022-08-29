{
  /* Importation du Sty */
}
import {StyleSheet, Text, View, FlatList} from 'react-native';

{
  /* Importation de React. */
}
import React from 'react';

{
  /* Importation de video.js. */
}
import {videos} from '../constance/Videos';

{
  /* Importation de Mini.js .*/
}
import Mini from '../component/card/Mini';

{
  /* Création de la  contance tendance!*/
}
const Tendance = () => {
  return (
    <View>
      <Text>tendance</Text>

      {/*  Création de la FlatList.*/}
      <FlatList
        data={videos}
        renderItem={({item}) => <Mini item={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
};

export default Tendance;

const styles = StyleSheet.create({});
