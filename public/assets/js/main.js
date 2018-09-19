var path = require("path");

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
        alert("PLEASE FILL IN EMPTY FIELDS");
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
        alert("UNABLE TO ACCESS HOMEPAGE");
    }
    else if(month < 0){
        alert("UNABLE TO ACCESS HOMEPAGE");
    }
    else if(day < 0){
        alert("UNABLE TO ACCESS HOMEPAGE");
    }
    else{
        //route to homepage goes here!
        module.exports = function (app) {
            app.get("*", function(req, res) {
                res.sendFile(path.join(__dirname, "/../../views.index.handlebars"));
            });
        }
        console.log("User is 18")
    }
}

// $(function () {
//     $("#browse").on("click", function(event){
//         event.preventDefault();
        
//     })
// })