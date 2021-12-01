<!-- Agora para treinar as funções novamente, faça uma query para responder as perguntas abaixo: -->

<!-- *a. Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?* -->

SELECT COUNT(*) FROM Filmes WHERE avaliation > 7.5;

R = 2


<!-- *b. Qual a média das avaliações dos filmes?* -->

SELECT AVG(avaliation) FROM Filmes;

Média = 8,333

<!-- *c. Qual a quantidade de filmes em cartaz?* -->

SELECT COUNT(*) FROM Filmes WHERE playing_limit_date >= "2021-11-23";

R = 2

<!-- *d. Qual a quantidade de filmes que ainda irão lançar?* -->

SELECT COUNT(*) FROM Filmes WHERE launch_date > "2021-11-23";

R = 0

<!-- *e. Qual a maior nota dos filmes?* -->

SELECT MAX(avaliation) FROM Filmes;

R = 10

<!-- *f. Qual a menor nota dos filmes?* -->

SELECT MIN(avaliation) FROM Filmes;

R = 7