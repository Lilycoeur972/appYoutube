{/* Importation de la View et du Text.*/}
import { View, Text } from 'react-native'

{/*Importation de React.  */}

import React from 'react'
{/* Importation de Card.js */}
import { Card } from '@rneui/base/dist/Card';

{/* Création de la constance mini.*/}

    const Mini = ({item}) => {

    {/* Création de la constance users.*/}
        const users = [
            {
              name: 'brynn',
              avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
            },
            {
              name: 'thot leader',
              avatar:
                'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
            },
            {
              name: 'jsa',
              avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
            },
            {
              name: 'talhaconcepts',
              avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
            },
            {
              name: 'andy vitale',
              avatar: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg',
            },
            {
              name: 'katy friedson',
              avatar:
                'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
            },
            ] 

    return (
        
        <View>

        <Text>{item.titre}</Text>

        </View>
    )
    }

export default Mini