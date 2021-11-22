## Começaremos pela tabela de atores. Nós vamos guardar as seguintes informações: id, nome, salário, data de nascimento e sexo

## a. Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.

O comando 'CREATE' serve para criar algo sendo a palavra TABLE seu primeiro argumento para que seja criada uma tabela.

'VARCHAR' e 'DATE' especificam o tipo de valor que poderá ser recebido pela propriedade, sendo o número colocado após o 'VARCHAR' a quantidade máxima de caracteres aceita.


## b. O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.

Ambos mostram algo relativo ao cliente utilizado. Sendo o 'SHOW TABLES' sobre as tabelas existentes na DB e o 'SHOW DATABASES' as DB cadastradas no cliente.

## c. O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.

Ele mostra a disposição das propriedades contidas na tabela requerida, mostrando em cada linha o nome da propriedade, o tipo de vlaor, a possibilidade dele ficar vázio, sua key única, valor default e extra.