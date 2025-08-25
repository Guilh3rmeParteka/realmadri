function responder(estilo) {
  let jogador = {};
  
  switch (estilo) {
    case 'ataque':
      jogador = {
        nome: "CR7",
        imagem: "img/cr7.jpg",
        descricao: "SIUUUUUUUUUUUU!"
      };
      break;
    case 'meio':
      jogador = {
        nome: "Toni Kroos",
        imagem: "img/toni.png",
        descricao: "Você toca nas bolas como ninguém!"
      };
      break;
    case 'defesa':
      jogador = {
        nome: "Sergio Ramos",
        imagem: "img/sergio.png",
        descricao: "Você não deixa as bolas passar ."
      };
      break;
    case 'goleiro':
      jogador = {
        nome: "Cortua",
        imagem: "img/cortu.png",
        descricao: "Você adora pegas nas bolas!"
      };
      break;
  }

  document.getElementById('quiz').classList.add('hidden');
  document.getElementById('resultado').classList.remove('hidden');
  document.getElementById('jogador-nome').textContent = jogador.nome;
  document.getElementById('jogador-img').src = jogador.imagem;
  document.getElementById('jogador-desc').textContent = jogador.descricao;
}