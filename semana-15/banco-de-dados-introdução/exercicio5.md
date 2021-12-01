## Terminamos de fazer um belo estudo sobre a tabela de Atores. Agora, você vai ficar mais independente. Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)

## a. Escreva a query que cria essa tabela. Para sinopse, utilize o tipo `TEXT`, pesquise sobre ele se precisar. Explique a query resumidamente.

CREATE TABLE Filmes(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
synopsis TEXT NOT NULL,
launch_date DATE NOT NULL,
avaliation INT NOT NULL
);

Será um banco de dados em tabela com nome "Filmes". As propriedades são o id (string de até 255 caracteres e valor primário), name (string com 255 caracteres), synopsis(tipo texto com um limite maior que o VARCHAR), data de lançamento (tipo data) e avaliação (integral)

## Crie 4 filmes com as seguintes informações:

1) INSERT INTO Filmes(id, name, synopsis, launch_date, avaliation)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);


2) INSERT INTO Filmes(id, name, synopsis, launch_date, avaliation)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

3) INSERT INTO Filmes(id, name, synopsis, launch_date, avaliation)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

4) INSERT INTO Filmes(id, name, synopsis, launch_date, avaliation)
VALUES(
  "004", 
  "Tropa de Elite",
  "Em Tropa de Elite, o dia-a-dia do grupo de policiais e de um capitão do BOPE (Wagner Moura), que quer deixar a corporação e tenta encontrar um substituto para seu posto. Paralelamente dois amigos de infância se tornam policiais e se destacam pela honestidade e honra ao realizar suas funções, se indignando com a corrupção existente no batalhão em que atuam.",
  "2007-10-12", 
  10
);
