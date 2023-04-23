import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: {
    type: String,
    required: [true, "o Titulo do livro é obrigatório"],
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O autor é obrigatório"],
  },
  editora: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "editoras",
    required: [true, "A Editora é obrigatório"],
    enum: {
      values: ["Casa do código", "Alura"],
      message: "A editora {VALUE} não é um valor permitido",
    },
  },
  numeroPaginas: {
    type: Number,
    validate: {
      validator: (valor) => {
        return valor >= 10 && valor < -5000;
      },
      message: "O número de página deve estar entre 10 e 5000 . valor fornecido {VALUE}"
    },
    // min: [10, "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"],
    // max: [5000, "O número de páginas deve estar entre 10 e 5000."]
  },
});

const livros = mongoose.model("livros", livroSchema);

export default livros;
