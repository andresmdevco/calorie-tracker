# 🔥 Calorie Tracker
 
Aplicación web construida con **React y TypeScript** para llevar el control de calorías consumidas y quemadas durante el día. Permite registrar comidas y ejercicios, calcula automáticamente el balance calórico y guarda la información en el `localStorage` del navegador para que persista entre sesiones.
 
## 🌐 Demo
 
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
 
🔗 [calorie-tracker-andresmdevco.vercel.app](https://calorie-tracker-andresmdevco.vercel.app/)
 
## 👀 Vista previa
 
https://github.com/user-attachments/assets/8ce5ffcb-31b3-47af-8b69-026f9b946946
 
## 🛠️ Tecnologías Utilizadas
 
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
 
- **React 19**
- **Tailwind CSS 4**
Además:
 
- **Context API + useReducer** — manejo del estado global de la app a través de un Provider, evitando el prop drilling
- **Custom Hook (`useActivity`)** — punto de acceso único y seguro al contexto de la aplicación
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
## 📁 Archivos principales
 
| Archivo | Descripción |
| --- | --- |
| `main.tsx` | Punto de entrada de la app. Envuelve `App` con `ActivityProvider` para que todo el árbol de componentes tenga acceso al contexto |
| `App.tsx` | Componente raíz. Consume `useActivity` para obtener `state` y `dispatch`, persiste `activities` en `localStorage` y renderiza `Form`, `CalorieTracker` y `ActivityList` |
| `context/ActivityContext.ts` | Define el contexto (`ActivityContext`) y el tipado de los valores que expone: `state`, `dispatch`, calorías calculadas y funciones auxiliares |
| `context/ActivityProvider.tsx` | Provider que inicializa `activityReducer` con `useReducer`, calcula con `useMemo` las calorías consumidas, quemadas, el balance neto y otros valores derivados, y los expone a través del contexto |
| `hooks/useActivity.ts` | Custom hook que consume `ActivityContext` mediante `useContext` y lanza un error si se usa fuera del `ActivityProvider` |
| `components/Form.tsx` | Formulario para crear y editar actividades. Obtiene `state` y `dispatch` desde `useActivity`. Cuando `state.activeId` cambia, precarga los datos de la actividad seleccionada para edición |
| `components/ActivityList.tsx` | Renderiza el listado de actividades usando `state` y `categoryName` desde `useActivity`, y despacha las acciones `set-activeId` (editar) y `delete-activity` (eliminar) |
| `components/CalorieTracker.tsx` | Obtiene `caloriesConsumed`, `caloriesBurned` y `netCalories` desde `useActivity` y las distribuye a `CalorieDisplay` |
| `components/CalorieDisplay.tsx` | Componente reutilizable que muestra un valor de calorías junto a su etiqueta (Consumidas, Quemadas, Balance) |
| `reducers/activity-reducer.ts` | Reducer con la lógica de estado: guardar, editar, eliminar actividades y reiniciar la app |
| `data/categories.ts` | Catálogo de categorías (Comida / Ejercicio) usado por `Form`, `ActivityList` y `ActivityProvider` |
| `types/index.ts` | Definiciones de tipos (`Activity`, `Category`) compartidas por toda la app |
 
## 🧠 Conceptos practicados
 
- Manejo de estado global con **Context API** combinada con `useReducer`, evitando prop drilling.
- Creación de un **custom hook** (`useActivity`) como capa de acceso segura al contexto.
- Acciones tipadas con TypeScript (uniones discriminadas para las acciones del reducer).
- Tipado avanzado con TypeScript (`type`, tipado de contexto y providers).
- Sincronización de estado con `localStorage` mediante `useEffect`.
- Optimización de cálculos derivados con `useMemo` dentro del Provider.
- Componentes controlados y formularios en React.
- Estilizado utility-first con Tailwind CSS.
- Organización de proyecto por responsabilidades (components, context, hooks, reducers, types, data).
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
```