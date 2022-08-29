import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

{
  /* Importation d'une image */
}

import {Image} from '@rneui/themed';
import {Button} from '@rneui/base';

{
  /*Création de la contance Image.*/
}
const ImageAPI = () => {
  return (
    <>
      <SafeAreaView>
        <FlatList
          data={[...new Array(10)].map((_, i) => i.toString())}
          style={styles.list}
          numColumns={2}
          keyExtractor={e => e}
          renderItem={({item}) => (
            <Image
              source={{uri: BASE_URI + item}}
              containerStyle={styles.item}
              PlaceholderContent={<ActivityIndicator />}
            />
          )}
        />
      </SafeAreaView>
    </>
  );
};

const Detail = () => {
  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  list: {
    width: '100%',
    backgroundColor: '#000',
  },

  item: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
});
