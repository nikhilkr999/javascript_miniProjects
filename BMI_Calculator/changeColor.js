const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height<0 || height==='' || isNaN(height)){
        results.innerHTML=`Please enter valid height ${height}`;
    }
    else if(weight<0 || weight==='' || isNaN(weight)){
        results.innerHTML=`Please enter valid height ${height}`;
    }
    else{
        const bmi = ((weight)/((height*height)/1000)).toFixed(2);
        results.innerHTML=`<span>${bmi}</span>`
    }
});