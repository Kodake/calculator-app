import React from 'react'
import { Text, View } from 'react-native';
import ButtonCalculator from '../components/ButtonCalculator';
import styles from '../components/theme/appTheme';

const CalculatorScreen = () => {
    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequenio}>1,500.00</Text>
            <Text style={styles.resultado}>1,500.00</Text>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <ButtonCalculator texto='C' color='#9B9B9B'/>
                <ButtonCalculator texto='+/-' color='#9B9B9B'/>
                <ButtonCalculator texto='del' color='#9B9B9B'/>
                <ButtonCalculator texto='/' color='#FF9427'/>
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <ButtonCalculator texto='7' />
                <ButtonCalculator texto='8' />
                <ButtonCalculator texto='9' />
                <ButtonCalculator texto='X' color='#FF9427'/>
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <ButtonCalculator texto='4' />
                <ButtonCalculator texto='5' />
                <ButtonCalculator texto='6' />
                <ButtonCalculator texto='-' color='#FF9427'/>
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <ButtonCalculator texto='1' />
                <ButtonCalculator texto='2' />
                <ButtonCalculator texto='3' />
                <ButtonCalculator texto='+' color='#FF9427'/>
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <ButtonCalculator texto='0' isWide />
                <ButtonCalculator texto='.' />
                <ButtonCalculator texto='=' color='#FF9427'/>
            </View>
        </View>
    )
}

export default CalculatorScreen;