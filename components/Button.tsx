import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/appStyles';
import { Props } from '../interfaces/appInterfaces';

const Button = ({ texto, color = '#2D2D2D', isWide = false, onPress }: Props) => {
    return (
        <TouchableOpacity activeOpacity={0.55} onPress={() => onPress(texto)}>
            <View
                style={{
                    ...styles.boton,
                    backgroundColor: color,
                    width: (isWide) ? 180 : 80
                }}
            >
                <Text style={{ ...styles.botonTexto, color: (color === '#9B9B9B') ? 'black' : 'white' }}>{texto}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default Button;