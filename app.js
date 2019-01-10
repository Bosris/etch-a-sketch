
const divContainer = document.querySelector('#container');
const div = document.createElement('div');





function changeColor(){
   this.style.backgroundColor = 'black';
}





function createGrid(){
    //500h and 500 width container for 25 * 25 grid
    var size = 25 * 25;


    for (var i = 0; i < size; i++){
        const div = document.createElement('div');
        div.addEventListener("mouseover", changeColor);
        div.style.width = '20px';
        div.style.height = '20px';
        div.style.boxShadow = '0px 0px 0px 1px black inset';
        div.style.display = 'inline-block';
        div.style.float = 'left';
        


        divContainer.appendChild(div);
    }
    
}




createGrid();