// import { renderProducts } from "./product.js";

const navbar = document.getElementById("navbar");
const btn = document.getElementById("btn");
const isMobile = document.getElementById("isMobile");
const contCard = document.getElementById("contCard");
const form = document.getElementById("contactForm");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 30) {
    navbar.classList.add("-translate-y-10", "opacity-0");
  }

  if (scrollY > 50) {
    navbar.classList.remove("-translate-y-10", "opacity-0", "text-white");
    navbar.classList.add(
      "-translate-y-0",
      "opacity-100",
      "fixed",
      "backdrop-blur-md",
      "bg-white/30",
      "text-dark",
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
      "text-dark",
      "shadow-md"
    );
    navbar.classList.add(
      "-translate-y-0",
      "opacity-100",
      "absolute",
      "bg-transparent",
      "text-white"
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
    link.addEventListener("click", () => hideMobileMenu());
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

window.onload = async () => {
  const data = await fetch(
    "https://toko-online-backend-ten.vercel.app/api/product",
    {
      headers: {
        "x-api-key": "api_f6eb3b506dff738e01d3cfb8",
      },
    }
  );
  const products = await data.json();

  contCard.innerHTML = "";

  products.forEach((product) => {
    const { imageUrl, title, description } = product;

    contCard.innerHTML += `
      <div
        class="md:w-1/3 h-auto from-emerald-100 to-emerald-50 bg-gradient-to-b from-emerald-100 to-emerald-5 shadow-2xl p-6 rounded-xl"
      >
        <img
          src="${imageUrl}"
          alt="${title}"
          class="w-full rounded-xl"
        />
        <h3 class="text-dark text-2xl font-semibold py-4">${title}</h3>
        <p class="text-base font-secondary font-light">${description}</p>
        <button
          class="w-full bg-primary hover:bg-hover text-white duration-300 ease-out p-3 mt-5 rounded-lg cursor-pointer"
        >
          Checkout
        </button>
      </div>
    `;
  });

  // renderProducts(products, document.getElementById("contCard"));
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const success = document.getElementById("successMsg");

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  const res = await fetch(
    "https://toko-online-backend-ten.vercel.app/api/contact",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );

  const result = await res.json();
  if (result) {
    success.classList.remove("hidden");

    setTimeout(() => {
      success.classList.add("hidden");
    }, 3000);
  }
});
