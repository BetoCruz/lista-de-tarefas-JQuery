$(Document).ready(function(){

    // const inputTitulo = document.querySelector('#titulo-tarefa');
    // const listaUl = document.querySelector("ul");
    let listaTarefas =[];
    const inputTitulo = $('#titulo-tarefa');
    const listaUl = $("ul");
    


    $('form').on('submit',function(e){
        e.preventDefault();

        listaTarefas.push(inputTitulo.val());  

        const li = $(`<li >${inputTitulo.val()}</li>`);
        $(li).appendTo(listaUl);    
        
        listaTarefas.val("");
        
    });
    



    $('ul').on('click', function(e){
        if(e.target.classList.contains("li-line-through")){
            e.target.classList.remove("li-line-through");
        }else{
            e.target.classList.add("li-line-through");
        }
    });  

});