const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
	navbarNav.classList.toggle('show');
};

const hamburgerMenu = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
	if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('show');
	}
});