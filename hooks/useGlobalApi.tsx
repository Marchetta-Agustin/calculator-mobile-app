import { ListCountries } from "@/data/currencies";
import { useEffect, useState } from "react";

interface DataApi {
    fechaActualizacion: string;
    monedaOrigen: string;
    monedaDestino: string;
    cotizacion: string;
}

type MonedaCodigo = typeof ListCountries[number]['code'];

const messageError = 'Error al traer los datos de las monedas.\n \n😓 Lo sentimos, intentelo nuevamente más tarde';

export const useGlobalApi = (monedaOrigen: MonedaCodigo, monedaDestino: MonedaCodigo) => {
  
    const [data, setData] = useState< DataApi | undefined >();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState< string | null >(null);

    // Función que pausa la ejecución
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {

        let urlApi = `https://api.frankfurter.dev/v2/rate/${monedaOrigen}/${monedaDestino}`;

        fecthApiGlobal(urlApi);
    }, [monedaOrigen, monedaDestino]);

    async function fecthApiGlobal(urlApi:string) {
        
        try {

            console.log("Mostrando pantalla de carga...");

            // PAUSA ARTIFICIAL: Congela el código por 5 segundos (5000 ms)
            //await delay(5000);

            const data = await fetch(urlApi);

            if (!data.ok) throw new Error(messageError);

            const res = await data.json();

            const dataGlobal:DataApi = {
                fechaActualizacion : res.date,
                monedaOrigen : res.base,
                monedaDestino : res.quote,
                cotizacion : res.rate
            }

            setData(dataGlobal);
            /* console.log(dataGlobal); */
            setLoading(false); 
            
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Ocurrió un error inesperado al buscar la información');
            }
            setLoading(false);
        }
    };

    return{

        loading,
        error,
        DataApi: data,
    }
}