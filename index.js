//Aditya JS start
let cubes = document.querySelectorAll(".image-cube");
let cube = document.querySelectorAll(".image-cube");
let front = document.querySelectorAll('.front')
let btnNext = document.querySelector("#next");
let btnPrev = document.querySelector("#prev");
function rotateCube(i){
	cubes[i].style.transform = `rotateY(${pos}deg)`;
}
let pos = 0;

btnNext.addEventListener("click", () => {

  pos -= 90;
	// for (var i=0;i < cubes.length;i++){
	// 	setTimeout(rotateCube(i),5000);
	// }
	cubes[0].style.transform = `rotateY(${pos}deg)`;
	console.log(cubes[0].style.transform )
	if(pos===0){
		front.forEach((item)=>{
			item.style.boxShadow = '3px 3px 10px white';
		})
	}
	else{
		front.forEach((item)=>{
			item.style.boxShadow ='0px';
		})
	}
	setTimeout(()=>{
		cubes[1].style.transform = `rotateY(${pos}deg)`;
	},500)
	setTimeout(()=>{
		cubes[2].style.transform = `rotateY(${pos}deg)`;
	},500)


	});


	btnPrev.addEventListener("click", () => {
		console.log('hi');
	
	  pos += 90;
		cubes[0].style.transform = `rotateY(${pos}deg)`;
		setTimeout(()=>{
			cubes[1].style.transform = `rotateY(${pos}deg)`;
		},500)
		setTimeout(()=>{
			cubes[2].style.transform = `rotateY(${pos}deg)`;
		},500)

		});


//Aditya js ends

//Zaqi''s Javascript

$( function() {
  $( "#slider" ).slider();
} );

// Javascript for slider

window.onscroll = function(event){
  var scr = window.pageYOffset;
  document.getElementsByClassName('zslider')[0].value= scr/10;
  document.getElementsByClassName('zslider')[1].value= (scr/13);
  document.getElementsByClassName('zslider')[2].value= (scr/15);
  document.getElementsByClassName('zslider')[3].value= (scr/20);
  document.getElementsByClassName('zslider')[4].value= (scr/25);
  if(src>500 && src<1000){
    document.getElementsByClassName('zslider')[0].value= (1000-scr);
  }
  if(src>300 && src<600){
    document.getElementsByClassName('zslider')[1].value= (1000-(scr/3));
  }
}

// javascript for explore elements

$(document).ready(function(){
  $(".zbr").mouseenter(function(){
    $(".e1border").css("width", "0");
    $(".e2border").css("width", "112px");
    $(".e3border").css("width", "0");
    $(".e4border").css("width", "0");
    $(".e5border").css("width", "0");
    $(".e6border").css("width", "112px");
    $(".e7border").css("width", "0");
    $(".e8border").css("width", "0");
    $(".e9border").css("width", "0");
    $(".e10border").css("width", "0");
    $(".e11border").css("width", "0");
    $(".e12border").css("width", "0");
    $(".e13border").css("width", "0");
  });
  $(".zbr").mouseleave(function(){
        $(".e1border").css("width", "30px");
        $(".e2border").css("width", "30px");
        $(".e3border").css("width", "50px");
        $(".e4border").css("width", "10px");
        $(".e5border").css("width", "10px");
        $(".e6border").css("width", "20px");
        $(".e7border").css("width", "10px");
        $(".e8border").css("width", "10px");
        $(".e9border").css("width", "30px");
        $(".e10border").css("width", "30px");
        $(".e11border").css("width", "30px");
        $(".e12border").css("width", "10px");
        $(".e13border").css("width", "10px");
   });
});

$(document).ready(function(){
  $(".zbr2").mouseenter(function(){
    $(".s1border").css("width", "0");
    $(".s2border").css("width", "112px");
    $(".s3border").css("width", "0");
    $(".s4border").css("width", "0");
    $(".s5border").css("width", "0");
    $(".s6border").css("width", "112px");
    $(".s7border").css("width", "0");
    $(".s8border").css("width", "0");
    $(".s9border").css("width", "0");
    $(".s10border").css("width", "0");
    $(".s11border").css("width", "0");
    $(".s12border").css("width", "0");
    $(".s13border").css("width", "0");
  });
  $(".zbr2").mouseleave(function(){
        $(".s1border").css("width", "30px");
        $(".s2border").css("width", "30px");
        $(".s3border").css("width", "50px");
        $(".s4border").css("width", "10px");
        $(".s5border").css("width", "10px");
        $(".s6border").css("width", "20px");
        $(".s7border").css("width", "10px");
        $(".s8border").css("width", "10px");
        $(".s9border").css("width", "30px");
        $(".s10border").css("width", "30px");
        $(".s11border").css("width", "30px");
        $(".s12border").css("width", "10px");
        $(".s13border").css("width", "10px");
   });

   
});

