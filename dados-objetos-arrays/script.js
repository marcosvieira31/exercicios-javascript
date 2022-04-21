  /* declaração simples de variável */
  let weight

  /* tipo de dado undefined pois não há declaração do valor da variável da linha acima*/
  console.log(typeof(weight))

   /* declaração de tipos de variáveis diferentes */
  let name = "Marcos"
  let age = 27
  let stars = 3.5
  let isSubscribed = true

  /* declaração de objeto com diferentes propriedades */
  let student = {
      name: "Marcos",
      age: 27,
      weight: 63.5,
      isSubscribed: true
  }

  /* print de mensagem no console.log com as propriedades do objeto anterior */
  console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg`)

  /* declaração de variável do tipo array vazio */
  let students = []
  /* console.log(student) */

  /* atribuindo à variável anterior o objeto anteriormente criado */
  students = [
          student
  ]
  

  /* acessando o valor da posição 0 do array students */
  /* console.log(students[0]) */

  /* Adicionando um novo student à posição 1 do array */
  const student2 = {
      name: "João",
      age: 22,
      weight: 75.9,
      isSubscribed: false
  }

  students[1] = student2

  console.log(students)

  /* O valor do código abaixo deve ser undefined pois o valor foi atribuido depois da escrita em tela. A declaração do tipo var sofre o hoisting, que é a elevação da declaração sem a tipagem  */
  console.log(a)
  var a = 1