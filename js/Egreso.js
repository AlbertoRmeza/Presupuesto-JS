class Egreso extends Dato{
    static contadorEgresos = 0;

    constructor(descripcion, valor){
        this._descripcion = descripcion;
        this._valor = valor;
        this._id = ++Egreso.contadorEgresos;
    }

    get Egreso(){
        return this._id;
    }
}
