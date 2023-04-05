const bar = document.getElementById('bar');
const nav = document.getElementById('navbar')
const closebtn = document.getElementsByClassName('close')

if (bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if (close){
    nav.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}