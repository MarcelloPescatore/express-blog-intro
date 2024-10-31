// test file 
// console.log('hello');

// const { default: axios } = require("axios");

// selezione il div dove inserire le posts
const postsEl = document.querySelector('.posts');

// effettuo una chiamata ajax per consumare l'endpoint posts
axios
.get("http://127.0.0.1:3000/posts")
.then((response) => {
    // accedo all'array dalla risposta
    const responseArr = response.data.data;
    // creo la variabile markup dove aggiungere il template literal 
    let markup = "";

    responseArr.forEach(obj => {
        // prendo gli elementi dall'oggetto
        const objUrl = obj.img;
        const objTitle = obj.title;

        // template literal
        markup += `
            <div class="box-post">
                <h2>${objTitle}</h2>
                <img src="${objUrl}" style="width: 200px; height: 150px">
            </div>
        `
    });

    // aggiungo il markup in pagina 
    postsEl.innerHTML = markup;
})
.catch((error) => {
    console.log(error);
});