
var wrapper = document.getElementById('wrapper'),
	 windowFrame = document.getElementById('windowFrame');

	 	window.onkeyup = function(event){
			if(event.keyCode === 27){
				windowFrame.className = 'hidden';
			}
		}
	
	function slideRight(){
		var val = (parseInt(wrapper.style.left, 10) || 100) + 50;
		if(val === 900){
			document.getElementById('nextBtn').disabled =true;
		}
		document.getElementById('prevBtn').disabled =false;
		wrapper.style.left = val +'px';
		wrapper.className = "animateSlide";
		}

	function slideLeft(){
		var val = (parseInt(wrapper.style.left, 10) || 0) - 50;
		if(val === -1250){
			document.getElementById('prevBtn').disabled =true;
		}
		document.getElementById('nextBtn').disabled =false;
		wrapper.style.left = val +'px';
		wrapper.className = "animateSlide";
		}

		function zoom(event){
			var trgELem = event.target,
			cloneElem = trgELem.cloneNode(true);
			windowFrame.innerHTML ='';
			windowFrame.appendChild(cloneElem);
			windowFrame.className = 'animateWindow';
		}
	