$(document).ready(function(){
    $("#pwdmismatch").hide();
    $("#formatmsg").hide();

    var fname=$("#fname");
    var mail=$("#mail");
    var pwd=$("#pwd");
    var cpwd=$("#cpwd");
    var date=$("#date");
    
$("#signup").click(function(){

    if(fname.val()=="" || mail.val()==""||pwd.val()==""||cpwd.val()==""||date.val()==""){

        if(fname.val()=="" && mail.val()==""&&pwd.val()==""&&cpwd.val()==""&&date.val()==""){
            $("#fname").focusout();
            $("#mail").focusout();
            $("#pwd").focusout();
            $("#cpwd").focusout();
            $("#date").focusout();
        }
       else if(mail.val()==""&&pwd.val()==""&&cpwd.val()==""&&date.val()==""){
            $("#date").focusout();
            $("#mail").focusout();
            $("#pwd").focusout();
            $("#cpwd").focusout();
        }
        else if(pwd.val()==""&&cpwd.val()==""&&date.val()==""){
            $("#pwd").focusout();
            $("#cpwd").focusout();
            $("#date").focusout();
        }
        else if(cpwd.val()==""&&date.val()==""){
            $("#cpwd").focusout();
            $("#date").focusout();
        }
        else if(date.val()==""){
            $("#date").focusout();
        }
        event.preventDefault();
    }
    else{
        $(this).unbind('click').submit();
        alert("welcome");
    }

});

    fname.focusin(function(){
$("#fnamemsg").hide();
    });
   
    fname.focusout(function(){
        if(fname.val()=="")
        {
        $("#fnamemsg").show();
        }
        else{
            $("#fnamemsg").hide();
        }
    });

    mail.focusin(function(){
$("#emailmsg").hide();
    });
   
    mail.focusout(function(){
        if(mail.val()=="")
        {
        $("#emailmsg").show();
        }
        else{
            $("#emailmsg").hide();
        }
    });

    pwd.focusin(function(){
$("#pwdmsg").hide();
    });
   
    pwd.focusout(function(){
        if(pwd.val()=="")
        {
        $("#pwdmsg").show();
        }
        else{
            $("#pwdmsg").hide();
        }
    });

    cpwd.focusin(function(){
$("#cpwdmsg").hide();
    });
   
    cpwd.focusout(function(){
        if(cpwd.val()=="")
        {
        $("#cpwdmsg").show();
        }
        else{
            $("#cpwdmsg").hide();
        }
    });

    date.focusin(function(){
$("#datemsg").hide();
    });
   
    date.focusout(function(){
        if(date.val()=="")
        {
        $("#datemsg").show();
        }
        else{
            $("#datemsg").hide();
        }
    });
   
    mail.keyup(function(){
    var mailex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var mailval=mail.val();

        if(mailex.test(mailval))
        {
            $("#formatmsg").hide();
        }
        else{
            $("#formatmsg").show();
        }
});

    pwd.keyup(function(){
    var pwdval=$("#pwd").val();

        if(pwdval==""){
            $("#pwdmsg").show();
        }else{
            $("#pwdmsg").hide();
        }
});


cpwd.keyup(function(){
    var pwdval=$("#pwd").val();
    var cpwdval=$("#cpwd").val();
            
       if(cpwdval!=pwdval)
        {
            
            $("#pwdmismatch").show();
        }
        else{
            
            $("#pwdmismatch").hide();
        }
    });
   $("#signup").click(function(){
   
    if(!$("#male").prop('checked')&&!$("#female").prop('checked')&&!$("#other").prop('checked'))
   {
       $("#gspan").show();
   }
   else{
    $("#gspan").hide();
   }
});
});
