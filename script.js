const toggleMenu = (e) => {
	const menuBtn = document.querySelector(".mobile-menu a");
	const navList = document.querySelector("nav ul");
	if (menuBtn.classList.contains("active")) {
		navList.style.height = "";
		return menuBtn.classList.remove("active");
	}
	navList.style.height = "150px";
	menuBtn.classList.add("active");
};

const submitForm = (e) => {
	e.preventDefault();
	const contactForm = document.querySelector("form");
	let data = new FormData(contactForm);
	fetch("url", { method: "POST", body: data });
	alert(
		"Tu información se ha enviado! Te contactaremos en las próximas 24 horas. Gracias por confiar en MrDJ!"
	);
	contactForm.reset();
};
