
export default function calcularConversion(valueInput:string, filtroMoneda:string, filtroModo:string, oficialData:any, blueData:any){

    let result = 0;
    let cant = Number(valueInput
        .replaceAll(".","")
        .replaceAll(",","."));

    if(filtroMoneda === 'oficial') {
        if(filtroModo === 'compra'){

            result = cant * oficialData.compra; 
        } else {

            result = cant / oficialData.venta;
        }

    } else {
        if(filtroModo === 'compra'){

            result = cant * blueData.compra; 
        } else {

            result = cant / blueData.venta;
        }
    }
    result.toFixed(2);
    return String(result);
}