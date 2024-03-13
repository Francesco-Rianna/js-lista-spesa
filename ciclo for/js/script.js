// Data una lista della spesa:
const list = ['Latte', 'Cacao', 'Insalata', 'Carote', 'Pomodori', 'Piatti pronti'];
// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
// Svolgete questo esercizio in 2 versioni: col ciclo for e col ciclo while.
// mi prendo l'elemento del dom
const elementExpense = document.querySelector('.expense')
// starto il ciclo for per scorrere gli elementi dell'array
for (let i = 0; i < list.length; i++) {
    let listExpense = list[i]
    const spanList = document.createElement("span")
    elementExpense.append(spanList)

    spanList.innerHTML = `${listExpense}  `

    // elementExpense.innerHTML += ` ${listExpense}  `

}

