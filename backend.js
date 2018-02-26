function show(shown, hidden) {
	        document.getElementById("Embed").style.height = ($(window).height()-10)+"px";
			document.getElementById(shown).style.display='block';
			document.getElementById(hidden).style.display='none';
			return false;
		}