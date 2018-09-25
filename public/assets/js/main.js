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

    if (year < 18) {
        swal({
            icon: "error",
            title: "ERROR",
            text: "Must be 18+ to access.",
            button: "Ok"
        });
    }
    else if (month < 0) {
        swal({
            icon: "error",
            title: "ERROR",
            text: "Must be 18+ to access.",
            button: "Ok"
        });
    }
    else if (day < 0) {
        swal({
            icon: "error",
            title: "ERROR",
            text: "Must be 18+ to access.",
            button: "Ok"
        });
    }
    else {
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

$(".joinTrip").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var seats = $(this).data("seats");
    var updatedSeats = {
        seats: (seats - 1 )
    };
    $.ajax({
        url: window.location.origin + "/api/trip/" + id,
        type: "PUT",
        data: updatedSeats,
    }).then(function () {
        console.log("The seats have been updated..");
        if (seats > 0) {
            swal({
                title: "Awesome!",
                text: "You've saved your seat and have been added to the roadtrip.",
                icon: "success", 
                text: {
                    buttons: {
                        search: {
                            text: "Search Trips", 
                            value: "search"
                        },
                        home: {
                            text: "Home", 
                            value: "home"
                        }
                    }
                }
            }).then((value) => {
                switch (value) {

                    case "search":
                    window.location.href = "/search"
                    break;

                    case "home":
                    window.location.href = "/home"
                    break;
                    
                    default: 
                    window.location.href = "/home"
                }
            });
        }
        else {
            swal({
                title: "Sorry!",
                text: "There are no more seats available for this trip.",
                icon: "warning",
            });
        }

    });
})

$("#submit-search").on("click", function (event) {
    event.preventDefault();

    var searchDepCity = $("#dep-city").val().trim();
    var searchDepState = $("#dep-state").val().trim();
    var searchArrCity = $("arr-city").val().trim();
    var searchArrState = $("arr-state").val().trim();

    console.log("Searching trips leaving from: " + searchDepCity + "," + searchDepState + " and going to: " + searchArrCity + "," + searchArrState + ".");

    $.ajax("/api/trip", {
        type: "GET",
        success: function (text) {
            response = text;
        }
    }).then(function () {
        console.log(response.trip);
    })
})


