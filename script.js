let heroi = "Leopoldo";
let xp = 8500;

if (xp > 1 && xp <= 1000) {
  console.log(
    "O Xp do herói " + heroi + " é igual a " + xp + " seu level é -> Ferro!"
  );
} else if (xp > 1001 && xp <= 2000) {
  console.log(
    "O Xp do herói " + heroi + " é igual a " + xp + " seu level é -> Bronze!"
  );
} else if (xp > 2001 && xp <= 5000) {
  console.log(
    "O Xp do herói " + heroi + " é igual a " + xp + " seu level é -> Prata!"
  );
} else if (xp > 5001 && xp <= 7000) {
  console.log(
    "O Xp do herói " + heroi + " é igual a " + xp + " seu level é -> Prata!"
  );
} else if (xp > 7001 && xp <= 8000) {
  console.log(
    "O Xp do herói " + heroi + " é igual a " + xp + " seu level é -> Platina!"
  );
} else if (xp > 8001 && xp <= 9000) {
  console.log(
    "O Xp do herói " +
      heroi +
      " é igual a " +
      xp +
      " seu level é -> Ascendente!"
  );
} else if (xp > 9001 && xp <= 10000) {
  console.log(
    "O Xp do herói " + heroi + " é igual a " + xp + " seu level é -> Imortal!"
  );
} else if (xp == 10001 || xp > 10001) {
  console.log(
    "O Xp do herói " + heroi + " é igual a " + xp + " seu level é -> Radiante!"
  );
} else {
  console.log("Pontos de Experiência invalido!");
}
