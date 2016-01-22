$(document).ready(function(){

function Jukebox(song_list){
	this.audioMP3 = document.createElement('audio');
	this.songs = song_list;

// COMMENT HERE
	this.addURL = function(number){
		this.audioMP3.setAttribute('src', this.songs[number]);
	}

// COMMENT HERE
	this.playSong = function(number){
		this.addURL(number)
		this.audioMP3.play();
	}
	this.pauseSong = function(){
		this.audioMP3.pause();
	}
	// this.addURL();
}

var songs = ["http://www.moviewavs.com/0053148414/MP3S/TV_Shows/Batman/batman.mp3", "http://www.moviewavs.com/0053148414/MP3S/TV_Shows/Mission_Impossible/tape.mp3", "http://www.moviewavs.com/0053148414/MP3S/TV_Shows/Three_Stooges/brodcast.mp3", "http://www.moviewavs.com/0053148414/MP3S/TV_Shows/South_Park/Episode_102_Weight_Gain_4000/102_2dummy.mp3", "http://www.moviewavs.com/0053148414/MP3S/TV_Shows/Price_Is_Right/pets.mp3", "http://www.moviewavs.com/0053148414/MP3S/TV_Shows/Friends/lapdance.mp3", "http://www.moviewavs.com/0053148414/MP3S/TV_Shows/Tales_From_The_Crypt/laugh.mp3", "http://www.moviewavs.com/0053148414/MP3S/TV_Shows/Jeopardy/jepor.mp3", "http://www.moviewavs.com/0053148414/MP3S/TV_Shows/Incredible_Hulk/hulk.mp3", "http://www.moviewavs.com/0053148414/MP3S/TV_Shows/Seinfeld/stupid.mp3"]

// var manySongs = [{url: "http://www.moviewavs.com/0053148414/MP3S/TV_Shows/Batman/batman.mp3", name: "batman"}]


var myMusic = new Jukebox(songs);

for (var i = 0; i < myMusic.songs.length; i++) {
	// COMMENT HERE
	$('#instruct').after("<p data-info=" + myMusic.songs[i] + ">Track " + (i+1) + ":</p><button type='button' data-index=" + i + " class='play1'>Play</button><button type='button' class='stop1'>Stop</button>");
};



        $('.play1').click(function() {
        	// COMMENT HERE
        	console.log($(this));
        	var number = $(this).data('index');
        	console.log(number);
            myMusic.playSong(number);
        });

 //        $('.stop1').click(function() {
 //            myMusic.pauseSong();
 //        });

 // var myMusic2 = new Jukebox('http://www.moviewavs.com/0053148414/MP3S/TV_Shows/Simpsons/canthnk.mp3');

 //        $('.play2').click(function() {
 //            myMusic2.playSong();
 //        });

 //        $('.stop2').click(function() {
 //            myMusic2.pauseSong();
 //        });

});