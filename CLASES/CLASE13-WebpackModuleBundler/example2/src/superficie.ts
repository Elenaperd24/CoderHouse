export class Superficie {
    cuadrado(lado: number):number{
        return lado*lado
    }

    rectangulo (ladoA: number, ladoB:number):number{
        return ladoA*ladoB
    }

    circulo (radio: number):number {
        return 3.14*radio*radio
    }
}

