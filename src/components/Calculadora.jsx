import React, { useState } from "react";

export default function calculadora() {
  const [peso, setPeso] = useState(0.0);
  const [altura, setAltura] = useState(0.0);
  const [imc, setImc] = useState(0.0);
  const [texto, setTexto] = useState("");

  function calcular(e) {
    e.preventDefault();

    const resultado = peso / (altura * altura);

    setImc(parseFloat(resultado).toFixed(2));

    setTexto(verificar(resultado));
  }

  function verificar(resultado) {
    if (resultado < 18.5) {
      return "Baixo Peso";
    } else if (resultado < 24.99) {
      return "Eutrofia (peso adequado)";
    } else if (resultado < 29.99) {
      return "Sobrepeso";
    } else if (resultado < 34.99) {
      return "Obesidade grau 1";
    } else if (resultado < 39.99) {
      return "Obesidade grau 2";
    } else{
      return "Obesidade extrema";
    }
  }

  return (
    <section>
      <form onSubmit={calcular}>
        <label>Digite o peso em KG</label>
        <input
          type="number"
          placeholder="Peso (KG)"
          name="peso"
          required
          step="0.01"
          onChange={(e) => setPeso(parseFloat(e.target.value).toFixed(2))}
        />
        <label>Digite a altura em Metros</label>
        <input
          type="number"
          placeholder="Altura (M)"
          name="altura"
          required
          step="0.01"
          onChange={(e) => setAltura(parseFloat(e.target.value).toFixed(2))}
        />
        <button type="submit">Calcular</button>
      </form>
      <p>IMC: {imc}</p>
      <h4>{texto}</h4>
    </section>
  );
}
