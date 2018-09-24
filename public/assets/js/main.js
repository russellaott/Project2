// Verification page functionality

var verMonth = ""
var verDay = ""
var verYear = ""

$("#ver-submit").on("click", function (event) {
    event.preventDefault();

    verMonth = $("#ver-month-input").val().trim();
    verDay = $("#ver-day-input").val().trim();
    verYear = $("#ver-year-input").val().trim();

    if ((verMonth === "") || (verDay === "") || (verYear === "")) {
        //replace with SWAL
        swal({
            icon: "error",
            title: "MISSING INFO",
            text: "Please fill in empty fields.",
            button: "Ok"
        });
    }
    else {
        ageVer();
    }
})

function ageVer() {
    var today = moment().format("MMDDYYYY");
    var todayMonth = today.slice(0, 2);
    var todayDay = today.slice(2, 4);
    var todayYear = today.slice(4, 8);

    var year = parseInt(todayYear) - parseInt(verYear);
    var month = parseInt(todayMonth) - parseInt(verMonth);
    var day = parseInt(todayDay) - parseInt(verDay);

    if(year < 18){
        swal({
            icon: "error",
            title: "ERROR",
            text: "Must be 18+ to access.",
            button: "Ok"
        });
    }
    else if(month < 0){
        swal({
            icon: "error",
            title: "ERROR",
            text: "Must be 18+ to access.",
            button: "Ok"
        });
    }
    else if(day < 0){
        swal({
            icon: "error",
            title: "ERROR",
            text: "Must be 18+ to access.",
            button: "Ok"
        });
    }
    else{
        window.location.href = "/home";
        console.log("User is 18")
    }
};



//Home page button functionality

$("#host-btn").on("click", function (event) {
    window.location.href = "/host";
});

$("#browse-btn").on("click", function (event) {
    window.location.href = "/browse";
});

$("#search-btn").on("click", function (event) {
    window.location.href = "/search";
});

$("#home-btn").on("click", function (event) {
    window.location.href = "/home";
});

$(function () {
    $("#joinTrip").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        //var userInput = $(this).data(parseInt("#joinTrip"))
        var seatsUpdate = {
            seats: parseInt(seats - 1)
        };

        $.ajax("/api/trip/" + id, {
            type: "PUT",
            data: seatsUpdate
        }).then(function () {
            console.log("The seats have been updated..");
            location.reload();
            alert("The seats for this trip have been updated");
        });
    })
});

$(function() {
    $("submit-search").on("click", function (event) {
        event.preventDefault();
        $.ajax({
            type: "GET", 
            url: "/search/" + depCityInput, 
            success: function(result){
                window.location.reload(true);
            }
        })
    })
})


