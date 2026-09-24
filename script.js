const faqs = document.querySelectorAll(".faq-block");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

let menuList = document.getElementById("menuList");
if (menuList) {
  menuList.style.maxHeight = "0px";
}

function toggleMenu() {
  if (menuList && menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "100vh";
    menuList.style.height = "100vh";
    document.body.classList.add("no-scroll");
  } else if (menuList) {
    menuList.style.maxHeight = "0px";
    document.body.classList.remove("no-scroll");
  }
}

const menuLinks = document.querySelectorAll(".menu-link, .menu a");

menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // If inside scroll container (desktop view), scroll scroll-container
        const scrollContainer = document.querySelector(".scroll");
        if (scrollContainer && window.innerWidth > 992) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    if (menuList) {
      menuList.style.maxHeight = "0px";
    }
    document.body.classList.remove("no-scroll");
  });
});
