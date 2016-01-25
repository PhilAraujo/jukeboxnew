$(document).ready(function(){

function Jukebox(song_list){
	this.audioMP3 = document.createElement('audio');
	this.songs = song_list;
// this function sources what song in the array is given to a button
	this.addURL = function(number){
		this.audioMP3.setAttribute('src', this.songs[number]);
	}
// this function acts as the method that will be called when a user clicks the blue and red buttons
	this.playSong = function(number){
		this.addURL(number)
		this.audioMP3.play();
	}
	this.pauseSong = function(){
		this.audioMP3.pause();
	}
}
// array of clips
var songs = ["http://wavcentral.com/sounds/movies/matrix/air.mp3", "http://wavcentral.com/sounds/movies/matrix/all_around.mp3", "http://wavcentral.com/sounds/movies/matrix/awake.mp3", "http://wavcentral.com/sounds/movies/matrix/believe.mp3", "http://wavcentral.com/sounds/movies/matrix/blue_red.mp3", "http://wavcentral.com/sounds/movies/matrix/chicken.mp3", "http://wavcentral.com/sounds/movies/matrix/come_on.mp3"]

var myMusic = new Jukebox(songs);
// this creates a blue and red button for every song that is in the array
for (var i = 0; i < myMusic.songs.length; i++) {
	$('#instruct').before("<p data-info=" + myMusic.songs[i] + ">Please choose the Red or Blue pill!</p><button type='button' data-index=" + i + " class='play'></button><button type='button' class='stop'></button>");
};
// .play and .stop act as the official funstions that play and stop the selected track
        $('.play').click(function() {
        	console.log($(this));
        	var number = $(this).data('index');
        	console.log(number);
            myMusic.playSong(number);
        });

        $('.stop').click(function() {
            myMusic.pauseSong();
        });

var c = document.getElementById("c");
var ctx = c.getContext("2d");

//code borrowed and altered from http://thecodeplayer.com/walkthrough/matrix-rain-animation-html5-canvas-javascript

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//characters that will be displayed
var characters = "The Matrix Jukebox";
//converting the string into an array of single characters
characters = characters.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the drops
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1; 

//drawing the characters
function draw()
{
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);
	
	ctx.fillStyle = "#0F0"; //green text
	ctx.font = font_size + "px arial";
	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		//a random characters to print
		var text = characters[Math.floor(Math.random()*characters.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
		
		//incrementing Y coordinate
		drops[i]++;
	}
}

setInterval(draw, 30);


});