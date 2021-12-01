<!-- Algo muito importante que está faltando na nossa aplicação é representar o elenco dos filmes. Até agora, possuímos uma tabela com os filmes e outra tabela com os atores. Nós sabemos que um ator pode participar de vários filmes; e um filme pode ser estrelado por vários autores. Isso caracteriza uma relação N:M. -->

<!-- Essa relação é normalmente representada por uma tabela de relação. No nosso caso, vamos chamar essa tabela de `MovieCast` ("elenco do filme"). Ela vai possuir apenas duas colunas que fazem referências aos filmes e aos atores através de duas chaves estrangeiras. -->

 <!-- CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
     FOREIGN KEY (movie_id) REFERENCES Movie(id),
     FOREIGN KEY (actor_id) REFERENCES Actor(id)
 ); -->

<!-- a. Explique, com as suas palavras, essa tabela -->

A tabela "MovieCast" é uma tabela de junção na qual possui apenas duas "foreign keys" que relacionam ator e filme de forma não limitada.

<!-- b. Crie, ao menos, 6 relações nessa tabela  -->
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"006",
    "006"
);
```
<!-- c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query -->

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`maryam-allan-gilber`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Por não encontrar o ator com a id informada o MySQL impede que a nova relação seja criada, assim, impedindo um valor inválido.

<!-- d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query -->

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`maryam-allan-gilber`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Ao tentarmos deletar um ator relacionado a um filme, o MySQL também impede que o valor seja removido até que o valor relacionado também seja removido.