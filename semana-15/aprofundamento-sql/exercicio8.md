<!-- Escreva **uma** query que: -->

<!-- *a. Retorne todos os filmes em ordem alfabética* -->

SELECT * FROM Filmes ORDER BY name ASC;

<!-- *b. Retorne os 5 primerios filmes em ordem descrente alfabética*  -->

SELECT * FROM Filmes ORDER BY name DESC LIMIT 5;


<!-- *c. Retorne os 3 filmes mais recentes em cartaz* -->

SELECT * FROM Filmes WHERE playing_limit_date >= CURDATE() ORDER BY launch_date DESC  LIMIT 3;

<!-- *d. Retorne os 3 filmes melhor avalidos* -->

SELECT * FROM Filmes ORDER BY avaliation DESC  LIMIT 3;