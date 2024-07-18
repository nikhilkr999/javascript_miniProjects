let form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let number = parseInt(document.querySelector('#num').value);
    const res = document.querySelector('#result');
    if(number===10){
        res.innerHTML='Correct guess';
    }
    else{
        res.innerHTML="Incorrect guess"
    }
});

