document.addEventListener("DOMContentLoaded", () => {
    const reviewsContainer = document.getElementById("reviews-container");
    const reviewForm = document.getElementById("review-form");
    const reviewNameInput = document.getElementById("review-name");
    const reviewTextInput = document.getElementById("review-text");
    const reviewRatingContainer = document.getElementById("review-rating");
    const submitButton = document.getElementById("submit-button");
    const userProfile = JSON.parse(localStorage.getItem("userProfile")) || {};

    let selectedRating = 0;

    const getReviews = async () => {
        try {
            const response = await fetch("https://669b6b40276e45187d3569df.mockapi.io/reviews");
            if (!response.ok) throw new Error("Network response was not ok");
            const reviews = await response.json();
            reviewsContainer.innerHTML = reviews.map(review => `
                <div class="review">
                    <div class="review__content">
                        <p class="review__name">${review.name}</p>
                        <p class="review__text">${review.text}</p>
                        <p class="review__rating">Рейтинг: ${"★".repeat(review.rating)}</p>
                    </div>
                </div>
            `).join('');
        } catch (error) {
            console.error("Failed to fetch reviews:", error);
        }
    };

    const addReview = async (name, text, rating) => {
        try {
            const response = await fetch("https://669b6b40276e45187d3569df.mockapi.io/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, text, rating })
            });
            if (!response.ok) throw new Error("Network response was not ok");
            getReviews(); // Refresh the reviews list
        } catch (error) {
            console.error("Failed to add review:", error);
        }
    };

    const userHasReviewed = async (name) => {
        try {
            const response = await fetch("https://669b6b40276e45187d3569df.mockapi.io/reviews");
            if (!response.ok) throw new Error("Network response was not ok");
            const reviews = await response.json();
            return reviews.some(review => review.name === name);
        } catch (error) {
            console.error("Failed to check user reviews:", error);
            return false;
        }
    };

    const updateStarRating = (rating) => {
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => {
            star.classList.toggle('selected', star.dataset.value <= rating);
        });
    };

    reviewRatingContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains('star')) {
            selectedRating = parseInt(e.target.dataset.value, 10);
            updateStarRating(selectedRating);
        }
    });

    const updateFormState = () => {
        if (userProfile.name) {
            reviewNameInput.value = userProfile.name;
            reviewNameInput.readOnly = true;
            reviewTextInput.disabled = false;
            submitButton.disabled = false;
        } else {
            reviewNameInput.value = '';
            reviewNameInput.readOnly = true;
            reviewTextInput.disabled = true;
            submitButton.disabled = true;
        }
    };

    reviewForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = reviewNameInput.value;
        const text = reviewTextInput.value;

        if (name && text && selectedRating > 0) {
            if (await userHasReviewed(name)) {
                alert("Ви вже залишали відгук.");
            } else {
                addReview(name, text, selectedRating);
                reviewTextInput.value = '';
                selectedRating = 0;
                updateStarRating(selectedRating);
            }
        }
    });

    getReviews();
    updateFormState();
});
