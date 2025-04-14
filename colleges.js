function goHome() {
    window.location.href = 'indexx.html';
  }


  const stars = document.querySelectorAll('.star');
  const ratingDisplay = document.getElementById('rating-number');

  let savedRating = localStorage.getItem('userRating');
  if (savedRating) {
    highlightStars(savedRating);
    ratingDisplay.textContent = savedRating;
  }

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const rating = star.getAttribute('data-value');
      localStorage.setItem('userRating', rating);
      highlightStars(rating);
      ratingDisplay.textContent = rating;
    });

    star.addEventListener('mouseover', () => {
      highlightStars(star.getAttribute('data-value'));
    });

    star.addEventListener('mouseout', () => {
      const current = localStorage.getItem('userRating') || 0;
      highlightStars(current);
    });
  });

  function highlightStars(rating) {
    stars.forEach(star => {
      if (parseInt(star.getAttribute('data-value')) <= rating) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });
  }
  
  


  function toggleLike(collegeName, imageUrl) {
    let liked = JSON.parse(localStorage.getItem('likedColleges') || '[]');
    const index = liked.findIndex(c => c.name === collegeName);
    if (index > -1) {
      liked.splice(index, 1);
    } else {
      liked.push({ name: collegeName, image: imageUrl });
    }
    localStorage.setItem('likedColleges', JSON.stringify(liked));
    alert(`${collegeName} has been ${index > -1 ? 'removed from' : 'added to'} your liked list.`);
  }

