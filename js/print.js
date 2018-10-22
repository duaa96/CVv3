function printCV (){
    document.getElementById("print").style.display="none";
    document.getElementById("ContUSform").style.display="none";

    window.print();
    document.getElementById("print").style.display="block";
    document.getElementById("ContUSform").style.display="block";

}