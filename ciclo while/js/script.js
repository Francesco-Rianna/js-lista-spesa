// Data una lista della spesa:
const list = ['Latte', 'Cacao', 'Insalata', 'Carote', 'Pomodori', 'Piatti pronti'];
// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
// Svolgete questo esercizio in 2 versioni: col ciclo for e col ciclo while.
// mi prendo l'elemento del dom
const elementExpense = document.querySelector('.expense')
// do un valore alla variabile i
let i = 0
// inizio il ciclo while 
while (i < list.length) {
    // creo elemento da inserire nel dom 
    const divList = document.createElement('div')
    // appendo l'elemento creato nel dom 
    elementExpense.append(divList)
    // inserisco gli elementi dell'array nell'elemento creato
    divList.innerHTML += `${list[i]}`
    // diamo l'incremento alla variabile i per concludere il ciclo 
    // FONDAMENTALE!!!!!!!! ALTRIMENTI IMPAZZISCE IL PC 
    i++
}
