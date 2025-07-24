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

/*skills info container */

// function openModal(skill) {
//   const modal = document.getElementById("modal");
//   const backdrop = document.getElementById("modal-backdrop");
//   const title = document.getElementById("modal-title");
//   const content = document.getElementById("modal-content");

// Customize based on skill
//   if (skill === "Dart") {
//     title.textContent = "Dart";
//     content.textContent =
//       "Dart is a client-optimized language for fast apps on any platform, especially used with Flutter.";
//   }

//   if (skill === "Flutter") {
//     title.textContent = "Flutter";
//     content.textContent =
//       "Flutter is an open-source UI toolkit by Google for building beautiful, natively compiled apps.";
//   }

//   if (skill === "Java") {
//     title.textContent = "Flutter";
//     content.textContent =
//       "Flutter is an open-source UI toolkit by Google for building beautiful, natively compiled apps.";
//   }

//   if (skill === "JavaScript") {
//     title.textContent = "Flutter";
//     content.textContent =
//       "Flutter is an open-source UI toolkit by Google for building beautiful, natively compiled apps.";
//   }

//   if (skill === "HTML") {
//     title.textContent = "Flutter";
//     content.textContent =
//       "Flutter is an open-source UI toolkit by Google for building beautiful, natively compiled apps.";
//   }

//   if (skill === "CSS") {
//     title.textContent = "Flutter";
//     content.textContent =
//       "Flutter is an open-source UI toolkit by Google for building beautiful, natively compiled apps.";
//   }

//   modal.style.display = "block";
//   backdrop.style.display = "block";
// }

// function closeModal() {
//   document.getElementById("modal").style.display = "none";
//   document.getElementById("modal-backdrop").style.display = "none";
// }
