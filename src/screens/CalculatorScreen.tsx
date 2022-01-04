import React from 'react'
import { Text, View } from 'react-native';
import ButtonCalculator from '../components/ButtonCalculator';
import styles from '../components/theme/appTheme';
import useCalculator from '../hooks/useCalculator';

const CalculatorScreen = () => {

    const {
        numeroAnterior,
        numero,
        limpiar,
        armarNumero,
        positivoNegativo,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnSumar,
        btnRestar,
        calcular
    } = useCalculator();

    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoPequenio}>{numeroAnterior}</Text>
                )
            }

            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>

            {/* Fila de botones 5 */}
            <View style={styles.fila}>
                <ButtonCalculator texto='C' color='#9B9B9B' onPress={limpiar} />
                <ButtonCalculator texto='+/-' color='#9B9B9B' onPress={positivoNegativo} />
                <ButtonCalculator texto='del' color='#9B9B9B' onPress={btnDelete} />
                <ButtonCalculator texto='/' color='#FF9427' onPress={btnDividir} />
            </View>

            <View style={styles.fila}>
                <ButtonCalculator texto='7' onPress={armarNumero} />
                <ButtonCalculator texto='8' onPress={armarNumero} />
                <ButtonCalculator texto='9' onPress={armarNumero} />
                <ButtonCalculator texto='X' color='#FF9427' onPress={btnMultiplicar} />
            </View>

            <View style={styles.fila}>
                <ButtonCalculator texto='4' onPress={armarNumero} />
                <ButtonCalculator texto='5' onPress={armarNumero} />
                <ButtonCalculator texto='6' onPress={armarNumero} />
                <ButtonCalculator texto='-' color='#FF9427' onPress={btnRestar} />
            </View>

            <View style={styles.fila}>
                <ButtonCalculator texto='1' onPress={armarNumero} />
                <ButtonCalculator texto='2' onPress={armarNumero} />
                <ButtonCalculator texto='3' onPress={armarNumero} />
                <ButtonCalculator texto='+' color='#FF9427' onPress={btnSumar} />
            </View>

            <View style={styles.fila}>
                <ButtonCalculator texto='0' isWide onPress={armarNumero} />
                <ButtonCalculator texto='.' onPress={armarNumero} />
                <ButtonCalculator texto='=' color='#FF9427' onPress={calcular} />
            </View>
        </View>
    )
}

export default CalculatorScreen;
