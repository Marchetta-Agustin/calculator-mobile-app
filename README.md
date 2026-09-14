# 🧮 Calculadora + Conversor de Moneda (React Native / Expo)

Proyecto personal de aprendizaje: una app móvil que arrancó como una calculadora simple (de un tutorial) y se fue ampliando, de a poco y por proyecto, incorporando funcionalidades reales de una app profesional: consumo de APIs externas, manejo de estado, componentes reutilizables, diseño responsive y despliegue a un dispositivo físico.

## 📱 Pantallas

| Pantalla | Descripción |
|---|---|
| **Calculadora** | Calculadora funcional básica (operaciones aritméticas simples), con límite de 15 dígitos. |
| **Dólar Nacional** | Conversor peso argentino ⇄ dólar, con cotización **oficial** y **blue** en tiempo real ([dolarapi.com](https://dolarapi.com)). Alterna entre modo compra/venta. |
| **Global** | Conversor entre ~40 monedas de todo el mundo, con datos en vivo de la API de [Frankfurter](https://frankfurter.dev). Selector de moneda con bandera, buscador y botón para invertir la conversión. |

## 🛠️ Stack técnico

- **[Expo](https://expo.dev)** (SDK 54) + **React Native**
- **TypeScript**
- **Expo Router** — navegación basada en archivos, con tabs inferiores
- **expo-image**, **expo-haptics**, **expo-navigation-bar**
- APIs externas: [dolarapi.com](https://dolarapi.com) (cotización ARS) y [Frankfurter](https://frankfurter.dev) (cotizaciones globales)
- **EAS Build** para compilar e instalar en dispositivos físicos

## 🏗️ Arquitectura

```
app/
  (tabs)/           → pantallas con barra de tabs (Expo Router route group)
    _layout.tsx     → configuración de las 3 tabs
    index.tsx       → Calculadora
    dolar-nacional.tsx
    global.tsx
  _layout.tsx       → layout raíz (fuente, tema, barra de navegación)

components/         → componentes reutilizables (controlados, sin estado propio):
  ScreenContainer, SelectOptionsButton (genérico <T>), AmountInput,
  AmountResult, CurrencyPickerModal, Loading, ErrorScreen

hooks/              → lógica de datos, separada de la UI:
  useCalculator, useDolarApi, useGlobalApi

utils/              → funciones puras de cálculo (sin estado ni hooks):
  calcularConversion, calcularConversionGlobal

data/               → datos estáticos (lista curada de monedas + banderas)
```

**Principios aplicados a lo largo del proyecto:**
- Separación entre lógica de datos (hooks) y presentación (componentes).
- Componentes controlados: reciben su valor y avisan cambios por props, sin estado propio duplicado.
- Tipado con TypeScript, incluyendo *union types* de literales (`"oficial" | "blue"`) en vez de `string` genérico.
- Diseño responsive real: sin anchos/altos fijos en píxeles — se usa `flex`, `%` relativos al contenedor, `SafeAreaView` (con `edges` explícitos) y `ScrollView` como red de seguridad, para que las pantallas se vean bien en cualquier tamaño de celular.

## 🚀 Correr el proyecto localmente

```bash
npm install
npx expo start
```
Escaneá el QR con la app **Expo Go** en tu celular.

## 📦 Compilar un instalable (Android)

El proyecto usa **EAS Build** para generar un APK instalable sin pasar por Google Play:

```bash
npm install -g eas-cli
eas login
eas build --platform android --profile preview
```

Al terminar, se genera un link/QR para descargar el `.apk` directo en el celular (hay que habilitar "instalar apps de origen desconocido" la primera vez).

## 📚 Documentación de aprendizaje

El detalle de cada fase (decisiones tomadas, bugs encontrados y cómo se resolvieron) está documentado en Word, fuera del repo:
- Fase 1 — Conversor de Dólar Nacional
- Fase 2 — Conversor Global, diseño responsive y despliegue

## 🔮 Próximos pasos

- Conversor de unidades (km, metros, segundos, horas, minutos)
- Pulido de tipado (sacar los `any` restantes) y redondeo de decimales consistente
## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
