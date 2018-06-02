	document.addEventListener('DOMContentLoaded', function(){ 
	    document.getElementById('fb-chat-btn').addEventListener("click", function(){
			toggleClass(document.getElementById('fb-chat'), 'fb-chat__opend');
			toggleClass(document.getElementById('fb-chat-btn'), 'fb-chat-btn__opend');
		});
		document.getElementById('close-header').addEventListener("click", function(){
			toggleClass(document.getElementById('fb-chat'), 'fb-chat__opend');
			toggleClass(document.getElementById('fb-chat-btn'), 'fb-chat-btn__opend');
		});
	}, false);
	
	function toggleClass(element, className){
	    if (!element || !className){
	        return;
	    }
	
	    var classString = element.className, nameIndex = classString.indexOf(className);
	    if (nameIndex == -1) {
	        classString += ' ' + className;
	    }
	    else {
	        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
	    }
	    element.className = classString;
	}