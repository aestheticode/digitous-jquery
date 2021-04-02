$("input").keyup(function() {
    var ch = $("input").val();
    console.log(ch)
   if (ch.length>= 5) {
        
   $("input").addClass('is-valid'),  $("input").removeClass('is-invalid')}

else {
    
     $("input").addClass('is-invalid')
    }
});