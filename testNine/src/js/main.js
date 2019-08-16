import './vendor';
let $slideFreshNews = 1;
let $newsCount = $('.news__item').length;
let $newsViewport = $('.news__viewport');

let $newsWrapper = $('.news__wrapper');

let $newsSlideControl = $('.news__slide-control');

let $widthViewport = $('.news').outerWidth();

let $leftNews = $('.news__slide-control--left');

let $rightNews = $('.news__slide-control--right');

let $widthSlideLine = $widthViewport / $newsCount;

let $movenewsWrapper = -10;

function addWidthLine() {
	$('.news__slide-line').width($widthSlideLine);
}

let $widthNews = $widthViewport / $newsCount;

function leftClick() {
	if (
		$slideFreshNews == $newsCount ||
		$slideFreshNews <= 0 ||
		$slideFreshNews > $newsCount
	) {
		$move$newsWrapper += 10;
		$newsWrapper.css(
			'transform',
			'translateX(' + $movenewsWrapper + 'rem)'
		);
		$newsWrapper.css(
			'MozTransform',
			'translateX(' + $movenewsWrapper + 'rem)'
		);
		$newsWrapper.css(
			'WebkitTransform',
			'translateX(' + $movenewsWrapper + 'rem)'
		);
		$newsWrapper.css(
			'OTransform',
			'translateX(' + $movenewsWrapper + 'rem)'
		);
		$newsWrapper.css(
			'MsTransform',
			'translateX(' + $movenewsWrapper + 'rem)'
		);
		$slideFreshNews--;
		$widthSlideLine -= $widthNews;
		addWidthLine();
	} else {
		$newsWrapper.css('transform', 'translateX(0.0)');
		$newsWrapper.css('MozTransform', 'translateX(0.0)');
		$newsWrapper.css('WebkitTransform', 'translateX(0.0)');
		$newsWrapper.css('OTransform', 'translateX(0.0)');
		$newsWrapper.css('MsTransform', 'translateX(0.0)');
		$slideFreshNews = 1;
		$movenewsWrapper = -10;
		$widthSlideLine = $widthNews;
		addWidthLine();
	}
}

function nextSlide() {
	if (
		$slideFreshNews == $newsCount ||
		$slideFreshNews <= 0 ||
		$slideFreshNews > $newsCount
	) {
		$newsWrapper.css('transform', 'translateX(0.0)');
		$newsWrapper.css('MozTransform', 'translateX(0.0)');
		$newsWrapper.css('WebkitTransform', 'translateX(0.0)');
		$newsWrapper.css('OTransform', 'translateX(0.0)');
		$newsWrapper.css('MsTransform', 'translateX(0.0)');
		$slideFreshNews = 1;
		$movenewsWrapper = -10;
		$widthSlideLine = $widthNews;
		addWidthLine();
	} else {
		$newsWrapper.css(
			'transform',
			'translateX(' + $movenewsWrapper + 'rem)'
		);
		$newsWrapper.css(
			'MozTransform',
			'translateX(' + $movenewsWrapper + 'rem)'
		);
		$newsWrapper.css(
			'WebkitTransform',
			'translateX(' + $movenewsWrapper + 'rem)'
		);
		$newsWrapper.css(
			'OTransform',
			'translateX(' + $movenewsWrapper + 'rem)'
		);
		$newsWrapper.css(
			'MsTransform',
			'translateX(' + $movenewsWrapper + 'rem)'
		);

		$slideFreshNews++;
		$movenewsWrapper += -10;
		$widthSlideLine += $widthNews;
		addWidthLine();
	}
}

$newsSlideControl.on('click', () => {
	nextSlide();
});
$leftNews.on('click', () => {
	leftClick();
});
$rightNews.on('click', () => {
	nextSlide();
});

addWidthLine();

// touch feach

let x0 = null;

function unify(e) {
	return e.changedTouches ? e.changedTouches[0] : e;
}

function lock(e) {
	x0 = unify(e).clientX;
}

document
	.getElementsByClassName('news__wrapper')[0]
	.addEventListener('mousedown', lock, false);
document
	.getElementsByClassName('news__wrapper')[0]
	.addEventListener('touchstart', lock, false);

document.getElementsByClassName('news__wrapper')[0].addEventListener(
	'touchmove',
	(e) => {
		e.preventDefault();
	},
	false
);

document
	.getElementsByClassName('news__wrapper')[0]
	.addEventListener('mouseup', nextSlide, false);
document
	.getElementsByClassName('news__wrapper')[0]
	.addEventListener('touchend', nextSlide, false);

// video script

let $slideFreshVideo = 1;
let $videoCount = $('.video__item').length;
let $videoViewport = $('.video__viewport');
let $videoWrapper = $('.video__wrapper');
let $videoSlideControl = $('.video__slide-control');
let $widthViewportVideo = $('.video').outerWidth();

let $leftVideo = $('.video__slide-control--left');

