export const ListCountries = [
    /* Monedas de Norteamerica */
    { code: "USD", name: "Dólar Estadounidense", countryCode: "us" },
    { code: "CAD", name: "Dólar Canadiense", countryCode: "ca" },
    { code: "MXN", name: "Peso Mexicano", countryCode: "mx" },

    /* Monedas de Centroamerica */
    { code: "CRC", name: "Colón Costarricense", countryCode: "cr" },
    { code: "GTQ", name: "Quetzal", countryCode: "gt" },
    { code: "HNL", name: "Lempira", countryCode: "hn" },
    { code: "NIO", name: "Córdoba Nicaragüense", countryCode: "ni" },

    /* Monedas del Caribe */
    { code: "CUP", name: "Peso Cubano", countryCode: "cu" },
    { code: "HTG", name: "Gourde Haitiano", countryCode: "ht" },
    { code: "DOP", name: "Peso Dominicano", countryCode: "do" },

    /* Monedas de Latinoamerica */
    { code: "ARS", name: "Peso Argentino", countryCode: "ar" },
    { code: "BOB", name: "Boliviano", countryCode: "bo" },
    { code: "BRL", name: "Real Brasileño", countryCode: "br" },
    { code: "CLP", name: "Peso Chileno", countryCode: "cl" },
    { code: "COP", name: "Peso Colombiano", countryCode: "co" },
    { code: "PYG", name: "Guaraní", countryCode: "py" },
    { code: "PEN", name: "Sol Peruano", countryCode: "pe" },
    { code: "UYU", name: "Peso Uruguayo", countryCode: "uy" },
    { code: "VES", name: "Bolívar Soberano", countryCode: "ve" },
    
    /* Monedas de Asia */
    { code: "JPY", name: "Yen Japonés", countryCode: "jp" },
    { code: "CNY", name: "Yuan Chino", countryCode: "cn" },
    { code: "INR", name: "Rupia India", countryCode: "in" },
    { code: "SGD", name: "Dólar de Singapur", countryCode: "sg" },
    { code: "KRW", name: "Won Surcoreano", countryCode: "kr" },
    { code: "SAR", name: "Rial Saudí", countryCode: "sa" },

    /* Monedas de Europa */
    { code: "EUR", name: "Euro", countryCode: "eu" },
    { code: "GBP", name: "Libra Esterlina", countryCode: "gb" },
    { code: "CHF", name: "Franco Suizo", countryCode: "ch" },
    { code: "NOK", name: "Corona Noruega", countryCode: "no" },
    { code: "SEK", name: "Corona Sueca", countryCode: "se" },
    { code: "PLN", name: "Zloty Polaco", countryCode: "pl" },

    /* Moneda de Oceania */
    { code: "AUD", name: "Dólar Australiano", countryCode: "au" },
    { code: "NZD", name: "Dólar Neozelandés", countryCode: "nz" },
    { code: "PGK", name: "Kina", countryCode: "pg" },
    { code: "FJD", name: "Dólar Fiyiano", countryCode: "fj" },
    { code: "SBD", name: "Dólar de las Islas Salomón", countryCode: "sb" },
    { code: "VUV", name: "Vatu", countryCode: "vu" },

    /* Monedas de Africa */
    { code: "ZAR", name: "Rand Sudafricano", countryCode: "za" },
    { code: "EGP", name: "Libra Egipcia", countryCode: "eg" },
    { code: "NGN", name: "Naira Nigeriana", countryCode: "ng" },
    { code: "KES", name: "Chelín Keniano", countryCode: "ke" },
    { code: "MAD", name: "Dírham Marroquí", countryCode: "ma" },
] as const;

export type Moneda = typeof ListCountries[number];