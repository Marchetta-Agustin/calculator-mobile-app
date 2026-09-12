import { DolarInfo } from "@/hooks/useDolarApi";

export default function calcularConversion(valueInput:string, filtroMoneda:string, filtroModo:string, oficialData:DolarInfo, blueData:DolarInfo){

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
    return String(result.toFixed(2));
}   