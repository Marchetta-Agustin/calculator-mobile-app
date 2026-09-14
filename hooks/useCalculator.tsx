import { useEffect, useRef, useState } from "react";

/* permite restringir q operadores se permiten y se q voy a recibir */
enum Operator {
    add = "+",
    subtract = "-",
    multiply = "x",
    divide = "÷",
}

/* Logica de la calculadora */
export const useCaculator = () => {

    const [formula, setFormula] = useState("0");
    const [number, setNumber] = useState("0");
    const [prevNumber, setPrevNumber] = useState("0");

     /* permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente sin desencadenar un nuevo renderizado cuando su valor cambia.  Se accede a su valor a través de la propiedad .current */

    const lastOperation = useRef<Operator | undefined>(undefined);

    useEffect(() => {
        if(lastOperation.current) {
            const firstFormulaPart = formula.split(" ").at(0);
            setFormula( `${firstFormulaPart} ${lastOperation.current} ${number}`);
        } else {
            setFormula(number);
        }

    }, [number]);

    useEffect(() => {
        const subResult = calculateSubResult();
        setPrevNumber(`${subResult}`);
    }, [formula]);

    /* Funcion q borra los valores y los deja pro defecto */
    const clean = () => {

        setNumber("0");
        setPrevNumber("0");
        setFormula("0");

        lastOperation.current = undefined;
    }

    /* Funcion q cambia el signo (+/-) al numero */
    const toggleSign = () => {

        if(number.includes("-")){
            return setNumber(number.replace("-", ""));
        }

        setNumber("-" + number);
    }

    /* Funcion q elimina el ultimo digito */
    const deleteLast = () => {

        let currentSign = "";
        let temporalNumber = number;

        if (number.includes("-")) {
            currentSign = "-";
            temporalNumber = number.substring(1)
        }

        if (temporalNumber.length > 1){
            return setNumber(currentSign + temporalNumber.slice(0, -1));
        }

        setNumber("0");
    }

    const setLastNumber = () => {
        calculateResult();

        if (number.endsWith(".")){
            setPrevNumber(number.slice(0, -1))
        }

        setPrevNumber(number)
        setNumber("0")
    }

    /* Funciones q controla las operaciones de los botones */

    const divideOperation = () => {
        
        setLastNumber();
        lastOperation.current = Operator.divide;
    }

    const multiplyOperation = () => {
        
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }

    const subtractOperation = () => {
        
        setLastNumber();
        lastOperation.current = Operator.subtract;
    }

    const addOperation = () => {
        
        setLastNumber();
        lastOperation.current = Operator.add;
    }

    /* Funcion q calcula el resultado */
    const calculateSubResult = () => {

        const [ firstValue, operation, secondValue] = formula.split(" ");

        const num1 = Number(firstValue);
        const num2 = Number(secondValue); // NaN

        if (isNaN(num2)) return num1;

        switch(operation){
            case Operator.add:
                return num1 + num2;
            
            case Operator.subtract:
                return num1 - num2;

            case Operator.multiply:
                return num1 * num2;

            case Operator.divide:
                return num1 / num2;

            default:
                throw new Error(`Operacion ${operation} no implementado`);
        }
    }

    const calculateResult = () => {

        const result = calculateSubResult();
        setFormula(`${result}`)

        lastOperation.current = undefined;
        setPrevNumber("0");
    }

    const buildNumber = ( numberString: string ) => {

        if (number.length > 15) return true;
        
        // Verificamos si ya existe el punto decimal
        if (number.includes(".") && numberString === "-") return;

        if (number.startsWith("0") || number.startsWith("-0") ) {

            if (numberString === "."){
                return setNumber(number + numberString);
            }

            // Evaluar si es otro vero y no hay punto
            if (numberString === "0" && number.includes(".")){
                return setNumber(number + numberString);
            }

            // Evaluar si es diferente de cero, no hay punto y es el primer numero
            if (numberString != "0" && !number.includes(".")){
                return setNumber(numberString);
            }

            // Evita el 0000000.00
            if (numberString === "0" && !number.includes(".")){
                return;
            }

        }


        setNumber(number + numberString);
    };



    return {
        // Props
        formula,
        number,
        prevNumber,

        // Methods
        buildNumber,
        clean,
        toggleSign,
        deleteLast,

        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateSubResult,
        calculateResult
    }
}