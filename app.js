let button = document.querySelector("button").addEventListener("click", function(e){
    // e.preventDefault()
    let x = document.getElementById("x").value
    let y = document.getElementById("y").value
    let result = Module.ccall("sum", "number", ["number", "number"], [x, y]);
    console.log(result);
})