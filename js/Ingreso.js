
class Ingreso extends Dato{
    var contadorIngresos = 0;

    constructor(descripcion, valor, _id){
        this._descripcion = descripcion;
        this._valor = valor;
    }
    ++Ingreso._id;
    get Ingreso(){
        return this._id;
    }
}
