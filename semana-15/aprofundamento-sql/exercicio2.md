<!-- Além de criar e ler as tabelas, é muito importante que entendamos também como atualizar e deletar. Inclusive, essas 4 operações têm um nome muito famoso que vocês com certeza irão ouvir no dia a dia do trabalho: CRUD. Quando falamos que vamos fazer um CRUD, queremos dizer que vamos fazer alguma aplicação que cria (Create), lê (Read), atualiza (Update) e deleta (Delete) algum tipo de informação.

No MySQL, existem mais dois operadores que nos permitiram fazer o CRUD de qualquer coisa. O primeiro deles é o `UPDATE`. A query abaixo muda o nome do ator com id `123` para `Moacyr Franco`:

UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "123"

*a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`* -->

UPDATE Actor
SET birth_date = "xxxx-xx-xx"
WHERE id = "003"

<!-- *b. Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior. -->

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes"


UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAESJuliana Paes"

<!-- c. Escreva uma query que atualize todas as informações do ator com o id `005`* -->

UPDATE Actor
SET name = "José",
salary = 100,
birth_date "2000-08-24",
gender = "male"
WHERE id = "005"


<!-- d*. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.* -->

UPDATE Actor
SET name = "José"
WHERE id = "055"

0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0


O resultado indica que o servidor conseguiu executar o comando passando por todas as tabelas. No entanto, como nenhuma fileira atendeu a condição imposta, um total de 0 coisas foram modificadas.