const inputs = document.querySelectorAll('input');
const patterns = {
    telephone: /^0\d{10}$/
};

function validate(field, regex){
    console.log(regex.test(field.value));
    if(regex.test(field.value)){
        field.className = 'valid';
        console.log(field);
    }else{
        field.className ='invalid';
    }
}
inputs.forEach(input => {
    input.addEventListener('keyup', () => {
        validate(input, patterns[input.name]);
    });
});

