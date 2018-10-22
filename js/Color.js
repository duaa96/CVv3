
function  CvColor ( yourcolor)
{
    document.getElementById("Header").style.borderBottom="2px solid " + yourcolor;
    document.getElementById("TtimeExperiance2").style.color= yourcolor;
    document.getElementById("TtimeExperiance1").style.color=yourcolor;
    document.getElementById("TtimeEducation1").style.color=yourcolor;
    document.getElementById("TtimeEducation2").style.color=yourcolor;
    document.getElementById("AboutMe").style.color=yourcolor;
    document.getElementById("Skills").style.color=yourcolor;
    document.getElementById("Experience").style.color=yourcolor;
    document.getElementById("Education").style.color=yourcolor;
    document.getElementById("Skills1").style.border="2px solid "+yourcolor;
    document.getElementById("Skills2").style.border="2px solid "+ yourcolor;
    document.getElementById("Skills3").style.border="2px solid "+yourcolor;
    document.getElementById("Skills4").style.border="2px solid "+yourcolor;
    document.getElementById("Skills5").style.border="2px solid "+yourcolor;
    document.getElementById("Skills6").style.border="2px solid "+yourcolor;
    document.getElementById("ContUSform").style.backgroundColor=yourcolor;
    document.getElementById("submitdata").style.background=yourcolor;

   

 }

  
    



function ChangeColor(id)
{
  
    if(id==1)
    {
      let Colr="#FF0000";
        CvColor(Colr);
    } 
    else if (id==2)
    {
        let Colr="rgb(7, 20, 95)";
        CvColor(Colr);  
    }
       
    else if (id==3)
    {
        let Colr="rgb(46, 170, 67)";
        CvColor(Colr); 
    }
    else if(id==4)
    {
        let Colr="#cf8a05";
        CvColor(Colr); 
    }
}