function submitForm() {
    let firstname = document.getElementById('fnames').value;
    console.log(firstname);
    let lastname = document.getElementById('lnames').value;
    console.log(lastname);
    let pmail = document.getElementById('emailtype').value;
    console.log(pmail);

    let userdetails = {
        FirstName: firstname,
        LastName: lastname,
        email: pmail,
    }

    //  localStorage.removeItem("details")
    // console.log(JSON.parse(localStorage.getItem("details")));
    
    let arr = JSON.parse(localStorage.getItem("details"));
    
   
    console.log(arr);

    if(arr){
        //arr.push(userdetails)
        //console.log("in if");
        console.log(arr);
        var x=0;
        if (firstname != "" && lastname != "" && pmail != "") {     
            for (let i = 0; i < arr.length; i++) {
                if (pmail == arr[i].email) {
                    x=1;
                    
                }          
            }
            if(x==1){
                alert("Email already exists");
            }
            else{
                console.log("hi");
            arr.push(userdetails); 
            window.location.href="/success.html";    
            }  
        }
        else{
            alert("Please fill all the fields")
        }
    }
    else{
        arr=[userdetails]
        //console.log("in else");
        //console.log(searchhistory);  
        console.log(arr);      
    }
    localStorage.setItem("details", JSON.stringify(arr)); 
    

    
    console.log(JSON.parse(localStorage.getItem("details")));

}
