## Para finalizar o nosso estudo nas tabelas de atores, vamos fazer uma query mais complexa. Queremos encontrar todos os atores e atrizes:

- cujos nomes começam com "A" ou "J"; e
- cujos salários são maiores do que R$300.000

SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

## a. Explique com as suas palavras a query acima

O comando SELECT irá buscar com o argumento * (ou seja, qualquer um) na tabela 'Actor" devendo ser retornado apenas as tabelas com a lógica do WHERE que afirma que deve retornar apenas os que comecem com A ou J e ao mesmo tempo tenham salário superior a 300000

## b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00

SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000


## c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.

SELECT * FROM Actor WHERE name LIKE "%G%"

## d. Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00

SELECT * FROM Actor WHERE (name LIKE "%G%" OR "%A%") AND (salary BETWEEN 350000 AND 900000);