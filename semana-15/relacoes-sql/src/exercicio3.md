<!-- Para ler informações dessas tabelas, nós podemos aproveitar a relação entre elas e já juntar informações delas duas. Isso pode ser feito através do operador `JOIN`.  -->

<!-- Vamos começar estudando o `INNER JOIN`. Esse operador retorna somente os dados que possuem correspondentes nas duas tabelas. Então, por exemplo, se quisermos pegar todos os filmes que já foram avaliados e as suas respectivas avaliações, poderíamos fazer assim:  -->
```
SELECT  FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```
<!-- a. Explique, com suas palavras, a query acima. O que é o operador `ON`? -->

A query irá buscar os dados da tabela "Movie" e as informações  da tabela Rating, juntados ambas informações conforme o id do filme e o id relacionado no comentário de avaliação.

O operador "ON" permite criar uma condicional sobre quando as informações deverão ser juntadas ou ignoradas.


<!-- b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados. -->

````
SELECT Filmes.id, name , Rating.rate FROM Filmes 
INNER JOIN Rating ON Filmes.id = Rating.movie_id;
```
