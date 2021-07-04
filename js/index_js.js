window.onscroll = function() {navstopper(),topdisplayer()};

var navig = document.getElementById("navbar");
var stopper = navig.offsetTop;

function navstopper() {
  if (window.pageYOffset >= stopper) {
    navig.classList.add("sticky")
  } else {
    navig.classList.remove("sticky");
  }
}


var scrollbutton=document.getElementById("scrollbut");
var startbutton=document.getElementById("start");


startbutton.style.display="block";
//scrollbutton.style.display="none";

//window.onscroll=function(){ topdisplayer()};


function topdisplayer(){
	if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
	{
scrollbutton.style.display="block";
startbutton.style.display="none";
	}
	else{
scrollbutton.style.display="none";
startbutton.style.display="block";

	}
}
function topfunction(){
	document.documentElement.scrollTop=0;
        document.body.scrollTop=0;
}
