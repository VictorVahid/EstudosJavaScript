function verificar() {
  let precoCombustivel = parseFloat(
    document.getElementsByClassName("Pgas")[0].value
  );
  let KmporLitro = parseFloat(
    document.getElementsByClassName("Gmedio")[0].value
  );
  let distanciaEmKm = parseFloat(
    document.getElementsByClassName("distanciaKM")[0].value
  );
  const res = document.getElementById(`res`);

  let Litrosconsumidos = distanciaEmKm / KmporLitro;
  let valorGasto = Litrosconsumidos * precoCombustivel;


  res.innerHTML = `|Gasto: ${precoCombustivel.toFixed(
    2
  )} <br/> | Média: ${KmporLitro.toFixed(
    2
  )} <br/> | Distância: ${distanciaEmKm.toFixed(
    2
  )} <br/> | Custo Total: R$ ${valorGasto.toFixed(2)}`;
}
