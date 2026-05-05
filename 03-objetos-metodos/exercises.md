# 🎮 Ejercicios — Objetos y Métodos de Arreglos

> **Repo:** `javascript-basico` · **Carpetas:** `03-objetos-metodos`
> Cada alumno crea su propia branch y un archivo con su nombre.  
> ⚠️ Como siempre: decidan ustedes `const` vs `let`, tipo de función, y cómo nombrar las variables.

---

## 🃏 Krakus — Inventario de un RPG

```
Branch:  feat/ejercicio-inventario
Archivo: 07-objetos/nombre-alumno1.js
```

Tienes el inventario de un personaje. Cada ítem es un objeto:

```js
[
  {
    nombre: 'Espada de fuego',
    tipo: 'arma',
    poder: 85,
    precio: 1200,
    disponible: true,
  },
  {
    nombre: 'Escudo de hierro',
    tipo: 'armadura',
    poder: 60,
    precio: 800,
    disponible: true,
  },
  {
    nombre: 'Poción de vida',
    tipo: 'consumible',
    poder: 0,
    precio: 150,
    disponible: false,
  },
  {
    nombre: 'Arco élfico',
    tipo: 'arma',
    poder: 70,
    precio: 950,
    disponible: true,
  },
  {
    nombre: 'Capa de sombras',
    tipo: 'armadura',
    poder: 45,
    precio: 600,
    disponible: false,
  },
  {
    nombre: 'Bomba de humo',
    tipo: 'consumible',
    poder: 30,
    precio: 200,
    disponible: true,
  },
];
```

**Lo que debe hacer el código:**

1. Usa `filter` para obtener solo los ítems disponibles.
2. Usa `map` para crear un nuevo arreglo con solo los nombres de los ítems disponibles.
3. Usa `reduce` para calcular el valor total del inventario completo (disponible o no).
4. Usa `find` para encontrar el arma con mayor poder (puedes apoyarte en `reduce` para esto).
5. Usa `some` para verificar si hay algún consumible disponible.
6. Usa `every` para verificar si todos los ítems cuestan más de 100 monedas.
7. Para el ítem más caro del inventario, usa `Object.keys` y `Object.entries` para imprimir todas sus propiedades en formato:
   ```
   nombre    → Espada de fuego
   tipo      → arma
   poder     → 85
   ...
   ```

**Output esperado (orientativo):**

```
🗡️  Ítems disponibles: Espada de fuego, Escudo de hierro, Arco élfico, Bomba de humo
💰 Valor total del inventario: 3900 monedas
🏆 Arma más poderosa: Espada de fuego (85 de poder)
🧪 ¿Hay consumibles disponibles? Sí
✅ ¿Todos cuestan más de 100? Sí

📦 Ítem más caro — Espada de fuego:
   nombre      → Espada de fuego
   tipo        → arma
   poder       → 85
   precio      → 1200
   disponible  → true
```

---

## 🏟️ Juancho — Estadísticas de un equipo de eSports

```
Branch:  feat/ejercicio-esports
Archivo: 07-objetos/nombre-alumno2.js
```

Tienes el roster de un equipo competitivo:

```js
[
  { jugador: 'SnipeKing', rol: 'carry', kda: 8.2, victorias: 42, derrotas: 18 },
  { jugador: 'IronShield', rol: 'tank', kda: 3.1, victorias: 38, derrotas: 22 },
  {
    jugador: 'ShadowMage',
    rol: 'support',
    kda: 5.7,
    victorias: 45,
    derrotas: 15,
  },
  {
    jugador: 'BlitzRunner',
    rol: 'carry',
    kda: 7.4,
    victorias: 30,
    derrotas: 30,
  },
  {
    jugador: 'GhostWard',
    rol: 'support',
    kda: 4.9,
    victorias: 40,
    derrotas: 20,
  },
];
```

**Lo que debe hacer el código:**

1. Usa `map` para calcular el **winrate** de cada jugador (`victorias / (victorias + derrotas) * 100`) y crear un nuevo arreglo de objetos con `{ jugador, rol, kda, winrate }` redondeado a 1 decimal.
2. Usa `filter` para obtener los jugadores con winrate mayor al 60%.
3. Usa `reduce` para calcular el KDA promedio del equipo.
4. Usa `find` para obtener el jugador con el KDA más alto.
5. Usa `every` para verificar si todo el equipo tiene winrate positivo (> 50%).
6. Usa `Object.values` para sumar el total de victorias del equipo.
7. Elige un jugador y usa `Object.entries` para imprimir su ficha completa como en el ejercicio anterior.

