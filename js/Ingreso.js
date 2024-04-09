
class Ingreso extends Dato{
    static contadorIngresos = 0;

    constructor(descripcion, valor){
        this._descripcion = descripcion;
        this._valor = valor;
        this._id = ++Ingreso.contadorIngresos;
    }

    get Ingreso(){
        return this._id;
    }
}
