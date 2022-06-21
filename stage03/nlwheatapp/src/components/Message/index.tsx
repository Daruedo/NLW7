import React from 'react';
import { View, Text } from 'react-native';
import { UserPhoto } from '../UserPhoto';
import { styles } from './styles';

//import { styles } from './styles';

export function  Message() {
  return (
    <View style={styles.container}>
        <Text style={styles.message}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet efficitur felis. Sed convallis mauris ex, quis vulputate augue imperdiet in. Aliquam vitae pellentesque lacus, eget vehicula orci. Mauris efficitur dui libero. Phasellus feugiat viverra posuere.
        </Text>

        <View style={styles.footer}>
            <UserPhoto
                imageUri="https://github.com/Daruedo.png"
                sizes="SMALL"
            />

            <Text style={styles.userName}>
                Nome do usuário
            </Text>
        </View>
    </View>
  )
}