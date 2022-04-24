const arraySlicer = (LIMITE, projetos) => {
    let arrayIndex = 0 //Posição do item dentro da array
    let arrayNumber = 0 //Numero de arrays
    let finalArray = [[]] //Array final com os itens divididos
    
    for(let i = 0; i < projetos.length; i++) {
      if(arrayIndex === LIMITE) {
          arrayIndex = 0
          arrayNumber++
          finalArray.push([])
      }
    
      finalArray[arrayNumber].push(projetos[i])
      arrayIndex++
    }
    return finalArray
}
  
module.exports = arraySlicer