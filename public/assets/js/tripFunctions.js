$(function () {
    $("#joinTrip").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var userInput = parseInt("#joinTrip")
        var updatedSeats = {
            seats: seats - userInput
        };

        $.ajax("/api/trip/" + id, {
            type: "PUT",
            data: updatedSeats
        }).then(function () {
            console.log("The seats have been updated..");
            location.reload();
        });
    })
})
