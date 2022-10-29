import axios from "axios";

const $ = (name) => {
  return document.getElementsByName(name)[0];
};

const searchCep = async (cep) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

window.onload = () => {
  const cepInput = $("cep");
  cepInput.addEventListener("input", async (event) => {
    const cep = event.target.value;
    if (cep.length === 8) {
      cepInput.setAttribute("disabled", "true");
      try {
        const dataCep = await searchCep(cep);
        if (dataCep.erro) {
          throw new Error("Cep Inválido");
        }
        const street = $("street");
        street.value = dataCep.logradouro;
        const state = $("state");
        state.value = dataCep.uf;
        const city = $("city");
        city.value = dataCep.localidade;
        const neighborhood = $("neighborhood");
        neighborhood.value = dataCep.bairro;
      } catch (error) {
        console.log(error);
      } finally {
        cepInput.removeAttribute("disabled");
      }
    }
  });
};
