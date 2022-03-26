document.addEventListener("DOMContentLoaded", () => {
	var body = document.querySelector("body");
	var boxes = body.querySelectorAll(".box");
	boxes.forEach((box) => {
		var highlightColor = "rgb(185, 255, 249)";
		box.addEventListener("click", () => {
			console.log(box.style.backgroundColor);
			if (
				box.style.backgroundColor == "" ||
				box.style.backgroundColor == highlightColor
			) {
				box.style.backgroundColor = "brown";
				box.addEventListener("mouseenter", () => {
					box.style.backgroundColor = "brown";
				});
				box.addEventListener("mouseleave", () => {
					box.style.backgroundColor = "brown";
				});
			} else if (box.style.backgroundColor == "brown") {
				box.style.backgroundColor = "white";
				box.addEventListener("mouseenter", () => {
					box.style.backgroundColor = highlightColor;
				});
				box.addEventListener("mouseleave", () => {
					box.style.backgroundColor = "white";
				});
			}
		});
	});
});
