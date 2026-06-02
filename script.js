const lista = document.getElementById("lista");
const form = document.getElementById("form");

async function carregar() {
  const res = await fetch("http://localhost:3000/musicas");
  const dados = await res.json();

  lista.innerHTML = "";

  dados.forEach(m => {
    const li = document.createElement("li");

    li.innerHTML = `
      <img src="${m.imagem}">
      <strong>${m.nome}</strong><br>
      ${m.artista}<br>
      <small>${m.categoria}</small>
    `;

    lista.appendChild(li);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const artista = document.getElementById("artista").value;
  const categoria = document.getElementById("categoria").value;
  const imagem = document.getElementById("imagem").value;

  await fetch("http://localhost:3000/musicas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome, artista, categoria, imagem })
  });

  form.reset();
  carregar();
});

carregar();