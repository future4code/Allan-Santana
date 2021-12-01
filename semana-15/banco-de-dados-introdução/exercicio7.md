## Escreva uma query que:

## a. Retorna um filme cujo título contenha a palavra `vida`

SELECT * from Filmes WHERE name = "%vida%";

## b. Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.

SELECT * from Filmes WHERE (name LIKE "%vida%") OR (synopsis LIKE "%vida%");

## c. Procure por todos os filmes que já tenham lançado

SELECT * from Filmes WHERE DATE(launch_date) > "2021-11-22";

## d. Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.

SELECT * from Filmes WHERE (name LIKE "%vida%" OR synopsis LIKE "%vida%") AND avaliation > 7;