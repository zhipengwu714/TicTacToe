// Remove form after submission
export const Remove = (form_id) => {
    let myform = document.getElementById(form_id);
    myform.parentNode.removeChild(myform);
}

// Transpose matrix (swap rows and columns)
export const Transpose = (m) => {
    let newMatrix = [[],[],[]]
    
    for(let i = 0 ; i < m.length ; i++){
        m[i].forEach((item,index) => newMatrix[index].push(item) )
    }
    return newMatrix
}

// Get diagonal values
export const Dia = (m) => {
    return [
        [m[0][0], m[1][1], m[2][2]],  // Top-left to bottom-right
        [m[0][2], m[1][1], m[2][0]]   // Top-right to bottom-left
    ]
}

// Check rows/columns/diagonals for matches
export const Checker = (matrix) => {
    return matrix.map((item) => item.join(""))
        .filter((item) => (item === "XXX" ? "XXX" : item === "OOO" ? "OOO" : null))
}

// Display winner message
export const Winner = (type) => {
    document.getElementById('winner').innerHTML = `Congratulations ${type} Got the W`
}