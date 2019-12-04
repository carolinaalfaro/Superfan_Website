// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case

// Once you've identified the elements you want to change, you can use the "classList" (to change classes):
// classList = https://www.w3schools.com/jsref/prop_element_classlist.asp
// document.getElementById("").classList.remove("");

// This function is being reused
// We need the "elem" because the function changes the div when clicked on.		`

function grown(el){
	if (el.src.match ("images/grown_photo.PNG")){
		el.src ="images/grown_pic1.jpg";
	} else if (el.src.match("images/grown_pic1.jpg")){
		el.src = "images/grown_pic3.jpg";
	} else if (el.src.match ("images/grown_pic3.jpg")){
		el.src = "images/grown_pic4.jpg";
	} else if (el.src.match ("images/grown_pic4.jpg")){
		el.src = "images/grown_photo.PNG";
	}
}

function jack(el){
	if (el.src.match ("images/jack_photo.jpg")){
		el.src ="images/jack_pic2.jpg";
	} else if (el.src.match("images/jack_pic2.jpg")){
		el.src = "images/jack_pic1.jpg";
	} else if (el.src.match ("images/jack_pic1.jpg")){
		el.src = "images/jack_pic3.jpg";
	} else if (el.src.match ("images/jack_pic3.jpg")){
		el.src = "images/jack_photo.jpg";
	}
}

function happyg(el){
	if (el.src.match ("images/happy_photo.jpg")){
		el.src ="images/happy_pic2.jpg";
	} else if (el.src.match("images/happy_pic2.jpg")){
		el.src = "images/happy_pic3.jpg";
	} else if (el.src.match ("images/happy_pic3.jpg")){
		el.src = "images/happy_pic1.jpg";
	} else if (el.src.match ("images/happy_pic1.jpg")){
		el.src = "images/happy_photo.jpg";
	}
}

 function water(el){
	if (el.src.match ("images/water_photo.jpg")){
		el.src ="images/water_pic1.jfif";
	} else if (el.src.match("images/water_pic1.jfif")){
		el.src = "images/water_pic2.jfif";
	} else if (el.src.match ("images/water_pic2.jfif")){
		el.src = "images/water_pic3.jpg";
	} else if (el.src.match ("images/water_pic3.jpg")){
		el.src = "images/water_photo.jpg";
	}
}

function stopSound () {
	document.getElementById("sound_jill").pause();
	document.getElementById("sound_grown").pause();
	document.getElementById("sound_water").pause();
	document.getElementById("sound_happy").pause();
}

function jill(){
	document.getElementById("jill_quote").classList.remove("hide");
	stopSound();
	document.getElementById("sound_jill").play();
}
function happy(){
	document.getElementById("happygill").classList.remove("hide");
	stopSound();
	document.getElementById("sound_happy").play();
}
function boy(){
	document.getElementById("waterboy").classList.remove("hide");
	stopSound();
	document.getElementById("sound_water").play();
}
function up(){
	document.getElementById("grownup").classList.remove("hide");
	stopSound();
	document.getElementById("sound_grown").play();
}

