


document.addEventListener("DOMContentLoaded", function() {
    var copyButton = document.querySelector('.copy_button');
    var linkIcon = document.getElementById('link_icon');
    var postForm = document.getElementById('postForm');
    var copySuccess = document.getElementById('copySuccess');

    copyButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get the form action link
        var formAction = postForm.getAttribute('action');
        var fullLink = window.location.origin + formAction; // Construct full link

        try {
            // Create a temporary input element
            var tempInput = document.createElement('input');
            tempInput.setAttribute('value', fullLink);
            document.body.appendChild(tempInput);

            // Select the input field
            tempInput.select();
            tempInput.setSelectionRange(0, 99999); // For mobile devices

            // Copy the text inside the input field
            document.execCommand('copy');

            // Remove the temporary input
            document.body.removeChild(tempInput);

            // Hide the button
            copyButton.hidden = true;

            // Show the copy success message
            copySuccess.hidden = false;
        } catch (err) {
            console.error('Error copying link to clipboard: ', err);
            alert('Failed to copy link to clipboard');
        }
    });
});



/* Hamburger menu code*/

document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.querySelector('.menu_icon');
    var burgerMenu = document.querySelector('.burger_menu_window');
    var closeIcon = document.querySelector('.close_icon');

    menuIcon.addEventListener('click', function() {
        // Change translate position of menu icon
        menuIcon.style.transform = 'translateX(-200%)';
        // Show burger menu
        burgerMenu.style.transform = 'translateX(0)';
        // Hide menu icon
        menuIcon.hidden = true;
    });

    closeIcon.addEventListener('click', function() {
        // Change translate position of menu icon back to default
        menuIcon.style.transform = 'translateX(0)';
        // Hide burger menu
        burgerMenu.style.transform = 'translateX(-200%)';
        // Show menu icon
        menuIcon.hidden = false;
    });
});