**Output esperado (orientativo):**

```
📊 Winrates calculados:
   SnipeKing  — 70.0% | KDA: 8.2
   IronShield — 63.3% | KDA: 3.1
   ...

🏆 Jugadores élite (winrate > 60%): SnipeKing, IronShield, ShadowMage
⚡ KDA promedio del equipo: 5.86
🎯 MVP del equipo: SnipeKing (KDA 8.2)
✅ ¿Todo el equipo tiene winrate positivo? Sí
🥇 Total de victorias del equipo: 195
```

---

## 🛸 Jonix — Flota espacial

```
Branch:  feat/ejercicio-flota
Archivo: 06-arrays/nombre-alumno3.js
```

Tienes la flota de naves de una facción:

```js
[
  {
    id: 'NX-01',
    clase: 'explorador',
    escudo: 80,
    ataque: 40,
    combustible: 200,
    activa: true,
  },
  {
    id: 'NX-02',
    clase: 'destructor',
    escudo: 150,
    ataque: 120,
    combustible: 80,
    activa: true,
  },
  {
    id: 'NX-03',
    clase: 'explorador',
    escudo: 60,
    ataque: 35,
    combustible: 50,
    activa: false,
  },
  {
    id: 'NX-04',
    clase: 'fragata',
    escudo: 200,
    ataque: 90,
    combustible: 120,
    activa: true,
  },
  {
    id: 'NX-05',
    clase: 'destructor',
    escudo: 130,
    ataque: 110,
    combustible: 30,
    activa: false,
  },
  {
    id: 'NX-06',
    clase: 'fragata',
    escudo: 180,
    ataque: 85,
    combustible: 95,
    activa: true,
  },
];
```

**Lo que debe hacer el código:**

1. Usa `filter` para obtener solo las naves activas con combustible suficiente para entrar en combate (combustible > 60).
2. Usa `map` para crear un arreglo de strings con el formato `"NX-01 (explorador)"` de esas naves.
3. Usa `reduce` para calcular el **poder de fuego total** de toda la flota (suma de todos los ataques).
4. Usa `find` para localizar la nave con el escudo más alto.
5. Usa `some` para verificar si alguna nave activa tiene combustible crítico (< 40).
6. Usa `every` para verificar si todos los destructores tienen ataque mayor a 100.
7. Para la nave más poderosa (mayor ataque), usa `Object.keys` para listar sus propiedades y `Object.values` para listar sus valores, e imprímelos juntos.

**Output esperado (orientativo):**

```
⚡ Naves listas para combate: NX-01 (explorador), NX-02 (destructor), NX-04 (fragata), NX-06 (fragata)
💥 Poder de fuego total de la flota: 480
🛡️  Nave con mayor escudo: NX-04 (200 de escudo)
⚠️  ¿Alguna nave activa con combustible crítico? Sí
✅ ¿Todos los destructores tienen ataque > 100? No

🏆 Nave más poderosa — NX-02:
   id          → NX-02
   clase       → destructor
   escudo      → 150
   ataque      → 120
   combustible → 80
   activa      → true
```

---

## 🔧 Workflow Git — igual para los 3

```bash
# 1. Partir desde main actualizado
git switch main
git pull origin main

# 2. Crear la branch
git switch -c feat/ejercicio-inventario   # o esports / flota

# 3. Crear el archivo con tu nombre en la carpeta correcta
touch 07-objetos/tu-nombre.js               # alumno 1 y 2
touch 06-arrays/tu-nombre.js                # alumno 3

# 4. Activar nodemon y escribir el código
npm run dev

# 5. Commit y push al terminar
git add .
git commit -m "feat(objetos): ejercicio inventario RPG completo"
git push origin feat/ejercicio-inventario
```

> 💡 No se vale usar `for` para los puntos donde se pide un método específico. La idea es que practiquen **exactamente** `map`, `filter`, `reduce`, `find`, `some`, `every`, `Object.keys`, `Object.values` y `Object.entries`.
