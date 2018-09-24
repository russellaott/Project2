
$("#joinTrip").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var updatedSeats = {
        seats: parseInt(seats - 1)
    };

    $.ajax("api/trip/" + id, {
        type: "PUT", 
        data: updatedSeats, 
        success: function(text) {
            response = textl
        }
    }).then(function() {
        console.log("The seats have been updated..");
        console.log(response.trip);
        
    })
})
