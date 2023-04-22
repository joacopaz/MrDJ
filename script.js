const toggleMenu = (e) => {
	const menuBtn = document.querySelector(".mobile-menu a");
	const navList = document.querySelector("nav ul");
	if (menuBtn.classList.contains("active")) {
		navList.style.height = "";
		return menuBtn.classList.remove("active");
	}
	navList.style.height = "230px";
	menuBtn.classList.add("active");
};

const submitBtn = document.querySelector("form button");

if (submitBtn) {
	const success = document.querySelector(".success");

	const submitForm = async (e) => {
		e.preventDefault();
		const contactForm = document.querySelector("form");
		let data = new FormData(contactForm);
		try {
			submitBtn.disabled = true;
			await fetch("https://formbold.com/s/6QrvL", {
				method: "POST",
				body: data,
			});
			await new Promise((r) => setTimeout(r, 2000));
			alert(
				"Tu información se ha enviado! Te contactaremos en las próximas 24 horas. Gracias por confiar en MrDJ!"
			);
			contactForm.remove();
			success.style.display = "block";
			console.log(success.style.display);
		} catch (error) {
			alert("Ha ocurrido un error, por favor intenta de nuevo.");
			console.log(error);
			window.location.reload();
		}
	};
	submitBtn.addEventListener("click", submitForm);
	const consulta = document.querySelector("#consulta");
	const nombre = document.querySelector("#nombre");
	const datos = document.querySelector("#contactinfo");
	nombre.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			datos.focus();
		}
	});
	datos.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			consulta.focus();
		}
	});
	consulta.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			const confirmed = confirm(
				"Estás a punto de enviar el formulario, ¿deseas continuar?"
			);
			if (confirmed) submitBtn.click();
		}
	});
}
