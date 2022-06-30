audioPlayer();
function audioPlayer(){
	var currentSong = 0;
	$("#audioPlayer")[0].src = $("#playlist li a") [0];
	$("#audioPlayer")[0].play();
	$("#playlist li a").click(function(e){
		e.preventDefault();
		$("#audioPlayer")[0].src = this;
		$("#audioPlayer")[0].play();
		$("#playlist li").removeClass("current-song");
		currentSong = $(this).parent().index();
		$(this).parent().addClass("current-song");
		});
				
	$("#audioPlayer")[0].addEventListener("ended",function(){
		currentSong++;
		if(currentSong == $("#playlist li a").length)
			currentSong = 0;
		$("#playlist li").removeClass("current-song");
		$("#playlist li:eq("+currentSong+")").addClass("current-song");
		$("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
		$("#audioPlayer")[0].play();
	});
}
audioPlayer2();
function audioPlayer2(){
	var currentSong = 0;
	$("#audioPlayer2")[0].src = $("#playlist2 li a") [0];
	$("#audioPlayer2")[0].play();
	$("#playlist2 li a").click(function(e){
		e.preventDefault();
		$("#audioPlayer2")[0].src = this;
		$("#audioPlayer2")[0].play();
		$("#playlist2 li").removeClass("current-song2");
		currentSong = $(this).parent().index();
		$(this).parent().addClass("current-song2");
		});
				
	$("#audioPlayer2")[0].addEventListener("ended",function(){
	currentSong++;
	if(currentSong == $("#playlist2 li a").length)
		currentSong = 0;
	$("#playlist2 li").removeClass("current-song2");
	$("#playlist2 li:eq("+currentSong+")").addClass("current-song2");
	$("#audioPlayer2")[0].src = $("#playlist2 li a")[currentSong].href;
	$("#audioPlayer2")[0].play();
	});
}