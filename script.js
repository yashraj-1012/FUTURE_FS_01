document.addEventListener("DOMContentLoaded", function () {
  // Get all nav links with hashes
  const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default jump

      const targetId = this.getAttribute("href").substring(1); // Get ID without #
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Smooth scroll into view
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// document.getElementById("downloadCV").addEventListener("click", function () {
//   const link = document.createElement("a");
//   link.href = "assets/Resume_Yashraj.pdf";
//   link.download = "Resume_Yashraj.pdf";
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// });
