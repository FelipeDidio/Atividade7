function validationForm(){
    let validationCod = document.forms["register"]["cod"].value;
    let validadtionCat = document.forms["register"]["categoria"].value;
    let validadtionDesp = document.forms["register"]["despesa"].value;
    let validadtionValord = document.forms["register"]["valord"].value;
    let validadtionRepete = document.forms["register"]["repete"].value;
    let validadtionVecto = document.forms["register"]["vecto"].value;

    if(validationCod ==""){
        alert("O código dever ser preenchido")
        return false;
    }
    if(validadtionCat ==""){
        alert("A categoria dever ser preenchido")
        return false;
    }
    if(validadtionDesp ==""){
        alert("O nome da despesa dever ser preenchido")
        return false;
    }
    if(validadtionValord ==""){
        alert("O valor da despesa dever ser preenchida")
        return false;
    }
    if(validadtionRepete == ""){
        alert("O Ator principal precisa ser preenchido")
        return false;
    }
    if(validadtionVecto == ""){
        alert("A data da despesa precisa ser informada")
        return false;
    }
    
    alert("A validação ocorreu de forma correta");
}

function insert(){
    let cod = document.forms["register"]["cod"].value;
    let categoria = document.forms["register"]["categoria"].value;
    let despesa = document.forms["register"]["despesa"].value;
    let valord = document.forms["register"]["valord"].value;
    let repete = document.forms["register"]["repete"].value;
    let vecto = document.forms["register"]["vecto"].value;    

    let insert = window.document.getElementById("insertRow");
    
    insert.innerHTML = `
    <th scope='row'>${cod}</th>
    <td>${categoria}</td>
    <td>${despesa}</td>
    <td>${valord}</td>
    <td>${repete}</td>
    <td>${vecto}</td>    
    `;
}