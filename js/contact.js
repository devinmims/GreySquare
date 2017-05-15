// Validating Empty Field
function check_empty() 
{
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") 
    {
        alert("Fill All Fields !");
    } else 
    {
        //document.getElementById('form').submit();
        //alert("Form Submitted Successfully...");
        var email = {
            emailAddress = document.getElementById('email').value,
            subject = "Email from GreySquare",
            message = document.getElementById('msg').value
        }
        sendEmail(email);
    }
}
//Function To Display Popup
function div_show() 
{
    document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide()
{
    document.getElementById('abc').style.display = "none";
}

function sendEmail(email)
{
    var urlToApi = "http://66.56.51.110:5000/api";
    $.ajax({
            method: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(email),     
            url: urlToApi + "/email/",
            //url: urlToApi + "/userbeerlist/",
            success: function(data) {  
                //location.reload();
                console.log(data);
                console.log('probably sent');
            },
            error: function(jqXHR, textStatus, errorThrown){
                console.log(textStatus);
                alert("There was like, an error doing that");
                //location.reload();
            }
        });
}