function responder(estilo) {
  let jogador = {};
  
  switch (estilo) {
    case 'ataque':
      jogador = {
        nome: "Vinícius Júnior",
        imagem: "img/vini.jpg",
        descricao: "Você é habilidoso, rápido e imprevisível no ataque!"
      };
      break;
    case 'meio':
      jogador = {
        nome: "Jude Bellingham",
        imagem: "img/bellingham.jpg",
        descricao: "Você controla o jogo com classe e inteligência!"
      };
      break;
    case 'defesa':
      jogador = {
        nome: "Rudiger",
        imagem: "img/rudiger.jpg",
        descricao: "Você é o muro da defesa, sempre confiável."
      };
      break;
    case 'goleiro':
      jogador = {
        nome: "Thibaut Courtois",
        imagem: "img/courtois.jpg",
        descricao: "Você é o último obstáculo. Calmo, estratégico e seguro!"
      };
      break;
  }

  document.getElementById('quiz').classList.add('hidden');
  document.getElementById('resultado').classList.remove('hidden');
  document.getElementById('jogador-nome').textContent = jogador.nome;
  document.getElementById('jogador-img').src = jogador.imagem;
  document.getElementById('jogador-desc').textContent = jogador.descricao;
}