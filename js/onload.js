$(document).ready(function(){ });

window.onload = function detectMob() {

	$("#alertDiv").fadeOut(8000); $("#shlokaDiv").fadeIn(10000);
    if ( ( window.innerWidth <= 900 ) && ( window.innerHeight <= 900 ) ) {
			detectMobile = 1;
    	}
    if(detectMobile == 0) {
			document.getElementById("vid").style.width="800px";
			document.getElementById("footer").style.marginTop=""+window.innerHeight-800+"px"; 
			document.getElementById("footerDiv").setAttribute("align", "right");
			document.getElementById("aboutNav").style.animationName="shakeTwo";
			document.getElementById("aboutNav").style.animation="shakeTwo 3s";
			document.getElementById("twitterNav").style.animationName="shakeTwo";
			document.getElementById("twitterNav").style.animation="shakeTwo 3s";
			document.getElementById("contactNav").style.animationName="shakeTwo";
			document.getElementById("contactNav").style.animation="shakeTwo 3s";
			document.getElementById("ytNav").style.animationName="shakeTwo";
			document.getElementById("ytNav").style.animation="shakeTwo 3s";
			document.getElementById("quizNav").style.animationName="shakeTwo";
			document.getElementById("quizNav").style.animation="shakeTwo 3s";
			document.getElementById("shlokaDiv").style.fontSize="13px"; 
			document.getElementById("abt").style.fontSize="18px"; 
			document.getElementById("p1").style.fontSize="18px";
			document.getElementById("p2").style.fontSize="18px";
			document.getElementById("p3").style.fontSize="18px";
			document.getElementById("p4").style.fontSize="18px";
			document.getElementById("mainHeading").style.fontSize="48px"; 
			document.getElementById("alertDiv").style.fontSize="15px";

		} else {
			document.getElementById("vid").style.width="290px";
			document.getElementById("vid").style.height="350px";
			document.getElementById("vid").style.marginTop="0px";
			document.getElementById("vid").style.marginLeft="30px";
			document.getElementById("footer").style.marginTop="140px";
			document.getElementById("footerDiv").setAttribute("align", "center");
			document.getElementById("aboutNav").style.animationName="shake";
			document.getElementById("aboutNav").style.animation="shake 3s";
			document.getElementById("twitterNav").style.animationName="shake";
			document.getElementById("twitterNav").style.animation="shake 3s";
			document.getElementById("contactNav").style.animationName="shake";
			document.getElementById("contactNav").style.animation="shake 3s"; 
			document.getElementById("ytNav").style.animationName="shake";
			document.getElementById("ytNav").style.animation="shake 3s";
			document.getElementById("quizNav").style.animationName="shake";
			document.getElementById("quizNav").style.animation="shake 3s";
			document.getElementById("shlokaDiv").style.fontSize="13px";
			document.getElementById("abt").style.fontSize="10px";
			document.getElementById("p1").style.fontSize="10px";
			document.getElementById("p2").style.fontSize="10px";
			document.getElementById("p3").style.fontSize="10px";
			document.getElementById("p4").style.fontSize="10px";
			document.getElementById("h1").style.fontSize = "20px";
			document.getElementById("h2").style.fontSize = "20px";
			document.getElementById("h3").style.fontSize = "20px";
			document.getElementById("h4").style.fontSize = "20px";
			document.getElementById("h5").style.fontSize = "20px";
			document.getElementById("h6").style.fontSize = "20px";
			document.getElementById("h7").style.fontSize = "20px";
			document.getElementById("h41").style.fontSize = "15px";
			document.getElementById("h42").style.fontSize = "15px";
			document.getElementById("h43").style.fontSize = "15px";
			document.getElementById("h44").style.fontSize = "15px";
			document.getElementById("h45").style.fontSize = "12px";
			document.getElementById("h46").style.fontSize = "12px";
			document.getElementById("mainHeading").style.fontSize="38px"; 
			document.getElementById("alertDiv").style.fontSize="13px";
		}
		return detectMobile;
	}

	window.onresize = function resize() {
    if ( ( window.innerWidth <= 900 ) && ( window.innerHeight <= 900 ) ) {
			detectMobile = 1;
    	}
    if(detectMobile == 0) {
			document.getElementById("vid").style.width="800px";
			document.getElementById("footer").style.marginTop=""+window.innerHeight-850+"px"; 
			document.getElementById("footerDiv").setAttribute("align", "right");
			document.getElementById("aboutNav").style.animationName="shakeTwo";
			document.getElementById("aboutNav").style.animation="shakeTwo 3s";
			document.getElementById("twitterNav").style.animationName="shakeTwo";
			document.getElementById("twitterNav").style.animation="shakeTwo 3s";
			document.getElementById("contactNav").style.animationName="shakeTwo";
			document.getElementById("contactNav").style.animation="shakeTwo 3s";
			document.getElementById("ytNav").style.animationName="shakeTwo";
			document.getElementById("ytNav").style.animation="shakeTwo 3s";
			document.getElementById("quizNav").style.animationName="shakeTwo";
			document.getElementById("quizNav").style.animation="shakeTwo 3s";
			document.getElementById("shlokaDiv").style.fontSize="15px"; 
			document.getElementById("abt").style.fontSize="18px"; 
			document.getElementById("mainHeading").style.fontSize="45px"; 
			document.getElementById("alertDiv").style.fontSize="15px";

		} else {
			document.getElementById("vid").style.width="290px";
			document.getElementById("vid").style.height="350px";
			document.getElementById("vid").style.marginTop="0px";
			document.getElementById("vid").style.marginLeft="30px";
			document.getElementById("footer").style.marginTop="140px";
			document.getElementById("footerDiv").setAttribute("align", "center");
			document.getElementById("aboutNav").style.animationName="shake";
			document.getElementById("aboutNav").style.animation="shake 3s";
			document.getElementById("twitterNav").style.animationName="shake";
			document.getElementById("twitterNav").style.animation="shake 3s";
			document.getElementById("contactNav").style.animationName="shake";
			document.getElementById("contactNav").style.animation="shake 3s"; 
			document.getElementById("ytNav").style.animationName="shake";
			document.getElementById("ytNav").style.animation="shake 3s";
			document.getElementById("quizNav").style.animationName="shake";
			document.getElementById("quizNav").style.animation="shake 3s";
			document.getElementById("shlokaDiv").style.fontSize="13px"; 
			document.getElementById("abt").style.fontSize="10px";
			document.getElementById("h1").style.fontSize = "20px";
			document.getElementById("h2").style.fontSize = "20px";
			document.getElementById("h3").style.fontSize = "20px";
			document.getElementById("h4").style.fontSize = "20px";
			document.getElementById("h5").style.fontSize = "20px";
			document.getElementById("h6").style.fontSize = "20px";
			document.getElementById("h7").style.fontSize = "20px";
			document.getElementById("h41").style.fontSize = "15px";
			document.getElementById("h42").style.fontSize = "15px";
			document.getElementById("h43").style.fontSize = "15px";
			document.getElementById("h44").style.fontSize = "15px";
			document.getElementById("h45").style.fontSize = "12px";
			document.getElementById("h46").style.fontSize = "12px";
			document.getElementById("mainHeading").style.fontSize="38px"; 
			document.getElementById("alertDiv").style.fontSize="13px";
			//detectMobile = 0;
		}
		return detectMobile;
	}