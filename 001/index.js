function carregar() {
  const msg = window.document.getElementById("msg");
  const imagem = window.document.getElementById("imagem");

  const data = new Date();

  const hora = data.getHours();
  const minutos = data.getMinutes();
  const segundos = data.getSeconds();
  const dia = data.getDate();
  const mes = data.getMonth() + 1; // Os meses começam do zero, então adicionamos 1
  const ano = data.getFullYear();

  msg.innerHTML = `Agora são ${hora} horas, ${minutos} minutos e ${segundos} segundos do dia ${dia}/${mes}/${ano}`;

  if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = "Imagens/fotomanha.png";
    document.body.style.background = "#ecd9ca";
  } else if (hora >= 12 && hora <= 18) {
    //boa tarde
    img.src = "Imagens/fototarde.png";
    document.body.style.background = "#602e15";
  } else {
    //boa noite
    img.src = "Imagens/fotonoite.png";
    document.body.style.background = "#1d2025";
  }
}

setInterval(carregar, 1000);
