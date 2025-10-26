const navbar = document.getElementById("navbar");
const btn = document.getElementById("btn");
const isMobile = document.getElementById("isMobile");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("fixed");
    navbar.classList.remove("absolute");
    navbar.classList.add("backdrop-blur-md", "bg-white/30", "shadow-md");
    navbar.classList.remove("bg-transparent");
  } else {
    if (!isMobile.classList.contains("hidden")) {
      return isMobile.classList.add("hidden");
    }

    navbar.classList.remove("fixed");
    navbar.classList.add("absolute");
    navbar.classList.remove("backdrop-blur-md", "bg-white/30", "shadow-md");
    navbar.classList.add("bg-transparent");
  }
});

btn.addEventListener("click", () => {
  const isHidden = isMobile.classList.contains("hidden");

  if (isHidden) {
    isMobile.classList.remove("hidden");
    setTimeout(() => {
      isMobile.classList.remove("-translate-y-5", "opacity-0");
      isMobile.classList.add("-translate-y-0", "opacity-100");
    }, 10);
  } else {
    isMobile.classList.remove("-translate-y-0", "opacity-100");
    isMobile.classList.add("-translate-y-5", "opacity-0");
    setTimeout(() => {
      isMobile.classList.add("hidden");
    }, 300);
  }

  const links = isMobile.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      isMobile.classList.remove("-translate-y-0", "opacity-100");
      isMobile.classList.add("-translate-y-5", "opacity-0");
      setTimeout(() => {
        isMobile.classList.add("hidden");
      }, 300);
    });
  });
});
