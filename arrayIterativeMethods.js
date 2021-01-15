var articles = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'TV', costo: 2500 },
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Celular', costo: 10000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 }
]



function main(){

    let articlesFilter = articles.filter((article)=>{
        return article.costo <= 500;
    });
    console.log(articlesFilter);

    let nameArticles = articles.map((article)=>{
        return article.nombre;
    });
    console.log(nameArticles);

    let findedArticles = articles.find((article)=>{
        return article.nombre === "laptop";
    });
    console.log(findedArticles);

    articles.forEach((article, index)=>{
        console.log(`${article.nombre} | ${index}`);
    });

    let cheapArticles = articles.some((article)=>{
        // regresa solamente verdadero o falso si la condicion se cumple.
        return article.costo <= 700;
    });

    console.log(cheapArticles);


}


main();