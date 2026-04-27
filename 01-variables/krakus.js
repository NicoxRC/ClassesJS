const heroeNombre = 'Kael';
const heroeHp = 150;
const heroeAtaque = 45;
const heroeNivel = 8;

const enemigoNombre = 'Orco';
let enemigoHp = 80;
const enemigoDefensa = 20;


console.log(heroeNombre,(heroeNivel >= 10 ? "(Veterano)" : "(Aprendiz)"),"atacó a", enemigoNombre);
console.log("Daño real:", heroeAtaque - enemigoDefensa < 0 ? "0" : heroeAtaque - enemigoDefensa);
console.log("HP de",enemigoNombre, ":", heroeAtaque - enemigoDefensa < 0 ? "0" : enemigoHp-(heroeAtaque - enemigoDefensa), "/", enemigoHp);
enemigoHp = enemigoHp-(heroeAtaque - enemigoDefensa)
if (enemigoHp <= 0) {
    console.log("¡Victoria!", (enemigoNombre), "fue derrotado");
} else if (enemigoHp <= 30) {
    console.log("¡", (enemigoNombre), "está casi muerto! HP restante:", enemigoHp);
} else {
    console.log("El combate continúa... HP restante:", enemigoHp);
    
}
