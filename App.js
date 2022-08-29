{
  /* Importation du StyleSheet, Text, View */
}
import {ScrollView, StyleSheet, Text, View} from 'react-native';

{
  /*Importation de React. */
}
import React from 'react';

{
  /* Importation de NavigationContainer.*/
}
import {NavigationContainer} from '@react-navigation/native';

{
  /* Importation createNativeNavigator. */
}
import {createNativeStackNavigator} from '@react-navigation/native-stack';

{
  /* Importation de Détail.js*/
}
import Detail from './component/Detail';

{
  /* Importation de Home à partir du dossier Home. */
}
import Homes from './component/Homes';

{
  /*Création de la constance Stack. */
}
const Stack = createNativeStackNavigator();

{
  /*Création de la contance App. */
}

const App = () => {
  {
    /*Création de la NavigationContainer. */
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyHome">
        <Stack.Screen name="MyHome" component={Homes} />
        <Stack.Screen name="Mondetail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
