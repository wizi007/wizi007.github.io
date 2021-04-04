var x = 1;

function display(x){
	document.getElementById("container").style.backgroundImage = "url('img"+x+".jpg')";
}

function prevslide(){
	x--;
	if (x < 1){
		x = 5;
	}
	display(x);
}

function nextslide(){
	x++;
	if (x > 5){
		x = 1;
	}
	display(x);
}
