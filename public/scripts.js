// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Responsive navigation menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Patient registration form validation
    const registrationForm = document.querySelector('#registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            const firstName = document.querySelector('#firstName').value;
            const lastName = document.querySelector('#lastName').value;
            const email = document.querySelector('#email').value;
            const phone = document.querySelector('#phone').value;

            if (!firstName || !lastName || !email || !phone) {
                alert('Please fill in all required fields.');
                event.preventDefault(); // Prevent form submission if validation fails
            } else if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                event.preventDefault();
            }
        });
    }

    // Appointment booking form validation
    const appointmentForm = document.querySelector('#appointment-form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(event) {
            const patientName = document.querySelector('#patientName').value;
            const date = document.querySelector('#date').value;
            const time = document.querySelector('#time').value;

            if (!patientName || !date || !time) {
                alert('Please fill in all required fields.');
                event.preventDefault(); // Prevent form submission if validation fails
            }
        });
    }

    // Validate email address format
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(String(email).toLowerCase());
    }
});
