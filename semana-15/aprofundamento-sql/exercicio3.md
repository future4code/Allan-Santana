<!-- Para finalizar o CRUD, vamos ver o D: `DELETE`. Esse operador permite deletar toda uma linha de uma tabela, seria como apagar um elemento dela. 

Por exemplo, se quisermos apagar o ator com o nome `Tony Ramos`

*a. Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`* -->

DELETE FROM Actor WHERE name = "Fernanda Montenegro"

<!-- *b. Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00* -->

DELETE FROM Actor WHERE gender = "male" AND salary > 1000000
