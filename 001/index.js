function carregar() {
  const msg = window.document.getElementById("msg");
  const imagem = window.document.getElementById("imagem");
  const data = new Date();
  const hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas`;

  if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = "/imagens/fotomanha.png";
    document.body.style.background = "#ecd9ca";
  } else if (hora >= 12 && hora <= 18) {
    //boa tarde
    img.src = "/imagens/fototarde.png";
    document.body.style.background = "#602e15";
  } else {
    //boa noite
    img.src = "/imagens/fotonoite.png";
    document.body.style.background = "#1d2025";
  }
}
