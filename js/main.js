



copyRights();





//get url value from UI function
function getUrl(){
    //get entered url value on text box
    var tbUrl = document.getElementById("tbUrl").value;
    return tbUrl;
}

//validations function
function validate(value){
    if(value === ""){
        style("warning", "tbUrl");
        return false
    }else{
       return true
    }
}

//change element styles in UI fuction
function style(styleType,theElement){
    if(styleType === "warning" && theElement === "tbUrl"){
       // document.write("warning");
       //document.getElementById("tbUrl").style.border = "3px solid red";
       document.getElementById("tbUrl").className = "m-1 form-control is-invalid";
       document.getElementById("tbUrl").focus();
    }
}

function copyRights(){
    let year = (new Date()).getFullYear();
    let copyRight = "Copyright 2022-" + year;
    document.getElementsByClassName("col-md-12").innerHTML =copyRight;
}
