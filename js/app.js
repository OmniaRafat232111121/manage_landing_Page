const $input = document.querySelector('.input-form'),
    $inputLabel = document.querySelector('.invalid-msg'),
    $submit = document.querySelector('.btn-go');


class ValidationFrom{

    constructor(){
        $submit.addEventListener('click', this.getForm.bind(this))
    }
    getForm(e){
        e.preventDefault();

        const input = $input.value;
        if(input ===''){
            $input.classList.add('input-invalid');
            $inputLabel.classList.add('block')
        }if(input !== ''){
            $input.classList.remove('input-invalid');
            $inputLabel.classList.remove('block')
            $input.value='';
            
        }
    }
}
const app = new ValidationFrom();
const $menu = document.querySelector('.menu'),
    $close = document.querySelector('.close')
document.querySelector('.btn-nav').addEventListener('click', ()=>{
    document.querySelector('.links_nav').classList.toggle('is-flex')
    $menu.classList.toggle('is-none');
    $close.classList.toggle('is-block')
})