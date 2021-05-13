var imgs = ["./images/background.jpg", "./images/background1.jpg", "./images/background2.jpg"];
var imgsindex = imgs.length -1;
var compteur = 0;
changeBackGround();


function changeBackGround(){
    if(compteur < imgsindex){
        compteur++;
    }else{
        compteur = 0;
    }
    $("header").css("background-image", "url(" + imgs[compteur] + ")");
    setTimeout(changeBackGround, 15000);
};


var $window =  $(window),
	$document = $(document);
    
$window.scroll(function() {
    var scrollHeight = $document.height();
    var scrollPosition = $window.height() + $window.scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
    console.log('Event Fired');
    $("#vehicules_to_be_loaded").css("display","block");
    }
});

