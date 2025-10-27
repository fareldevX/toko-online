const navbar = document.getElementById("navbar");
const btn = document.getElementById("btn");
const isMobile = document.getElementById("isMobile");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 30) {
    navbar.classList.add("-translate-y-10", "opacity-0");
  }

  if (scrollY > 50) {
    navbar.classList.remove("-translate-y-10", "opacity-0");
    navbar.classList.add(
      "-translate-y-0",
      "opacity-100",
      "fixed",
      "backdrop-blur-md",
      "bg-white/30",
      "shadow-md"
    );
    navbar.classList.remove("absolute", "bg-transparent");
  } else {
    if (!isMobile.classList.contains("hidden")) {
      return isMobile.classList.add("hidden");
    }

    navbar.classList.remove(
      "fixed",
      "-translate-y-10",
      "opacity-0",
      "backdrop-blur-md",
      "bg-white/30",
      "shadow-md"
    );
    navbar.classList.add(
      "-translate-y-0",
      "opacity-100",
      "absolute",
      "bg-transparent"
    );
  }
});

btn.addEventListener("click", () => {
  const isHidden = isMobile.classList.contains("hidden");

  if (isHidden) {
    showMobileMenu();
  } else {
    hideMobileMenu();
  }

  const links = isMobile.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => hideMobileMenu);
  });
});

const showMobileMenu = () => {
  isMobile.classList.remove("hidden");
  setTimeout(() => {
    isMobile.classList.remove("-translate-y-5", "opacity-0");
    isMobile.classList.add("-translate-y-0", "opacity-100");
  }, 10);
};

const hideMobileMenu = () => {
  isMobile.classList.remove("-translate-y-0", "opacity-100");
  isMobile.classList.add("-translate-y-5", "opacity-0");
  setTimeout(() => {
    isMobile.classList.add("hidden");
  }, 300);
};
