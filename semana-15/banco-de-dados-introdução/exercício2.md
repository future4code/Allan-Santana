## O próximo passo é colocar dados nessa tabela. Vamos começar criando a linha de um ator brasileiro muito famoso.

## a. Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"male"
);

## b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

"Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'"
"Código de Erro: 1062. Entrada duplicada '002' para a chave 'PRIMÁRIA'."

Tendo em vista que ao criarmos a tabela declaramos que a propriedade 'id' seria a propriedade primária (ou seja, de indentificação única de cada tabela), o banco de dados não aceitará cadastrar outra entrada primária igual, dado que ela é usada para se acessar a informação contida na tabela.

## Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta



## c) "Error Code: 1136. Column count doesn't match value count at row 1"

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

Código de Erro: 1136. O número de colunas está diferente do número de valores na primeira fileira.

Para se corrigir o problema indicado, devemos completar o número de keys faltantes:

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

## d) "Error Code: 1364. Field 'name' doesn't have a default value"

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

"Código de Erro: 1364. Campo 'nome' não tem um valor padrão."

Sendo o campo 'name' um campo que não pode ficar vázio e inexistindo um valor padrão para este campo (o qual seria usado se nenhum outro fosse informado), é necessário que o valor do campo 'name' sempre seja informado. Portanto, devemos incluir a coluna 'name' e o valor dela para corrigir o problema.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Sérgio Malandro",
  400000,
  "1949-04-18", 
  "male"
);

## Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

"Código de Erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na fileira 1."

Ao inserir o valor da data, não foi colocado as aspas duplas. Portanto, o servidor interpretou as datas como números e os traços '-' como operadores de subtração, resultando no valor 1950. Para corrigir o problema devemos colocar aspas duplas em ambos os extremos da data.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);



