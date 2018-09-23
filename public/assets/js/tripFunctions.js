$(function () {
    $("#joinTrip").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        //var userInput = $(this).data(parseInt("#joinTrip"))
        var updatedSeats = {
            seats: (seats - 1)
        };

        $.ajax("/api/trip/" + id, {
            type: "PUT",
            data: updatedSeats
        }).then(function () {
            console.log("The seats have been updated..");
            location.reload();
            alert("You've been added to the trip!");
        });
    })
})
