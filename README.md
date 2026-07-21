# 🔥 Calorie Tracker

Aplicación web construida con **React y TypeScript** para llevar el control de calorías consumidas y quemadas durante el día. Permite registrar comidas y ejercicios, calcula automáticamente el balance calórico y guarda la información en el `localStorage` del navegador para que persista entre sesiones.

## 🌐 Demo

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

🔗 [calorie-tracker-andresmdevco.vercel.app](https://calorie-tracker-andresmdevco.vercel.app/)

## 🛠️ Tecnologías Usadas

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

- **React 19**
- **Tailwind CSS 4**

Además:
- **useReducer** — manejo del estado global de la app
- **uuid** — generación de identificadores únicos
- **Heroicons** — íconos de edición y eliminación

## ✨ Características

- ➕ Registro de actividades (comida o ejercicio) con nombre y calorías.
- ✏️ Edición de actividades ya registradas.
- 🗑️ Eliminación de actividades individuales.
- 🔄 Botón para reiniciar la aplicación por completo.
- 📊 Resumen en tiempo real: calorías consumidas, quemadas y balance neto.
- 💾 Persistencia de datos mediante `localStorage`.
- 🎨 Interfaz responsive construida con Tailwind CSS.

## 📂 Estructura del proyecto

| Carpeta / Archivo | Descripción |
| --- | --- |
| `src/components/Form.tsx` | Formulario para crear y editar actividades |
| `src/components/ActivityList.tsx` | Listado de actividades registradas |
| `src/components/CalorieTracker.tsx` | Cálculo y despliegue del resumen de calorías |
| `src/components/CalorieDisplay.tsx` | Componente reutilizable para mostrar un valor de calorías |
| `src/data/categories.ts` | Definición de las categorías (Comida / Ejercicio) |
| `src/reducers/activity-reducer.ts` | Reducer con la lógica de estado de las actividades |
| `src/types/index.ts` | Tipos de TypeScript (`Activity`, `Category`) |
| `src/App.tsx` | Componente principal que compone la aplicación |
| `src/main.tsx` | Punto de entrada de la aplicación |

## 🧠 Conceptos practicados

- Manejo de estado complejo con `useReducer` y acciones tipadas.
- Tipado avanzado con TypeScript (`type`, uniones discriminadas para acciones).
- Sincronización de estado con `localStorage` mediante `useEffect`.
- Optimización de cálculos derivados con `useMemo`.
- Componentes controlados y formularios en React.
- Estilizado utility-first con Tailwind CSS.
- Organización de proyecto por responsabilidades (components, reducers, types, data).

## 🚀 Como ejecutar el proyecto

```bash
# Clonar el repositorio
git clone https://github.com/andresmdevco/calorie-tracker.git

# Entrar al proyecto
cd calorie-tracker

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

La aplicación quedará disponible en `http://localhost:5173`.

### Otros comandos disponibles

```bash
npm run build      # Genera la build de producción
npm run preview    # Previsualiza la build de producción
npm run lint       # Ejecuta el linter
```

