$(document).ready(function(){
	function disableWheelScroll(){
	if (document.body.addEventListener) document.getElementById('iframe-fb').addEventListener('DOMMouseScroll', blockWheel, false);
		document.body.onmousewheel = blockWheel;
	}
	function blockWheel(event){
		if (!event) event = window.event;
		if (event.stopPropagation) event.stopPropagation();
		else event.cancelBubble = true;
		if(event.preventDefault) event.preventDefault();
		else event.returnValue = false;
	}
});