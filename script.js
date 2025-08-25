function responder(estilo) {
  let jogador = {};
  
  switch (estilo) {
    case 'ataque':
      jogador = {
        nome: "CR7",
        imagem: "img/cr7.png",
        descricao: "Você é habilidoso, rápido e imprevisível no ataque!"
      };
      break;
    case 'meio':
      jogador = {
        nome: "Toni Kroos",
        imagem: "img/toni.png",
        descricao: "Você controla o jogo com classe e inteligência!"
      };
      break;
    case 'defesa':
      jogador = {
        nome: "Sergio Ramos",
        imagem: "img/sergio.png",
        descricao: "Você é o muro da defesa, sempre confiável."
      };
      break;
    case 'goleiro':
      jogador = {
        nome: "Navas",
        imagem: "img/cortu.png",
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