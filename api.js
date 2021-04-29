var url = "https://api.nasa.gov/planetary/apod?api_key=vD6zfTkfhpVK5SpaD4VRIHQ5oVU3UT9d2MpTiSX0";
function principal(){
var data = $("#colocaData").val();
    $.ajax({url: url+"&date="+data,
    success: function(result){
    mostrarImg(result)
} 
})
    
}

function mostrarImg(obj){
    $("#imagem").attr("src", obj.url)
    $("h1").html(obj.title)
}






// link api nasa "https://api.nasa.gov/planetary/apod?api_key=vD6zfTkfhpVK5SpaD4VRIHQ5oVU3UT9d2MpTiSX0"