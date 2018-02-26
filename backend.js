function show(shown, hidden) {
	        document.getElementById("Embed").innerHTML = '<embed id="Embed" src="resume.pdf" type="application/pdf" width="100%" />';
	        document.getElementById("Embed").style.height = ($(window).height()-70)+"px";
			document.getElementById(shown).style.display='block';
			document.getElementById(hidden).style.display='none';
			return false;
		}