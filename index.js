document
    .getElementById('ratingForm')
    .addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents form submition

        const selectedRating = document.querySelector(
            'input[name=rads]:checked'
        );

        if (selectedRating) {
            document.querySelector('.rating').style.display = 'none';
            document.querySelector('.thank-you').style.display = 'flex';
            document.getElementById('selectedRating').textContent =
                selectedRating.value;
        } else {
            alert('Please select a rating value before submitting');
        }
    });
