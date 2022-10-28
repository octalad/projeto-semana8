const $ = (name) => {
  return document.getElementsByName(name)[0];
};

const searchCep = (cep) => {};

window.onload = () => {
  const cepInput = $("cep");
  cepInput.addEventListener("input", (event) => {
    const cep = event.target.value;
    if (cep.length === 8) {
      cepInput.setAttribute("disabled", "true");
    }
  });
};
