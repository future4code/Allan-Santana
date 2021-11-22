## Escreva uma query que:

## a. Retorne o id, título e avaliação a partir de um id específico;

SELECT id, name, avaliation from Filmes WHERE id = 004;

## b. Retorne um filme a partir de um nome específico;

SELECT * from Filmes WHERE name = "Tropa de elite";

## c. Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`

SELECT id, name, synopsis from Filmes WHERE avaliation >= 7;
