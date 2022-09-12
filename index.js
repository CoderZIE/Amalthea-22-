
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
                console.log("hii");
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);
});



// Rudra JS end

//Aditya JS start
let cubes = document.querySelectorAll(".image-cube");
let cube = document.querySelectorAll(".image-cube");
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
