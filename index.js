let nomeHeroi = "Aragorn";
let experiencia = 7500;
let nivel = "";

// Estrutura de decisão para classificar o nível do herói
if (experiencia < 1000) {
  nivel = "Ferro";
} else if (experiencia >= 1001 && experiencia <= 2000) {
  nivel = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
  nivel = "Prata";
} else if (experiencia >= 5001 && experiencia <= 7000) {
  nivel = "Ouro";
} else if (experiencia >= 7001 && experiencia <= 8000) {
  nivel = "Platina";
} else if (experiencia >= 8001 && experiencia <= 9000) {
  nivel = "Ascendente";
} else if (experiencia >= 9001 && experiencia <= 10000) {
  nivel = "Imortal";
} else if (experiencia >= 10001) {
  nivel = "Radiante";
}

// Exibe a mensagem final com o nome e o nível do herói
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}.`);
