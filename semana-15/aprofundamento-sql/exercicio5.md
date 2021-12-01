<!-- *a. Releia a última query. Teste-a. Explique o resultado com as suas palavras* -->

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender

O MySQL rodou todas as tabelas registradas e encontrou 6 pessoas cadastradas. Após, ele agrupou a quantidade de pessoa cadastradas conforme o seu "gender", resultando no total de três para cada.

<!-- *b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética* -->

SELECT id, name FROM Actor ORDER BY name DESC;

<!-- *c. Faça uma query que retorne todos os atores ordenados pelo salário* -->

SELECT * FROM Actor ORDER BY salary;


<!-- *d. Faça uma query que retorne os atores com os três maiores salarios* -->

SELECT  FROM Actor ORDER BY salary DESC LIMIT 3;

<!-- *e. Faça uma query que retorne a média de salário por gênero* -->

SELECT AVG(salary), gender FROM Actor GROUP BY gender ;