function submitForm(){
    let firstname= document.getElementById('fnames').value;
    console.log(firstname);
    let lastname=document.getElementById('lnames').value;
    console.log(lastname);
    let pmail= document.getElementById('emailtype').value;
    console.log(pmail);
   
    
    if(firstname!=null && lastname!=null && pmail!=null){
        alert("success");
    }
    else{
        alert("fill again")
    }
}