//HTML Elements
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.cell');

//Variables
let gameLive = true;
let xNext = true;

//Listeners
resetDiv.addEventListener('click', (e) => {
    window.location.reload();   
})

for(const cell of cellDivs) {
    cell.addEventListener('click', (e) => {
        const loc = e.target.classList[1];
        const classList = e.target.classList;

        if(classList[2]==='x' || classList[2]==='o') {
            return;
        }

        if(xNext === true) {
            classList.add('x');
            xNext = !xNext;
        } else if(xNext===false) {
            classList.add('o');
            xNext = !xNext;
        }
    })
}