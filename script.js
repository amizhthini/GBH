// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =========================
// Testimonial Slider Script
// =========================

// Select all testimonials and navigation buttons
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.testimonial-nav button:first-child');
const nextBtn = document.querySelector('.testimonial-nav button:last-child');

let currentIndex = 0;

// Function to show the active testimonial
function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    if (i === index) {
      testimonial.classList.add('active');
    }
  });
}

// Initialize first testimonial as active
showTestimonial(currentIndex);

// Event listeners for navigation buttons
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});
