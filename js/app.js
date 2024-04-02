
let cargarCabecero = () => { 
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();  
    
    console.log(presupuesto);
    console.log(porcentajeEgreso);
    console.log(totalIngresos());
    console.log(totalEgresos());    
};

let totalIngresos = () => { 
    let totalIngresos = 0;
    for (const ingreso of ingresos){
        totalIngresos += ingreso;
    }
    return totalIngresos;
};

let totalEgresos = () => { 
    let totalEgreso = 0;
    for (const egreso of egresos){
        totalEgreso += egreso;
    }
    return totalEgreso;
};

let egresos = [900, 400];
let ingresos = [9000, 400];




