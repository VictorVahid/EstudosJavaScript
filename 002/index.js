function verificar() {
  const data = new Date();
  const ano = data.getFullYear();
  const fano = document.getElementById("txtano");
  const res = document.querySelector("div#res");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERROR] Verifique os dados e tente novamente!");
  } else {
    const fsex = document.getElementsByName("radsex");
    const idade = ano - Number(fano.value);
    let genero = " ";
    const img = document.createElement("img");
    img.setAttribute("id", "foto");
    img.setAttribute("draggable", "false"); // Desativa a capacidade de arrastar
    img.setAttribute("onmousedown", "return false;"); // Impede a seleção por meio de arrastar
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src','Imagens/bebehomem.png')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src','Imagens/homemjovem.png')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src','Imagens/homemadulto.png')
      } else {
        //idoso
        img.setAttribute('src','Imagens/homemidoso.png')
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src','Imagens/bebemulher.png')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src','Imagens/mulherjovem.png')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src','Imagens/mulheradulta.png')
      } else {
        //idoso
        img.setAttribute('src','Imagens/mulheridosa.png')
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `<p>Detectamos ${genero} com  ${idade} anos.</p>`
    res.appendChild(img)
  }
}
