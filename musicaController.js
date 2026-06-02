let musicas = [
  {
    id: 1,
    nome: "Hate I Made you Love me",
    artista: "Ariana Grande",
    categoria: "Pop",
    imagem: "https://image.idntimes.com/post/20260429/petal-7_84f9c373-af6d-49db-921a-79f0d4dd2169.jpg"
  },
  {
    id: 2,
    nome: "Voltei Pra Mim",
    artista: "Marina Sena",
    categoria: "MPB",
    imagem: "https://portalpopline.com.br/wp-content/uploads/2025/10/marina-sena-thumb.jpg"
  }
];

exports.listarMusicas = (req, res) => {
  res.json(musicas);
};

exports.adicionarMusica = (req, res) => {
  try {
    const { nome, artista, categoria, imagem } = req.body;

    if (!nome || !artista || !categoria || !imagem) {
      return res.status(400).json({ erro: "Preencha todos os campos" });
    }

    const nova = {
      id: musicas.length + 1,
      nome,
      artista,
      categoria,
      imagem
    };

    musicas.push(nova);

    res.status(201).json(nova);
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao adicionar música" });
  }
};