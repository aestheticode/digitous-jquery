$("button").click(function() {
    var ch = $("input").val();
    console.log(ch)
   if (ch.length>= 5) {
        console.log("ok")
   $("input").addClass('is-valid')
}

else {
    console.log("not") 
     $("input").addClass('is-invalid')
    }
});