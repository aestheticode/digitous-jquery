$("button").click(function() {
  var ch =  $("input").val() 
var urlConcatener = 'https://restcountries.eu/rest/v2/name/' + ch
console.log(urlConcatener);
    $.ajax({
        url: urlConcatener,
        success: function(data, status, response) {
            $("#country").html(data[0].name)
            $("#capital").html(data[0].capital);

    }});
    });

