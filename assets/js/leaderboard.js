    // Get the initials and score from localStorage
    const initials = localStorage.getItem('initials');
    const score = localStorage.getItem('score');

    // Display the initials and score
    document.getElementById('initials').textContent = initials;
    document.getElementById('score').textContent = score;
