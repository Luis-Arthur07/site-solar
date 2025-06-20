document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // In a real scenario, you would send this data to a server
            // For now, we'll just simulate a successful submission.

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Form Submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Simulate a delay for server response
            setTimeout(() => {
                formMessage.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
                formMessage.classList.remove('error');
                formMessage.classList.add('success');
                contactForm.reset(); // Clear the form
            }, 1000);

            // You could also simulate an error
            // setTimeout(() => {
            //     formMessage.textContent = 'Ocorreu um erro ao enviar sua mensagem. Tente novamente.';
            //     formMessage.classList.remove('success');
            //     formMessage.classList.add('error');
            // }, 1000);
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});