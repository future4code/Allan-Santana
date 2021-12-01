<!-- Leia os comandos abaixo e indique o que eles fazem. Não os rode nas tabelas desse projeto! Explique o que elas fariam se fossem rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder -->

<!-- a. -->


<!-- ALTER TABLE Actor DROP COLUMN salary; -->


O comando acima irá deletar a coluna de nome 'salary' na tabela 'Actor'.



<!-- b. -->


<!-- ALTER TABLE Actor CHANGE gender sex VARCHAR(6); -->

o comando acima irá alterar a coluna 'gender' da tabela 'Actor' para o nome 'sex' e com type de uma string de até 6 caracteres.


<!-- c.  -->


<!-- ALTER TABLE Actor CHANGE gender gender VARCHAR(255); -->

o comando acima irá alterar a colunca 'gender' da tabela 'Actor' para que o type dela seja uma string de até 255 caracteres.


<!-- d. Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres -->

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
