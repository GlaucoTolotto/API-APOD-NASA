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
    var linkimg = obj.url
    var tipomedia = JSON.stringify(obj.media_type)
    console.log(tipomedia)
    
    $("h1").html(obj.title)

    
    if (tipomedia === '"image"') {
        $("iframe").css("display", "none")
        $("img").attr("src", linkimg)
        $("img").css("display", "block")
    }
    else{
        $("img").css("display", "none")
        $("iframe").attr("src", linkimg);
        $("iframe").css("width", "640px")
        $("iframe").css("height", "480px")
        $("iframe").css("display", "block")
    }
}







// link api nasa "https://api.nasa.gov/planetary/apod?api_key=vD6zfTkfhpVK5SpaD4VRIHQ5oVU3UT9d2MpTiSX0"