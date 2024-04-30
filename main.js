//nav section

const loginDrawerOpen = document.querySelector(".sign-in-dropdown-open");
const loginDrawerClose = document.querySelector(".sign-in-dropdown-close");
const loginMenu = document.querySelector(".sign-in-dropdown-menu");
const signIn = document.querySelectorAll(".dropdown-btn");

const open = () => {
	loginDrawerOpen.style.display = "none";
	loginMenu.classList.remove("sign-in-dropdown-menu");
	loginMenu.classList.add("sign-in-dropdown-menu-open");
};

const close = () => {
	loginDrawerOpen.style.display = "block";
	loginMenu.classList.remove("sign-in-dropdown-menu-open");
	loginMenu.classList.add("sign-in-dropdown-menu");
};

loginDrawerOpen.addEventListener("click", open);
loginDrawerClose.addEventListener("click", close);

signIn.forEach((item) => item.addEventListener("click", close));

// carousel section
const prevImageButton = document.querySelector(".prev");
const nextImageButton = document.querySelector(".next");
const carousel = document.querySelector(".carousel");

// const itemWidth = 800;
// const padding = 10;

let itemWidth = calculateItemWidth();
let padding = calculatePadding();

function calculateItemWidth() {
	const viewportWidth = window.innerWidth;

	if (viewportWidth < 576) {
		return viewportWidth * 0.9;
	} else if (viewportWidth >= 576 && viewportWidth < 1024) {
		return 600;
	} else {
		return 800;
	}
}

function calculatePadding() {
	const viewportWidth = window.innerWidth;

	if (viewportWidth < 576) {
		return 10;
	} else if (viewportWidth >= 576 && viewportWidth < 1024) {
		return 20;
	} else {
		return 30;
	}
}

function updateCarouselDimensions() {
	itemWidth = calculateItemWidth();
	padding = calculatePadding();
}

window.addEventListener("resize", updateCarouselDimensions);

carousel.scrollLeft =
	(itemWidth / 4 + padding) * (carousel.children.length / 2);

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

// faq section
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
