const score = [4200, 850, 7600, 3100, 9999, 1200, 5500];

function mostrarLeaderboard() {
    for (let i = 0; i < score.length; i++) {
        if(i > 2) {
            console.log(`🎮 Puesto ${i + 1} - ${score[i]} pts`);
        }else if (i === 0){
                console.log(`🥇 Puesto 1 - ${score[i]} pts`)
            }else if (i === 1) {
                console.log(`🥈 Puesto 2 - ${score[i]} pts`)
            }else if (i === 2) {
                console.log(`🥉 Puesto 3 - ${score[i]} pts`)
        }
    }
}

function calcularEstadisticas() {
    let max = score[0];
    let min = score[0];
    let sum = 0;

    for (let i = 0; i < score.length; i++) {
        if (score[i] > max) {
            max = score[i];
        }
        if (score[i] < min) {
            min = score[i];
        }
        sum += score[i];
    }
    //Math.floor() redondea hacia abajo el resultado de la división, para obtener un número entero.
    console.log(`📊 Máximo: ${max} | Mínimo: ${min} | Promedio: ${Math.floor(sum / score.length)}`);
}

mostrarLeaderboard();
calcularEstadisticas();