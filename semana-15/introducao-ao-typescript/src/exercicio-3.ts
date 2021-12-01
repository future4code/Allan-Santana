// Considere que você esteja implementando uma rede social composta por posts de usuários. Cada um dos posts possui: um autor e um texto.

// Observe o seguinte array de posts:

// const posts = [
//   {
//     autor: "Alvo Dumbledore",
//     texto: "Não vale a pena viver sonhando e se esquecer de viver"
//   },
//   {
//     autor: "Severo Snape",
//     texto: "Menos 10 pontos para Grifinória!"
//   },
//   {
//     autor: "Hermione Granger",
//     texto: "É levi-ô-sa, não levio-sá!"
//   },
//   {
//     autor: "Dobby",
//     texto: "Dobby é um elfo livre!"
//   },
//   {
//     autor: "Lord Voldemort",
//     texto: "Avada Kedavra!"
//   }
// ]


// a) Copie o código acima para um arquivo .ts. Depois, crie um *type* para representar um post e utilize-o para fazer a tipagem do array posts.


const posts: post[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]

type post = {
    autor: string,
    texto: string
}

console.log(posts)

// b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:

// function buscarPostsPorAutor(posts, autorInformado) {
//   return posts.filter(
//     (post) => {
//       return post.autor === autorInformado
//     }
//   )
// }

// Quais são as entradas e saídas dessa função? Copie a função para o mesmo arquivo .ts do array de posts e faça a tipagem necessária.

function buscarPostsPorAutor(posts:post[], autorInformado:string): post[] {
  return posts.filter(
    (post:post): boolean => {
      return post.autor === autorInformado
    }
  )
}

console.log(buscarPostsPorAutor(posts, 'Hermione Granger'))