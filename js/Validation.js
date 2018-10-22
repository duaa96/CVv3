function ValidationForm(){
    let Phonefield=document.getElementById("YourPhone");
    let PhoneValue=document.getElementById("YourPhone").value;
    let contactForm=document.getElementById("FormContactUs");
    let Namefield=document.getElementById("YourName");
    let NameValue=document.getElementById("YourName").value;


    var Emailfield=document.getElementById("YourEmail");
    var EmailValue=document.getElementById("YourEmail").value;
    VallidationPhone(Phonefield,PhoneValue,contactForm);
    ValidationEmail(Emailfield,EmailValue,contactForm);
    ValidationName(Namefield,NameValue,contactForm);

}

function ValidationName(Namefield,NameValue,contactForm){
 
    var format =[a-zA-Z0]; 
    
    if(!format.test(NameValue) && NameValue !="")
    {
        Namefield.CustomError=true;
        Namefield.setCustomValidity("The Name is wrong Format");
        contactForm.reportValidity();
        alert("not valid name ");
        return false;

    }
    else 
    {
        Namefield.CustomError=false;
        Namefield.setCustomValidity("");
        return true;
    }


}
 

function VallidationPhone(Phonefield,PhoneValue,contactForm) {
  
    if((isNaN(PhoneValue) || PhoneValue.length>12 || PhoneValue.length<7  )&&PhoneValue !="")
    {
       Phonefield.CustomError=true;
      Phonefield.setCustomValidity("The phone Number is wrong Format");
      contactForm.reportValidity();
      alert("not valid phone number");
        return false;

    }
    else 
    {
        Phonefield.CustomError=false;
        Phonefield.setCustomValidity("");

        return true;
    }
   
 }
 function ValidationEmail(Emailfield,EmailValue,contactForm){

      var format =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    
        if(!format.test(EmailValue)&&  EmailValue !="")
        {
            Emailfield.CustomError=true;
            Emailfield.setCustomValidity("The Email is wrong Format");
            contactForm.reportValidity();
            alert("not valid email address");
            return false;

        }
        else 
        {
            Emailfield.CustomError=false;
            Emailfield.setCustomValidity("");
            return true;
        }
    
 }
