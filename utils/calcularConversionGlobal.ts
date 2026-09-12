import { DataApi } from "@/hooks/useGlobalApi";

export default function calcularConversionGlobal(valueInput:string, dataApi:DataApi){

    let result = 0;
    let cant = Number(valueInput
        .replaceAll(".","")
        .replaceAll(",","."));

    result = cant * dataApi.cotizacion;

    return String(result.toFixed(2));
}