$(document).ready(function(){
  $(".zbr3").mouseenter(function(){
    $(".t1border").css("width", "0");
    $(".t2border").css("width", "112px");
    $(".t3border").css("width", "0");
    $(".t4border").css("width", "0");
    $(".t5border").css("width", "0");
    $(".t6border").css("width", "112px");
    $(".t7border").css("width", "0");
    $(".t8border").css("width", "0");
    $(".t9border").css("width", "0");
    $(".t10border").css("width", "0");
    $(".t11border").css("width", "0");
    $(".t12border").css("width", "0");
    $(".t13border").css("width", "0");
  });
  $(".zbr3").mouseleave(function(){
        $(".t1border").css("width", "30px");
        $(".t2border").css("width", "30px");
        $(".t3border").css("width", "50px");
        $(".t4border").css("width", "10px");
        $(".t5border").css("width", "10px");
        $(".t6border").css("width", "20px");
        $(".t7border").css("width", "10px");
        $(".t8border").css("width", "10px");
        $(".t9border").css("width", "30px");
        $(".t10border").css("width", "30px");
        $(".t11border").css("width", "30px");
        $(".t12border").css("width", "10px");
        $(".t13border").css("width", "10px");
   });
});

$(document).ready(function(){
  $(".zbr4").mouseenter(function(){
    $(".y1border").css("width", "0");
    $(".y2border").css("width", "112px");
    $(".y3border").css("width", "0");
    $(".y4border").css("width", "0");
    $(".y5border").css("width", "0");
    $(".y6border").css("width", "112px");
    $(".y7border").css("width", "0");
    $(".y8border").css("width", "0");
    $(".y9border").css("width", "0");
    $(".y10border").css("width", "0");
    $(".y11border").css("width", "0");
    $(".y12border").css("width", "0");
    $(".y13border").css("width", "0");
  });
  $(".zbr4").mouseleave(function(){
        $(".y1border").css("width", "30px");
        $(".y2border").css("width", "30px");
        $(".y3border").css("width", "50px");
        $(".y4border").css("width", "10px");
        $(".y5border").css("width", "10px");
        $(".y6border").css("width", "20px");
        $(".y7border").css("width", "10px");
        $(".y8border").css("width", "10px");
        $(".y9border").css("width", "30px");
        $(".y10border").css("width", "30px");
        $(".y11border").css("width", "30px");
        $(".y12border").css("width", "10px");
        $(".y13border").css("width", "10px");
   });
});

$(document).ready(function(){
  $(".zbr5").mouseenter(function(){
    $(".c1border").css("width", "0");
    $(".c2border").css("width", "112px");
    $(".c3border").css("width", "0");
    $(".c4border").css("width", "0");
    $(".c5border").css("width", "0");
    $(".c6border").css("width", "112px");
    $(".c7border").css("width", "0");
    $(".c8border").css("width", "0");
    $(".c9border").css("width", "0");
    $(".c10border").css("width", "0");
    $(".c11border").css("width", "0");
    $(".c12border").css("width", "0");
    $(".c13border").css("width", "0");
  });
  $(".zbr5").mouseleave(function(){
        $(".c1border").css("width", "30px");
        $(".c2border").css("width", "30px");
        $(".c3border").css("width", "50px");
        $(".c4border").css("width", "10px");
        $(".c5border").css("width", "10px");
        $(".c6border").css("width", "20px");
        $(".c7border").css("width", "10px");
        $(".c8border").css("width", "10px");
        $(".c9border").css("width", "30px");
        $(".c10border").css("width", "30px");
        $(".c11border").css("width", "30px");
        $(".c12border").css("width", "10px");
        $(".c13border").css("width", "10px");
   });
});


$( function() {
  $( "#slider" ).slider();
} );


// Rudra JS Start

 function preloaderFunction(){
    document.querySelector(".Rpreload").style.display = "none"
}

document.addEventListener('DOMContentLoaded', function (event) {

    var dataText = ["nitate", "nnovate", "nspire"];
    // var i = 4

    function displayCompleteText(a) {
        document.getElementById("RiiiText").style.display = "None";
        document.getElementById("Rrotate").style.animation = "rotation 12s infinite linear";
        document.getElementById("Rrotate").style.animationPlayState = "running";
        setTimeout(a, 3000);
    }


    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1

            document.getElementById("RiiiText").style.display = "Flex";
            document.getElementById("Rrotate").style.removeProperty("animation");
           

            document.getElementById("RiiiText").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100)
        }

        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            setTimeout(function () {
                displayCompleteText(fnCallback)
            }, 1000)
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 0);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                document.getElementById("Rrotate").style.removeProperty("animation");
                document.getElementById("Rrotate").style.transform = "rotate(0deg)";
                // console.log("hii");
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);
});



// Rudra JS end




