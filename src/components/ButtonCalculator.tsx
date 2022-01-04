import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './theme/appTheme';

interface Props {
    texto: string;
    color?: string;
    isWide?: boolean;
}

const ButtonCalculator = ({ texto, color = '#2D2D2D', isWide = false }: Props) => {
    return (
        <TouchableOpacity activeOpacity={0.55}>
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
}

export default ButtonCalculator;
