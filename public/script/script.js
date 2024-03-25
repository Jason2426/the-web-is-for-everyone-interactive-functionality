/* Clipboard API function */
const copyButton = document.querySelector('.copy_button');
if (copyButton) {
    copyButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default button behavior

        // Get the current URL
        const fullLink = window.location.href;

        // Copy the URL to the clipboard
        navigator.clipboard.writeText(fullLink)
            .then(function () {
                // Show success message
                copySuccess.hidden = false;
                copySuccess.style.display = 'flex';
                copySuccess.style.alignItems = 'center';
                // Hide copy button
                event.target.hidden = true;
            })
            .catch(function (err) {
                // Handle errors
                console.error('Error copying link to clipboard: ', err);
                alert('Link kopieren mislukt...');
            });
    });
}




/* Hamburger menu code*/


document.addEventListener("DOMContentLoaded", function () {

    const menuIcon = document.querySelector('.menu_icon');
    if (menuIcon) {
        const burgerMenu = document.querySelector('.burger_menu_window');
        const closeIcon = document.querySelector('.close_icon');

        menuIcon.addEventListener('click', function () {
            // Change translate position of menu icon
            menuIcon.style.transform = 'translateX(-200%)';
            // Show burger menu
            burgerMenu.style.transform = 'translateX(0)';
            // Hide menu icon
            menuIcon.hidden = true;
        });

        closeIcon.addEventListener('click', function () {
            // Change translate position of menu icon back to default
            menuIcon.style.transform = 'translateX(0)';
            // Hide burger menu
            burgerMenu.style.transform = 'translateX(-200%)';
            // Show menu icon
            menuIcon.hidden = false;
        });

    }
});


