$(Document).ready(function(){

    const inputTitulo = document.querySelector('#titulo-tarefa');
    const listaUl = document.querySelector("ul");
    let listaTarefas =[];



    $('form').on('submit',function(e){
        e.preventDefault();

        listaTarefas.push(inputTitulo.value);  

        const li = $(`<li >${inputTitulo.value}</li>`);
        $(li).appendTo(listaUl);      
    });



    $('ul').on('click', function(e){
        if(e.target.classList.contains("li-line-through")){
            e.target.classList.remove("li-line-through");
        }else{
            e.target.classList.add("li-line-through");
        }
    });  

});