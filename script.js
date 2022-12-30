function submitForm(){
    let firstname= document.getElementById('fnames').value;
    console.log(firstname);
    let lastname=document.getElementById('lnames').value;
    console.log(lastname);
    let pmail= document.getElementById('emailtype').value;
    console.log(pmail);  
    
    if(firstname!="" && lastname!="" && pmail!=""){
        alert("Form submitted successfully");
    }
    else{
        alert("Please fill all the fields")
    }
    
}