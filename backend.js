function show(shown, hidden) {
	        $("#Embed").replaceWith($("#Embed"));
	        document.getElementById("Embed").style.height = ($(window).height()-70)+"px";
			document.getElementById(shown).style.display='block';
			document.getElementById(hidden).style.display='none';
			return false;
		}