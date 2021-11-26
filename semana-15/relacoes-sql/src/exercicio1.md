<!-- No nosso sistema, os filmes podem ser avaliados com uma nota de 0 a 10. Só que, agora, queremos pegar comentários junto com essas notas. Para isso, teremos que criar uma tabela para guardar essas informações.  -->

<!-- As avaliações estão diretamente relacionadas aos filmes. Cada filme pode ter várias avaliações; e uma avaliação está sempre atrelada a apenas um filme. Ou seja, é uma relação 1:N. Essa situação é representada colocando uma referência da tabela de filmes na tabela de avaliação, através de uma chave estrangeira. Abaixo, há a Query que cria essa tabela -->


<!-- CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
) -->


<!-- a. Explique o que é uma chave estrangeira -->

Uma chanve estrangeira é um valor relacionado ao de outra tabela.

<!-- b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes -->
```
INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
"004",
"Comentário teste4.",
5,
"004"
);
```
<!-- c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query. -->

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`maryam-allan-gilber`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

O comando retorna um erro informando que houve uma falha na verificação de uma das "constraints", sendo essa a da "foreign key" que não foi encontrada no banco de dados relacionado.


<!-- d. Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating. -->
```
ALTER TABLE Filmes 
DROP COLUMN avaliation;
```

<!-- e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query. -->


Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`maryam-allan-gilber`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))


Como o Filme que tentei deletar é usado como referência em uma foreign key, este não pode ser deletado antes que a tabela com do Rating e a foreign key relativas ao Filme também sejam deletados.