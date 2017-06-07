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
            toEmailAddress: "contact@greysquaretechnologies.com",
            fromEmailAddress: document.getElementById('email').value,
            subject: "Email from GreySquare",
            message: document.getElementById('msg').value,
            name: document.getElementById('name').value
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
    var urlToApi = "http://www.greysquaretechnologies.com:5000/api";
    $.ajax({
            method: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(email),
            url: urlToApi + "/email/",
            success: function(data) {
                document.getElementById('abc').style.display = "none";
            },
            error: function(jqXHR, textStatus, errorThrown){
                console.log(textStatus);
                alert("There was like, an error doing that");
            }
        });
}
