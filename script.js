const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-class]").forEach(link => {
  link.addEventListener("click", () => {
    const select = document.getElementById("classSelect");
    if (select) select.value = link.dataset.class;
  });
});

document.getElementById("enquiryForm")?.addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get("name")?.toString().trim();
  const contact = form.get("contact")?.toString().trim();
  const selectedClass = form.get("class")?.toString() || "Not specified";
  const message = form.get("message")?.toString().trim() || "No additional message";
  const subject = encodeURIComponent(`Namma Yoga enquiry — ${selectedClass}`);
  const body = encodeURIComponent(
    `Namaste Namma Yoga,\n\nMy name is ${name}.\nMy contact: ${contact}\nI'm interested in: ${selectedClass}\n\n${message}\n\nPlease share details about classes and timings.\n`
  );
  // Replace the placeholder address below with the official Namma Yoga email before launch.
  const destination = "hello@namma-yoga.example";
  document.getElementById("formFeedback").textContent =
    "Your email app will open. The website owner must replace the placeholder email address before accepting enquiries.";
  window.location.href = `mailto:${destination}?subject=${subject}&body=${body}`;
});
