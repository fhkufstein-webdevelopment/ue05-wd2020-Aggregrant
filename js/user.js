$(document).ready(function () {

    var userListBody = $('.userList tbody');

    //@todo store and somehow update the current number of users
    var count = ($("#tableBody").find('tr').length) + 1;

    $('.needs-validation').submit(function (event) {

        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        } else {

        }

        //@todo

        var username = $("#username").val();
        //1. get values
        var deleteButton = '<td><button id="deleteButton" type="button" class="btn btn-secondary btn-danger deleteTrigger" title="Löschen"><i class="fa fa-trash"></i></button></td>';

        $("#tableBody").after("<tr><td>" + count + "</td><td>" + username + "</td>" + deleteButton + "</tr>");

        //2. create a new element
        //3. somehow add them to userListBody
        //4. update number of current users
        count++;
        //5. clear entries from the form
        $("#username").val("");
        //6. maybe do something else... :-)

        //your code follows here

        return false;
    });


    $('.deleteTrigger').click(function () {
        //@todo
        //1. remove current user from dom
        $('#tableBody tr:last').remove();
        //2. update number of current users
        count--;

        //your code follows here


    });

    //maybe some code follows here

});