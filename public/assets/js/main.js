// Verification page functionality

var verMonth = ""
var verDay = ""
var verYear = ""
var matches = [];

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


//host functionality to add trip on submit
$("#host-submit").on("click", function (event) {
    event.preventDefault();

    var newDepMonth = $("#host-dep-month").val().trim();
    var newDepDay = $("#host-dep-day").val().trim();
    var newDepYear = $("#host-dep-year").val().trim();
    var newDepDate = newDepYear + "-" + newDepMonth + "-" + newDepDay;
    var newSeats = parseInt($("#host-seats").val().trim());
    var newSmoking = parseInt($("#host-smoking").val().trim());
    var newDepCity = $("#host-dep-city").val().trim();
    var newDepState = $("#host-dep-state").val().trim();
    var newArrCity = $("#host-arr-city").val().trim();
    var newArrState = $("#host-arr-state").val().trim();
    var newTripDetails = $("#host-trip-details").val();

    var newTrip = {
        departCity: newDepCity,
        departState: newDepState,
        destinationCity: newArrCity,
        destinationState: newArrState,
        dt: newDepDate,
        smoking: newSmoking,
        seats: newSeats,
        details: newTripDetails
    };

    $.ajax("/api/trip", {
        type: "POST",
        data: newTrip
    }).then(
        function () {
            console.log("Created new trip!");
            console.log(newTrip);

            //ADD SWAL!
        }
    )
});

//search functionality
$("#submit-search").on("click", function (event) {
    event.preventDefault();

    var searchDepCity = $("#dep-city").val().trim();
    var searchDepState = $("#dep-state").val().trim();
    var searchArrCity = $("#arr-city").val().trim();
    var searchArrState = $("#arr-state").val().trim();

    console.log("Searching trips leaving from: " + searchDepCity + "," + searchDepState + " and going to: " + searchArrCity + "," + searchArrState + "...");

    $.ajax("/api/trip", {
        type: "GET",
        success: function (text) {
            response = text;
        }
    }).then(function () {
        console.log(response.trip.length);

        for (var i = 0; i < response.trip.length; i++) {
            console.log(response.trip[i]);
            var depCity = response.trip[i].departCity;
            var depState = response.trip[i].departState;
            var arrCity = response.trip[i].destinationCity;
            var arrState = response.trip[i].destinationState;

            if ((depCity === searchDepCity) && (depState === searchDepState) && (arrCity === searchArrCity) && (arrState === searchArrState)) {
                console.log("MATCH: " + response.trip[i]);
                var matchTrip = response.trip[i];
                matches.push(matchTrip);
            };
            console.log(matches);
        };
        createCard();
    });
});

function createCard() {
    console.log("Creating Card!");
    console.log(matches.length);

    var newTitleCard = $('<div class="card mt-5 mb-2">');
    var newTitleCardBody = $('<div class="card-body">');
    var newCardTitle = $('<h5 class="card-title">').text("Matching Trips...");

    newTitleCardBody.append(newCardTitle);
    newTitleCard.append(newTitleCardBody);
    $("#match-results").append(newTitleCard);

    for (var i = 0; i < matches.length; i++) {
        var smokingValid = ""
        
        if(matches[i].smoking === 0){
            smokingValid = "No Smoking in vehicle"
        }
        else if(matches[i].smoking === 1){
            smokingValid = "Smoking allowed in vehicle"
        };

        var formattedDate = moment(matches[i].dt).format('MMMM Do YYYY');

        var newTripCard = $('<div class="card">');
        var newTripCardBody = $('<div class="card-body">');
        var newCardDate = $('<h5 class="card-title">').text(formattedDate);
        var newCardFromTo = $('<h6 class="card-subtitle mb-2 text-muted">').text(matches[i].departCity + "," + matches[i].departState + "  -to-  " + matches[i].destinationCity + "," + matches[i].destinationState);
        var newCardSmoking = $('<p class="card-text">').text(smokingValid);
        var newCardSeats = $('<p class="card-text">').text("Seats available: " + matches[i].seats);
        var newCardDetails = $('<p class="card-text">').text(matches[i].details);

        newTripCardBody.append(newCardDate);
        newTripCardBody.append(newCardFromTo);
        newTripCardBody.append(newCardSmoking);
        newTripCardBody.append(newCardSeats);
        newTripCardBody.append(newCardDetails);
        newTripCard.append(newTripCardBody);
        $("#match-results").append(newTripCard);

    }
}
