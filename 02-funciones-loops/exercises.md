# 🎮 Ejercicios — Ciclos y Funciones

> **Repo:** `javascript-basico` · **Carpetas:** `04-bucles/` y `05-funciones/`  
> Cada alumno crea su propia branch y un archivo con su nombre.  
> ⚠️ Piensen bien si cada variable debe ser `const` o `let`, y qué tipo de función usar.

---

## 🧟 Krakus — Zombie Wave Survival

```
Branch:  feat/ejercicio-zombies
Archivo: 04-bucles/nombre-alumno1.js
```

Estás sobreviviendo oleadas de zombies. Tienes esta lista con la cantidad de enemigos por oleada:

```
[12, 7, 25, 4, 18, 30, 9]
```

**Lo que debe hacer el código:**

1. Crea una función `analizarOleadas` que reciba el arreglo de oleadas.
2. Dentro, usa un ciclo para recorrer cada oleada e imprimir su número y cuántos zombies trae.
3. En el mismo ciclo, clasifica cada oleada con un condicional:
   - < 10 zombies → `"Oleada leve ✅"`
   - < 20 zombies → `"Oleada moderada ⚠️"`
   - ≥ 20 zombies → `"¡OLEADA MASIVA! 🚨"`
4. La función debe retornar cuántas oleadas masivas hubo en total.
5. Crea otra función `resumen` que reciba ese número y lo imprima como:
   `"Sobreviviste X oleadas masivas. [leyenda según cantidad]"`
   La leyenda la decides tú.

**Output esperado (orientativo):**

```
Oleada 1: 12 zombies — Oleada moderada ⚠️
Oleada 2: 7 zombies  — Oleada leve ✅
Oleada 3: 25 zombies — ¡OLEADA MASIVA! 🚨
...
Sobreviviste 2 oleadas masivas. Eres un superviviente nato.
```

---

## 🏆 Juancho — Tabla de clasificación (Leaderboard)

```
Branch:  feat/ejercicio-leaderboard
Archivo: 05-funciones/nombre-alumno2.js
```

Tienes los puntajes de una partida multijugador:

```
[4200, 850, 7600, 3100, 9999, 1200, 5500]
```

**Lo que debe hacer el código:**

1. Crea una función `mostrarLeaderboard` que reciba los puntajes.
2. Usa un ciclo para imprimir cada puesto con su puntaje (el índice del arreglo determina el puesto).
3. Dentro del ciclo, asigna una medalla con un condicional:
   - Puesto 0 → `"🥇"`
   - Puesto 1 → `"🥈"`
   - Puesto 2 → `"🥉"`
   - Resto → `"🎮"`
4. Crea una función `calcularEstadisticas` que reciba el mismo arreglo y use un ciclo para calcular y retornar el puntaje más alto, el más bajo y el promedio (sin usar `Math.max` ni `Math.min`, calcúlalo tú con el ciclo).
5. Imprime las estadísticas al final.

**Output esperado (orientativo):**

```
🥇 Puesto 1 — 4200 pts
🥈 Puesto 2 — 850 pts
🥉 Puesto 3 — 7600 pts
🎮 Puesto 4 — 3100 pts
...
📊 Máximo: 9999 | Mínimo: 850 | Promedio: 4635
```

---

## 🚀 Joni — Simulador de viaje espacial

```
Branch:  feat/ejercicio-espacio
Archivo: 04-bucles/nombre-alumno3.js
```

Tu nave debe visitar una serie de planetas. Cada planeta tiene un costo de combustible distinto:

```
["Marte", "Europa", "Titan", "Kepler-22b", "Proxima"]
[20, 35, 50, 80, 120]  // combustible requerido por planeta
```

Empiezas con una cantidad de combustible que tú decides.

**Lo que debe hacer el código:**

1. Crea una función `iniciarViaje` que reciba los planetas, sus costos y el combustible inicial.
2. Usa un ciclo `while` para intentar visitar cada planeta en orden mientras tengas combustible suficiente.
3. En cada intento, imprime si pudiste llegar o no, y cuánto combustible te queda.
4. El ciclo debe detenerse si el combustible no alcanza para el siguiente planeta.
5. Crea una función `reporteFinal` que reciba cuántos planetas visitaste del total e imprima un mensaje distinto según el porcentaje completado:
   - 100% → `"¡Misión completada! 🌟"`
   - ≥ 60% → `"Misión parcial. Buen intento 🚀"`
   - < 60% → `"Misión fallida. Necesitas más combustible 💀"`

**Output esperado (orientativo):**

```
🚀 Rumbo a Marte...    Combustible restante: 180 ✅
🚀 Rumbo a Europa...   Combustible restante: 145 ✅
🚀 Rumbo a Titan...    Combustible restante: 95  ✅
🚀 Rumbo a Kepler-22b... Combustible restante: 15  ✅
⛽ No hay combustible suficiente para Proxima (necesitas 120, tienes 15)

Visitaste 4 de 5 planetas.
Misión parcial. Buen intento 🚀
```

---

## 🔧 Workflow Git — igual para los 3

```bash
# 1. Partir desde main actualizado
git switch main
git pull origin main

# 2. Crear la branch
git switch -c feat/ejercicio-zombies   # o leaderboard / espacio

# 3. Crear el archivo con tu nombre en la carpeta correcta
touch 04-bucles/tu-nombre.js             # alumno 1 y 3
touch 05-funciones/tu-nombre.js          # alumno 2

# 4. Activar nodemon y escribir el código
npm run dev

# 5. Commit y push al terminar
git add .
git commit -m "feat(bucles): ejercicio zombie survival completo"
git push origin feat/ejercicio-zombies
```

> 💡 Recuerden: el mensaje del commit debe describir **qué hicieron**, no solo "ejercicio terminado".
