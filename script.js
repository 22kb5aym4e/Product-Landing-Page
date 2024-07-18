function learnMore() {
    alert("Learn more about our product!");
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Message sent!");
});
