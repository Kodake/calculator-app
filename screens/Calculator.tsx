import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../styles/appStyles';
import Button from '../components/Button';
import { OPERATIONS } from '../messages/appMessages';
import store from '../store/sharedStateStore'
import { observer } from 'mobx-react'

const Calculator: React.FC = observer(() => {
    return (
        <View style={styles.calculadoraContainer}>
            {
                (store.numeroAnterior !== '0') && (
                    <Text style={styles.resultadoPequenio}>{store.numeroAnterior}</Text>
                )
            }

            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {store.numero}
            </Text>

            <View style={styles.fila}>
                <Button texto={OPERATIONS.Clear} color='#9B9B9B' onPress={store.limpiar} />
                <Button texto={OPERATIONS.PlusMinus} color='#9B9B9B' onPress={store.positivoNegativo} />
                <Button texto={OPERATIONS.Delete} color='#9B9B9B' onPress={store.borrar} />
                <Button texto={OPERATIONS.Divide} color='#FF9427' onPress={store.dividir} />
            </View>

            <View style={styles.fila}>
                <Button texto={OPERATIONS.Seven} onPress={store.armarNumero} />
                <Button texto={OPERATIONS.Eight} onPress={store.armarNumero} />
                <Button texto={OPERATIONS.Nine} onPress={store.armarNumero} />
                <Button texto={OPERATIONS.Multiply} color='#FF9427' onPress={store.multiplicar} />
            </View>

            <View style={styles.fila}>
                <Button texto={OPERATIONS.Four} onPress={store.armarNumero} />
                <Button texto={OPERATIONS.Five} onPress={store.armarNumero} />
                <Button texto={OPERATIONS.Six} onPress={store.armarNumero} />
                <Button texto={OPERATIONS.Minus} color='#FF9427' onPress={store.restar} />
            </View>

            <View style={styles.fila}>
                <Button texto={OPERATIONS.One} onPress={store.armarNumero} />
                <Button texto={OPERATIONS.Two} onPress={store.armarNumero} />
                <Button texto={OPERATIONS.Three} onPress={store.armarNumero} />
                <Button texto={OPERATIONS.Add} color='#FF9427' onPress={store.sumar} />
            </View>

            <View style={styles.fila}>
                <Button texto={OPERATIONS.Zero} isWide onPress={store.armarNumero} />
                <Button texto={OPERATIONS.Dot} onPress={store.armarNumero} />
                <Button texto={OPERATIONS.Equals} color='#FF9427' onPress={store.calcular} />
            </View>
        </View>
    )
});

export default Calculator;
