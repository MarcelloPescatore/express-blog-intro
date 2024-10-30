// importo l'array di post
const posts = require('../data/posts');

// creo una funzione index
function index (req, res){
    res.json({
        data: posts,
        count: posts.length
    })
}

// esporto la funzione index
module.exports = {index}