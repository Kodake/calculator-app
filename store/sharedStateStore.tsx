import { makeObservable, observable, action } from 'mobx';
import { Operadores } from '../types/appTypes';

class SharedStateStore {
    numeroAnterior: string = '0';
    numero: string = '0';
    ultimaOperacion: Operadores | null = null;

    constructor() {
        makeObservable(this, {
            numeroAnterior: observable,
            numero: observable,
            ultimaOperacion: observable,
            limpiar: action,
            armarNumero: action,
            positivoNegativo: action,
            borrar: action,
            cambiarPorAnterior: action,
            dividir: action,
            multiplicar: action,
            sumar: action,
            restar: action,
            calcular: action,
            setNumero: action,
            setNumeroAnterior: action,
        });
    }

    limpiar = () => {
        this.setNumero('0');
        this.setNumeroAnterior('0');
    }

    armarNumero = (numeroTexto: string) => {
        if (this.numero.includes('.') && numeroTexto === '.') return;

        if (this.numero.startsWith('0') || this.numero.startsWith('-0')) {
            if (numeroTexto === '.') {
                this.setNumero(this.numero + numeroTexto);
            } else if (numeroTexto === '0' && this.numero.includes('.')) {
                this.setNumero(this.numero + numeroTexto);
            } else if (numeroTexto !== '0' && !this.numero.includes('.')) {
                this.setNumero(numeroTexto);
            } else if (numeroTexto === '0' && !this.numero.includes('.')) {
                this.setNumero(this.numero);
            } else {
                this.setNumero(this.numero + numeroTexto);
            }
        } else {
            this.setNumero(this.numero + numeroTexto);
        }
    };

    positivoNegativo = () => {
        if (this.numero.includes('-')) {
            this.setNumero(this.numero.replace('-', ''));
        } else {
            this.setNumero('-' + this.numero);
        }
    };

    borrar = () => {
        let negativo = '';
        let numeroTemp = this.numero;
        let initialValue = 1;

        if (this.numero.includes('-')) {
            negativo = '-';
            numeroTemp = this.numero.substring(initialValue);
        }

        if (numeroTemp.length > 1) {
            this.setNumero(negativo + numeroTemp.slice(0, -1));
        } else {
            this.setNumero('0');
        }
    };

    cambiarPorAnterior = () => {
        if (this.numero.endsWith('.')) {
            this.setNumeroAnterior(this.numero.slice(0, -1));
        } else {
            this.setNumeroAnterior(this.numero);
        }

        this.setNumero('0');
    };

    dividir = () => {
        this.cambiarPorAnterior();
        this.ultimaOperacion = Operadores.Dividir;
    };

    multiplicar = () => {
        this.cambiarPorAnterior();
        this.ultimaOperacion = Operadores.Multiplicar;
    };

    sumar = () => {
        this.cambiarPorAnterior();
        this.ultimaOperacion = Operadores.Sumar;
    };

    restar = () => {
        this.cambiarPorAnterior();
        this.ultimaOperacion = Operadores.Restar;
    };

    calcular = () => {
        const num1 = Number(this.numero);
        const num2 = Number(this.numeroAnterior);

        switch (this.ultimaOperacion) {
            case Operadores.Dividir:
                this.setNumero(`${num2 / num1}`);
                break;

            case Operadores.Multiplicar:
                this.setNumero(`${num1 * num2}`);
                break;

            case Operadores.Sumar:
                this.setNumero(`${num1 + num2}`);
                break;

            case Operadores.Restar:
                this.setNumero(`${num2 - num1}`);
                break;

            default:
                break;
        }

        this.setNumeroAnterior('0');
    };

    setNumero(value: string) {
        this.numero = value;
    }

    setNumeroAnterior(value: string) {
        this.numeroAnterior = value;
    }
}

const sharedStateStore = new SharedStateStore();
export default sharedStateStore;
