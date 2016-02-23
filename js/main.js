var $btn = $(".gd-btn-play-pause");
var video = $(".gd-grad-vid").get(0);

$btn.on('click', function () {
	if (video.paused) {
		video.play();

	} else {
		video.pause();
	}
});