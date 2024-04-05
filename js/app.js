
let cargarCabecero = () => { 
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();  
    
    console.log(formatoMoneda(presupuesto));
    console.log(formatoPorcentaje(porcentajeEgreso));
    console.log(formatoMoneda(totalIngresos()));
    console.log(formatoMoneda(totalEgresos()));    
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

let formatoMoneda = (moneda) => { 
    let moneda2 = moneda.toLocaleString("es-MX",{style:"currency", currency:"MXN"});
    return moneda2;
}

let formatoPorcentaje = (porcen) => { 
    let porcen2 = porcen.toLocaleString("es-MX",{style:"percent", minimumFractionDigits:4});
    return porcen2;
}


