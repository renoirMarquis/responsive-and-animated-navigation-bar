const navSlide = () =>{
	const burger = document.querySelector(".burger");
	const nav = document.querySelector (".navLinks");
	const navLinks = document.querySelectorAll(".navLinks li");
	// toggle nav
	burger.addEventListener("click",()=>{
	nav.classList.toggle("navActive");

			// animated links
	navLinks.forEach((link, index) =>{
	if(link.style.animation){
	link.style.animation = ""
	}else {
	link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
				
		}

		});
	//burger animation
	burger.classList.toggle("toggle");

	});

}
navSlide();