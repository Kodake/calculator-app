export interface Props {
    texto: string;
    color?: string;
    isWide?: boolean;
    onPress: (numeroTexto: string) => void;
}
