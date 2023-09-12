const element = document.getElementById("button");
const block = document.getElementsByClassName("block");
element.addEventListener("click", onclick);

    function onclick() {
        block.style.removeProperty('none');
    }