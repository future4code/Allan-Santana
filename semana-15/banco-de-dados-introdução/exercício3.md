## Com os dados criados, podemos nos aventurar nas queries de seleção de dados. Elas são indicadas pelo operador SELECT. Talvez a query mais famosa que existe é: SELECT * FROM Actor

## a. Escreva uma query que retorne todas as informações das atrizes

SELECT * from Actor WHERE gender = "female";

## b. Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`

SELECT salary from Actor WHERE name = "Tony Ramos";

## c. Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.

SELECT * from Actor WHERE gender = "invalid";

Como não há nenhuma tabela com o valor requerido, ele retorna uma tabela com todos os campos com os valores null.

## d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000

SELECT id, name, salary from Actor WHERE salary < 500000;

## e. Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta


"Error Code: 1054. Unknown column 'nome' in 'field list'"
"Código de Erro: 1054. Coluna 'nome' é desconhecida na 'field list'"

O erro indica que a key 'nome' não está na lista de campos a serem preenchidos. O método correto é:

SELECT id, name from Actor WHERE id = "002";
