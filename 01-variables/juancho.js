//Definición de constantes y variables:

const piloto = 'Nova';
let escudo = 100;
let combustible = 32;
let misiles = 3;
const puntos = 7500;

//Primer mensaje, da el nombre del piloto.
console.log('Nave de ' + piloto);

//Segundo mensaje, da el estado del escudo de la nave y su valor.
let estadoEscudo = escudo >= 50 ? 'Escudo operativo' : '¡Escudo crítico!';
console.log(estadoEscudo + ` (${escudo}%)`);

//Tercer mensaje, evalúa y da el rango del piloto.
if(puntos >= 10000){
    console.log('Rango S - Comandante Estelar' + ` (${puntos} pts)`);
}else if(puntos >= 5000){
    console.log('Rango A - Piloto de Élite' + ` (${puntos} pts)`);
}else if(puntos >= 5000){
    console.log('Rango B - Cadete' + ` (${puntos} pts)`);
}else{
    console.log('Rango C - Recién Alistado' + ` (${puntos} pts)`);
}

//Cuarto mensaje, evalua si la nave puede disparar o no y por qué.
if(misiles > 0 && combustible > 10){
    console.log(`Puede disparar: Sí | Misiles: ${misiles} | Combustible tras disparo: ${combustible - 8}`);
}else{
    if(misiles <= 0 && combustible <= 10){
        console.log(`Puede disparar: No, faltan misilies (${misiles}) y combustible (${combustible})`);
    }else{
        if(misiles <= 0){
            console.log(`Puede disparar: No, faltan misilies (${misiles})`);
        }

        if(combustible <= 10){
            console.log(`Puede disparar: No, falta combustible (${combustible})`);
        }
    }
}