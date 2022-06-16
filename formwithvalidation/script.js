const inputs = document.querySelectorAll('input');
const patterns = {
    telephone: /^0\d{10}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    // https://www.youtube.com/watch?v=QxjAOSUQjP0&list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD&index=15
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
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
