document.addEventListener('DOMContentLoaded',function(){

    const btn = document.querySelector('button');
    const url = document.querySelector('input');

    btn.addEventListener('click',function(){

        window.location = url.value;

    });

});