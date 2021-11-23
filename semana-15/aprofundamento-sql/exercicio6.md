<!-- Você já pegou o padrão né? Primeiro fazemos algo guiado e depois deixamos você fazer a sós! -->

<!-- *a. Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.*  -->

ALTER TABLE Filmes 
ADD playing_limit_date DATE;

UPDATE Filmes
SET playing_limit_date = "2021-11-23";


<!-- *b. Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.* -->

ALTER TABLE Filmes
CHANGE avaliation avaliation FLOAT;


<!-- *c. Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído* -->


SET playing_limit_date = "2021-11-18"
WHERE id = "001";

UPDATE Filmes
SET playing_limit_date = "2021-11-30"
WHERE id = "002";


<!-- *d. Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.* -->

DELETE FROM Filmes
WHERE id = "004";

UPDATE Filmes
SET synopsis = "teste"
WHERE id = "004";

0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0


O MySQL percorreu toda a tabela e não encontrou nehuma fileira que tenha cumpra as condições colocadas. Diante disso, nenhum dado foi alterado.