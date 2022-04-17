const hexagon = document.querySelector('.avatar')
let width = hexagon.style.width
function alertMe(){
    width += 20
    hexagon.style.top = width + 'px'
    console.log('clicked')
}

hexagon.addEventListener('click',alertMe)