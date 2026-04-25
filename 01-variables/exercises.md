# 🎮 Ejercicios — Variables, Condicionales y Ternarios

> **Repo:** `javascript-basico` · **Carpeta:** `01-variables/`  
> Cada alumno crea su propia branch y un archivo con su nombre.

---

## 🧙 Krakus — RPG: Sistema de combate

```
Branch:  feat/ejercicio-rpg
Archivo: 01-variables/nombre-alumno1.js
```

Tienes un héroe y un enemigo. Defíne con `const` y `let`:

```js
const heroeNombre = 'Kael';
const heroeHp = 150;
const heroeAtaque = 45;
const heroeNivel = 8;

const enemigoNombre = 'Orco';
let enemigoHp = 80;
const enemigoDefensa = 20;
```

**Lo que debe hacer el código:**

1. Calcular el **daño real** = `heroeAtaque - enemigoDefensa`. Si el daño es menor a 0, que sea 0 (ternario).
2. Calcular la **nueva HP del enemigo** tras el golpe.
3. Con `if / else if / else` determinar el resultado:
   - HP enemigo ≤ 0 → `"¡Victoria! {enemigoNombre} fue derrotado"`
   - HP enemigo ≤ 30 → `"¡{enemigoNombre} está casi muerto! HP restante: X"`
   - HP enemigo > 30 → `"El combate continúa... HP restante: X"`
4. Usar ternario para mostrar si el héroe es `"veterano"` (nivel ≥ 10) o `"aprendiz"`.
5. Imprimir todo con template literals.

**Output esperado:**

```
⚔️  Kael (aprendiz) atacó a Orco
💥 Daño real: 25
❤️  HP de Orco: 55/80
⚠️  ¡Orco está casi muerto! HP restante: 55
```

---

## 🚀 Juancho — Space Shooter: Sistema de nave

```
Branch:  feat/ejercicio-space
Archivo: 01-variables/nombre-alumno2.js
```

Define con `const` y `let`:

```js
const piloto = 'Nova';
let escudo = 100;
let combustible = 40;
let misiles = 3;
const puntos = 7500;
```

**Lo que debe hacer el código:**

1. Usar ternario para el **estado del escudo**: ≥ 50 → `"Escudo operativo"`, < 50 → `"¡Escudo crítico!"`.
2. Con `if / else if / else` evaluar el **rango** según puntos:
   - ≥ 10000 → `"Rango S — Comandante Estelar"`
   - ≥ 5000 → `"Rango A — Piloto de Élite"`
   - ≥ 1000 → `"Rango B — Cadete"`
   - < 1000 → `"Rango C — Recién alistado"`
3. Con `if` verificar si puede **disparar**: `misiles > 0` AND `combustible > 10`. Si no puede, indicar cuál recurso falta (dos `if` separados dentro del `else`).
4. Calcular el **combustible restante** si cada disparo consume 8 unidades (solo si tiene misiles).
5. Imprimir resumen completo con template literals.

**Output esperado:**

```
🚀 Nave de: Nova
🛡️  Escudo operativo (100%)
🏆 Rango A — Piloto de Élite (7500 pts)
🎯 Puede disparar: Sí | Misiles: 3 | Combustible tras disparo: 32
```

---

## 🏎️ Jonix — Racing: Clasificación de carrera

```
Branch:  feat/ejercicio-racing
Archivo: 01-variables/nombre-alumno3.js
```

Define con `const` y `let`:

```js
const piloto = 'Turbo';
let vueltaActual = 3;
const totalVueltas = 5;
const tiempoMejorVuelta = 78.4; // en segundos
let posicion = 2;
const nitro = true;
```

**Lo que debe hacer el código:**

1. Usar ternario para el **estado del nitro**: `"🔥 NITRO ON"` o `"❌ Nitro agotado"`.
2. Con `if / else if / else` determinar la **situación en pista** según posición:
   - 1 → `"¡Vas primero! Mantén el ritmo"`
   - 2 o 3 → `"En zona de podio. ¡A presionar!"`
   - 4 o 5 → `"Fuera del podio. Necesitas arriesgar"`
   - cualquier otro → `"Remontada épica necesaria"`
3. Calcular el **tiempo en minutos y segundos** de la mejor vuelta usando `Math.floor()` y el operador `%`.
4. Con `if` verificar si la carrera **terminó** (`vueltaActual === totalVueltas`) o cuántas vueltas faltan.
5. Usar ternario para mostrar `"¡Última vuelta!"` si solo falta 1, o `"Faltan X vueltas"` si faltan más.

**Output esperado:**

```
🏎️  Piloto: Turbo
📍 Posición: 2 — En zona de podio. ¡A presionar!
⏱️  Mejor vuelta: 1min 18seg | 🔥 NITRO ON
📊 Progreso: 60% completado | Faltan 2 vueltas
```

---

## 🔧 Workflow Git — igual para los 3

```bash
# 1. Asegurarse de estar en main y actualizado
git checkout main
git pull origin main

# 2. Crear la branch del ejercicio
git checkout -b feat/ejercicio-rpg      # cambiar por space o racing

# 3. Crear el archivo con tu nombre
touch 01-variables/tu-nombre.js         # ej: juan.js, maria.js

# 4. Abrir VS Code y escribir el código
code .

# 5. Activar nodemon para ver el output al guardar
npm run dev

# 6. Al terminar, hacer commit y subir
git add 01-variables/tu-nombre.js
git commit -m "feat(variables): ejercicio RPG completo"
git push origin feat/ejercicio-rpg
```

> 💡 Cambiar `rpg` por `space` o `racing` según corresponda, y el mensaje del commit por algo descriptivo de lo que hicieron.
