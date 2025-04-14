function goHome() {
  window.location.href = 'indexx.html';
}
function openForm() {
  document.getElementById("popup").style.display = "block";
}

function closeForm() {
  document.getElementById("popup").style.display = "none";
}

function filterColleges(category) {
  const allCards = document.querySelectorAll('.college-card');

  allCards.forEach(card => {
    if (card.id === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function showContact(event) {
  event.preventDefault();

  // Hide all course sections
  document.querySelectorAll('.course-section').forEach(section => {
    section.style.display = "none";
  });


  // Show contact section
  const contactSection = document.getElementById("contact-info");
  contactSection.style.display = "block";
  contactSection.scrollIntoView({ behavior: "smooth" });
}
document.getElementById("suggestButton").addEventListener("click", function () {
  const percentage = parseFloat(document.querySelector('input[name="percentage1"]').value);

  // ✅ Hide the popup form
  const popupForm = document.getElementById("popup");
  if (popupForm) {
    popupForm.style.display = "none";
  }

  // Hide all college cards
  const allCards = document.querySelectorAll('.college-card');
  allCards.forEach(card => {
    card.style.display = "none";
  });

  // Hide all course sections with headings
  const allCourseSections = document.querySelectorAll('.course-section');
  allCourseSections.forEach(section => {
    section.style.display = "none";
  });

  // Clear and hide suggestion message first
  const messageDiv = document.getElementById("suggestionMessage");
  messageDiv.style.display = "none";
  messageDiv.textContent = "";

  // Show based on percentage
  if (percentage >= 90) {
    showCollegesById("iit");
    showMessage("🔵 These are the top colleges for you.");
  } else if (percentage >= 80) {
    showCollegesById("nit");
    showMessage("🟡 These are the top  colleges for you.");
  } else if (percentage >= 75) {
    showCollegesById("government");
    showMessage("🟢 These are the best  colleges for you.");
  } else if (percentage >= 50) {
    showCollegesById("private");
    showMessage("🔴 These are the best  colleges for you.");
  } else {
    alert("Sorry, koi suggestion nahi mil paya. Please valid percentage daalein.");
  }
});

function showCollegesById(collegeId) {
  const cardsToShow = document.querySelectorAll(`.college-card[id="${collegeId}"]`);

  cardsToShow.forEach(card => {
    card.style.display = "block";

    const courseSection = card.closest('.course-section');
    if (courseSection) {
      courseSection.style.display = "block";
    }
  });
}

function showMessage(msg) {
  const messageDiv = document.getElementById("suggestionMessage");
  messageDiv.textContent = msg;
  messageDiv.style.display = "block";
}






// Reset search when logo clicked
document.querySelector(".nav-logo").addEventListener("click", function () {
  document.getElementById("searchBar").value = "";
  document.querySelectorAll(".college-card").forEach(card => {
    card.style.display = "block";
  });
});
function showCourses() {
  // Show all course sections
  document.querySelectorAll('.course-section').forEach(section => {
    section.style.display = "block";
  });

  // Hide contact section
  document.getElementById("contact-info").style.display = "none";
}


//form details addition

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("guidanceForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page reload

      const formData = new FormData(form);
      const params = new URLSearchParams(formData);

      fetch("https://script.google.com/macros/s/AKfycbyfgg-PhdWBMJ5KwEBPgfttuC20QW_gyBRx0ZH2VNSj0MIF_RazjqXqucy8b9selTDF/exec", {
        method: "POST",
        body: params
      })
        .then(response => response.text())
        .then(text => {
          const msg = document.getElementById("messageArea");
          msg.textContent = text;
          msg.style.display = "block";
          setTimeout(() => {
            msg.style.display = "none";
          }, 5000);

          form.reset();
        })

        .catch(error => {
          document.getElementById("messageArea").textContent = "Something went wrong. Please try again.";
          console.error(error);
        });
    });
  }
});




function filterColleges(category) {
  const allCards = document.querySelectorAll('.college-card');

  // Filter cards
  allCards.forEach(card => {
    if (card.id === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  // Hide headings with no visible college-cards
  const sections = document.querySelectorAll('.course-section');
  sections.forEach(section => {
    const visibleCards = section.querySelectorAll('.college-card');
    let hasVisible = false;
    visibleCards.forEach(card => {
      if (card.style.display !== 'none') {
        hasVisible = true;
      }
    });

    const heading = section.querySelector('h2');
    if (heading) {
      heading.style.display = hasVisible ? 'block' : 'none';
    }
  });
}


function searchCollege() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.college-card');

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? 'block' : 'none';
  });
  }










