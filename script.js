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

const submitBtn = document.querySelector("form button");

if (submitBtn) {
	const submitForm = async (e) => {
		e.preventDefault();
		const contactForm = document.querySelector("form");
		let data = new FormData(contactForm);
		try {
			const response = await fetch("https://formbold.com/s/6QrvL", {
				method: "POST",
				body: data,
			});
			alert(
				"Tu información se ha enviado! Te contactaremos en las próximas 24 horas. Gracias por confiar en MrDJ!"
			);

			contactForm.reset();
		} catch (error) {
			alert("Ha ocurrido un error, por favor intenta de nuevo.");
			console.log(error);
		}
	};
	submitBtn.addEventListener("click", submitForm);
}
