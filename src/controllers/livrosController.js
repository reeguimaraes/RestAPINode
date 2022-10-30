import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (req, res) => 
        livros.find()
        .populate('autor')
        .populate('editora')
        .exec((err, livros) => {
        res.status(200).json(livros)
})

    static listarLivroPorId = (req, res) =>{
        const id = req.params.id;

        livros.findById(id)
        .populate('autor','nome')
        .populate('editora')
         .exec((err, livros) =>{
            if(err) {
                res.status(400).send({message: `${err.message}- id do livro não localizado.`})
                }else {
                    res.status(200).send(livros);
                }
        })
    }


    static cadastrarLivro = (req, res) =>{
        let livro = new livros(req.body);

        livro.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message}- falha ao cadastrar livro.`})
            } else{
                res.status(201).send(livro.toJSON())
            }
    })
}
    static atualizarLivro = (req, res) =>{
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(!err){
                res.status(200).send({message: 'Livro Atualizado com sucesso'})
            }else{
                res.status(500).send({message: err.message})
        }
    })
}     

    static excluirLivro = (req, res) =>{
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) =>{
         if(!err){
            res.status(200).send({message: 'Livro Excluido com sucesso'})
         }else {
            res.status(500).send({message: err.message})
         }
        })
    }

    static listarLivroPorEditora = (req, res) =>{
        const editora = req.query.editora

        livros.find({'editora': editora}, {},  (err) =>{
            res.status(200).send(livros);
        })
        
    }
}    
                
export default LivroController