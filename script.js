const colors = ['aquamarine',' red', 'yellow', 'green', 'blue'];
const change = document.querySelector('.change');
change.addEventListener('click',()=>{
    let random = Math.floor(Math.random()*colors.length)
    document.body.style.backgroundColor = colors[random];
})