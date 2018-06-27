$(document).ready(function(){



    $('form').on('submit', function(){



        // var item = $('form input');
        // var todo = {item: item.val()};
        var ch = document.getElementById("rate").value;
        if (ch.trim() == ''){
            console.log('Choose Star Rating');
            return;
        }
        else {

            var formData = {
                item: $("#item").val(),
                rate: $("#rate").val(),
                desc: $("#desc").val(),
                file_name: $("#file_name").val()
            }

            console.log(formData);

            $.ajax({
                type: 'POST',
                url: '/users/users',
                data: formData,

                success: function (data) {
                    //do something with the data via front-end framework
                    location.reload();
                }
            });

            return false;
        }
    });

    //deleting
    $('li').on('click', function(){
        var item = $(this).text().replace(/\-/g, ' ');
        $.ajax({
            type: 'DELETE',
            url: '/users/deleteR' + item,
            success: function(data){
                //do something with the data via front-end framework
                location.reload();
            }
        });
    });

});

//getting stars value into input tag
function getvalue(id,r) {
    console.log(id,r);
    $("#rate").val(r);
    var starData = {
        id : r
    }
    return false;
}


//deleting data
function deleteRow(id) {
    console.log(id);

    $.ajax({
        type: 'DELETE',
        url: '/deleteR/' + id,
        success: function(data){
            //do something with the data via front-end framework
            location.reload();
        }
    });
}



