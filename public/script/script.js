

// document.addEventListener("DOMContentLoaded", function() {
//     var copyButton = document.querySelector('.copy_button');
//     var postForm = document.getElementById('postForm');

//     copyButton.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent default form submission behavior

//         // Get the form action link
//         var formAction = postForm.getAttribute('action');
//         var fullLink = window.location.origin + formAction; // Construct full link

//         // Create a temporary input element
//         var tempInput = document.createElement('input');
//         tempInput.setAttribute('value', fullLink);
//         document.body.appendChild(tempInput);

//         // Select the input field
//         tempInput.select();
//         tempInput.setSelectionRange(0, 99999); // For mobile devices

//         // Copy the text inside the input field
//         document.execCommand('copy');

//         // Remove the temporary input
//         document.body.removeChild(tempInput);

//         // Inform the user
//         alert('Link copied to clipboard: ' + fullLink);
//     });
// });


// document.addEventListener("DOMContentLoaded", function() {
//     var copyButton = document.querySelector('.copy_button');
//     var postForm = document.getElementById('postForm');
//     var copySuccess = document.getElementById('copySuccess');

//     copyButton.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent default form submission behavior

//         // Get the form action link
//         var formAction = postForm.getAttribute('action');
//         var fullLink = window.location.origin + formAction; // Construct full link

//         // Create a temporary input element
//         var tempInput = document.createElement('input');
//         tempInput.setAttribute('value', fullLink);
//         document.body.appendChild(tempInput);

//         // Select the input field
//         tempInput.select();
//         tempInput.setSelectionRange(0, 99999); // For mobile devices

//         // Copy the text inside the input field
//         document.execCommand('copy');

//         // Remove the temporary input
//         document.body.removeChild(tempInput);

//         // Show the copy success message
//         copySuccess.style.display = 'block';

//         // Hide the success message after 3 seconds
//         setTimeout(function() {
//             copySuccess.style.display = 'none';
//         }, 3000);
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    var copyButton = document.querySelector('.copy_button');
    var postForm = document.getElementById('postForm');
    var copySuccess = document.getElementById('copySuccess');

    copyButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get the form action link
        var formAction = postForm.getAttribute('action');
        var fullLink = window.location.origin + formAction; // Construct full link

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
        // copyButton.style.visibility = "hidden";
        // copyButton.style.display = "none";
        copyButton.hidden = true;
        

        // Show the copy success message
        copySuccess.hidden = false;

    });
});

