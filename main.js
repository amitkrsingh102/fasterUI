const prevImageButton = document.querySelector(".prev");
const nextImageButton = document.querySelector(".next");
const carousel = document.querySelector(".carousel");

const itemWidth = 800;
const padding = 20;

carousel.scrollLeft =
	(itemWidth / 2 + padding) * (carousel.children.length / 2);

nextImageButton.addEventListener("click", () => {
	carousel.scrollLeft += itemWidth / 2 + padding;

	if (
		carousel.scrollLeft >=
		(itemWidth / 2 + padding) * (carousel.children.length - 1)
	) {
		carousel.scrollLeft = itemWidth / 2 + padding;
	}
});

prevImageButton.addEventListener("click", () => {
	carousel.scrollLeft -= itemWidth / 2 + padding;

	if (carousel.scrollLeft <= 0) {
		carousel.scrollLeft =
			(itemWidth / 2 + padding) * (carousel.children.length - 2);
	}
});

const faqItems = document.querySelectorAll(".faq-collapse-item");

faqItems.forEach((item) => {
	const desc = item.querySelector(".faq-item-desc");
	const moreBtn = item.querySelector(".more");
	const lessBtn = item.querySelector(".less");

	moreBtn.addEventListener("click", () => {
		desc.style.display = "block";
		moreBtn.style.display = "none";
		lessBtn.style.display = "block";
	});

	lessBtn.addEventListener("click", () => {
		desc.style.display = "none";
		moreBtn.style.display = "block";
		lessBtn.style.display = "none";
	});
});