let $rightVideo = $('.video__slide-control--right');

let $widthSlideLineVideo = $widthViewportVideo / $videoCount;
let $moveVideoWrapper = -15;

function addWidthLineVideo() {
	$('.video__slide-line').width($widthSlideLineVideo);
}
let $widthVideo = $widthViewportVideo / $videoCount;

function leftClickVideo() {
	if (
		$slideFreshVideo == $videoCount ||
		$slideFreshVideo <= 0 ||
		$slideFreshVideo > $videoCount
	) {
		$moveVideoWrapper += 15;
		$videoWrapper.css(
			'transform',
			'translateX(' + $moveVideoWrapper + 'rem)'
		);
		$videoWrapper.css(
			'MozTransform',
			'translateX(' + $moveVideoWrapper + 'rem)'
		);
		$videoWrapper.css(
			'WebkitTransform',
			'translateX(' + $moveVideoWrapper + 'rem)'
		);
		$videoWrapper.css(
			'OTransform',
			'translateX(' + $moveVideoWrapper + 'rem)'
		);
		$videoWrapper.css(
			'MsTransform',
			'translateX(' + $moveVideoWrapper + 'rem)'
		);
		$slideFreshVideo--;
		$widthSlideLineVideo -= $widthVideo;
		addWidthLineVideo();
	} else {
		$videoWrapper.css('transform', 'translateX(0.0)');
		$videoWrapper.css('MozTransform', 'translateX(0.0)');
		$videoWrapper.css('WebkitTransform', 'translateX(0.0)');
		$videoWrapper.css('OTransform', 'translateX(0.0)');
		$videoWrapper.css('MsTransform', 'translateX(0.0)');
		$slideFreshVideo = 1;
		$moveVideoWrapper = -15;
		$widthSlideLineVideo = $widthVideo;
		addWidthLineVideo();
	}
}

function nextSlideVideo() {
	if (
		$slideFreshVideo == $videoCount ||
		$slideFreshVideo <= 0 ||
		$slideFreshVideo > $videoCount
	) {
		$videoWrapper.css('transform', 'translateX(0.0)');
		$videoWrapper.css('MozTransform', 'translateX(0.0)');
		$videoWrapper.css('WebkitTransform', 'translateX(0.0)');
		$videoWrapper.css('OTransform', 'translateX(0.0)');
		$videoWrapper.css('MsTransform', 'translateX(0.0)');
		$slideFreshVideo = 1;
		$moveVideoWrapper = -15;
		$widthSlideLineVideo = $widthVideo;
		addWidthLineVideo();
	} else {
		$videoWrapper.css(
			'transform',
			'translateX(' + $moveVideoWrapper + 'rem)'
		);
		$videoWrapper.css(
			'MozTransform',
			'translateX(' + $moveVideoWrapper + 'rem)'
		);
		$videoWrapper.css(
			'WebkitTransform',
			'translateX(' + $moveVideoWrapper + 'rem)'
		);
		$videoWrapper.css(
			'OTransform',
			'translateX(' + $moveVideoWrapper + 'rem)'
		);
		$videoWrapper.css(
			'MsTransform',
			'translateX(' + $moveVideoWrapper + 'rem)'
		);

		$slideFreshVideo++;
		$moveVideoWrapper += -15;
		$widthSlideLineVideo += $widthVideo;
		addWidthLineVideo();
	}
}

$videoSlideControl.on('click', () => {
	nextSlideVideo();
});
$leftVideo.on('click', () => {
	leftClickVideo();
});
$rightVideo.on('click', () => {
	nextSlideVideo();
});

addWidthLineVideo();

// touch feach

let x0Video = null;

function unifyVideo(e) {
	return e.changedTouches ? e.changedTouches[0] : e;
}

function lockVideo(e) {
	x0Video = unifyVideo(e).clientX;
}

document
	.getElementsByClassName('video__wrapper')[0]
	.addEventListener('mousedown', lockVideo, false);
document
	.getElementsByClassName('video__wrapper')[0]
	.addEventListener('touchstart', lockVideo, false);

document.getElementsByClassName('video__wrapper')[0].addEventListener(
	'touchmove',
	(e) => {
		e.preventDefault();
	},
	false
);

document
	.getElementsByClassName('video__wrapper')[0]
	.addEventListener('mouseup', nextSlideVideo, false);
document
	.getElementsByClassName('video__wrapper')[0]
	.addEventListener('touchend', nextSlideVideo, false);

// side panel js
let $menuButton = $('.menu-button');
let $check = false;
let $panel = $('#sidePanel');

$menuButton.on('click', () => {
	if ($check) {
		$panel.removeClass('open');
		if ($(window).width() <= '768') {
			$('.hover-content').removeClass('hover-tablet');
		}
		$check = false;
	} else {
		$panel.addClass('open');
		if ($(window).width() <= '768') {
			$('.hover-content').addClass('hover-tablet');
		}
		$check = true;
	}
});
