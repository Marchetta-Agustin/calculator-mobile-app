import { useState, useEffect } from 'react';

interface DolarInfo {
  casa: string;
  compra: number;
  venta: number;
  fechaActualizacion: string; // viene como ISO string, no como Date
  moneda: string;
  nombre: string;
}

interface Dolars {
  oficial: DolarInfo;
  blue: DolarInfo;
}

const messageError = 'Error al traer los datos del dolar.\n \n😓 Lo sentimos, intentelo nuevamente más tarde';

export const useDolarApi = () => {

    const [data, setData] = useState< Dolars | undefined >();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState< string | null >(null);

    // Creamos la función que pausa la ejecución
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {

        fecthDolar();
    }, []); // Array vacío = se ejecuta solo una vez al montar

    async function fecthDolar() {

        try {

            // Aquí activas tu pantalla de carga 
            console.log("Mostrando pantalla de carga...");

            // PAUSA ARTIFICIAL: Congela el código por 5 segundos (5000 ms)
            //await delay(5000); 
            
            const [oficial, blue] = await Promise.all([
    
                // Primer Fetch a Dolar Oficial
                fetch('https://dolarapi.com/v1/dolares/oficial')
                .then((res) => {
                    if (!res.ok) throw new Error(messageError);
                    return res.json() as Promise<DolarInfo>;
                }),
    
                // Segundo Fetch a Dolar Blue
                fetch('https://dolarapi.com/v1/dolares/blue')
                .then((res) => {
                    if (!res.ok) throw new Error(messageError);
                    return res.json() as Promise<DolarInfo>;
                }),
            ]);
    
            const dolars : Dolars = {
                oficial: oficial,
                blue: blue,
            }
    
            setData(dolars);          // Guardar datos exitosos
            console.log(dolars);
            setLoading(false);        // Apagar estado de carga
            
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
        oficialData: data?.oficial,
        blueData: data?.blue,
    };
};
