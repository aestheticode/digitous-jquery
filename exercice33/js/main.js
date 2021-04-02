$("button").click(function() {
    

    $.ajax({
        url: 'https://restcountries.eu/rest/v2/name/france',
        success: function(data, statuts, response) {
            $("p").html(data[0].name, data[0].capital);
           
            
        }});
        
    });
    