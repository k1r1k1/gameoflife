function GameofLifeStrings(str) {

    const input = str.split('_')
      .map(st => st.split('')
      .map(s => parseInt(s)))
    // input string is iterable now
  
    let nbrs = [] // neighbors
    let res = [] // result array
  
    input.forEach((item, index) => {
      item.forEach((_, jndex) => {
  
        nbrs.push( // 1st neighbor
          (index - 1 >= 0) && (jndex - 1 >= 0) ?
            input[index - 1][jndex - 1] : null
        )
        nbrs.push( // 2nd neighbor
          (index - 1 >= 0) ?
            input[index - 1][jndex] : null
        )
        nbrs.push( // 3rd neighbor
          (index - 1 >= 0) && (jndex + 1 < item.length) ?
            input[index - 1][jndex + 1] : null
        )
        nbrs.push( // 4th neighbor
          (jndex - 1 >= 0) ?
            input[index][jndex - 1] : null
        )
        nbrs.push( // 5th neighbor
          (jndex + 1 < item.length) ?
            input[index][jndex + 1] : null
        )
        nbrs.push( // 6th neighbor
          (index + 1 < input.length) && (jndex - 1 >= 0) ?
            input[index + 1][jndex - 1] : null
        )
        nbrs.push( // 7th neighbor
          (index + 1 < input.length) ?
            input[index + 1][jndex] : null
        )
        nbrs.push( // 8th neighbor
          (index + 1 < input.length) && (jndex + 1 < item.length) ?
            input[index + 1][jndex + 1] : null
        )
  
        const aliveNeighbors = nbrs.filter(item => item === 1)
  
        if (input[index][jndex]) { // if cell is alive
  
          if (aliveNeighbors.length >= 2 && aliveNeighbors.length <= 3) {
            res.push(1)
          } else {
            res.push(0)
          }
  
        } else { // if cell is dead
  
          if (aliveNeighbors.length === 3) {
            res.push(1)
          } else {
            res.push(0)
          }
  
        }
  
        nbrs = []
  
      })
    })
  
    // convert result array into input string format
    const respString = res.toString().replaceAll(',', '')
    const inputSize = str.split('_').length
    const inputW = respString.length / inputSize
  
    return respString.match(new RegExp(`.{1,${inputW}}`, 'g'))?.join('_')
  
  }
     
  // keep this function call here 
  console.log(GameofLifeStrings('000_111_000'));
  