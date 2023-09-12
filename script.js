const button = document.getElementById("button");
let minblock = 0;
let maxblock = 10;
const onclick = button.addEventListener("click",addBlock)

function addBlock(){
    
    if (minblock < maxblock){
        let Newblock = document.createElement("div");
        Newblock.className= ("block");

        let addtocontainer = document.getElementById("assignment-03");
        addtocontainer.appendChild(Newblock);

        minblock++;
    }
    else{
        alert("Maximum number of blocks reached (10).")
    }
   
}

