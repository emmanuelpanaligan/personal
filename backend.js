function show(shown) {
	document.getElementById("Resume").style.display='none';
	document.getElementById("Splash").style.display='none';
	document.getElementById("Contact").style.display='none';
//	document.getElementById("About").style.display='none';
	document.getElementById("Projects").style.display='none';

	switch (shown) {
		case "Resume":
		document.getElementById(shown).style.display='block';
		document.getElementById("Resume").innerHTML = '<embed id="Embed" src="resume.pdf" type="application/pdf" width="100%" />';
		document.getElementById("Embed").style.height = ($(window).height()-80)+"px";
		break;
		case "Splash":
		document.getElementById(shown).style.display='block';
		break;
		case "Contact":
		document.getElementById(shown).style.display='block';
		break;
//		case "About":
//		document.getElementById(shown).style.display='block';
//		break;
		case "Projects":
		document.getElementById(shown).style.display='block';
		break;
	}
}