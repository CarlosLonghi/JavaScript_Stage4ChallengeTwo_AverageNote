let students = [
  {
    name: 'Paulo Ciclano',
    testGrade: 5.6,
    workGrade: 3.9
  },
  {
    name: 'Carlos Eduardo',
    testGrade: 7.0,
    workGrade: 5.9
  },
  {
    name: 'Amanda Fulana',
    testGrade: 8.0,
    workGrade: 8.7
  },
  {
    name: 'Alana Ribeiro',
    testGrade: 9,
    workGrade: 10
  },
  {
    name: 'Jucelino Ribeiro',
    testGrade: 10,
    workGrade: 10
  }
]

let averageNote

function averageCalc(number1, number2) {
  averageNote = Number(((number1 + number2) / 2).toFixed(1))
  return averageNote
}

for (let student of students) {
  averageNote = averageCalc(student.testGrade, student.workGrade)

  if (averageNote == 10) {
    alert(
      `Parabéns ${student.name} sua nota foi: ${averageNote} \n Você foi Aprovado(a)! e Ganhou uma bolsa de 100%`
    )
  } else if (averageNote >= 7) {
    alert(
      `A média do(a) aluno(a) ${student.name} é: ${averageNote} \n Parabéns ${student.name}, Você foi Aprovado(a)!`
    )
  } else if (averageNote < 7) {
    alert(
      `A média do(a) aluno(a) ${student.name} é: ${averageNote} \n Não foi dessa vez ${student.name}, Você foi Reprovado(a)!`
    )
  }
}
