// Import the npm package express from the node_modules map
import express from 'express'

// Import the fetchJson function from the ./helpers directory
import fetchJson from './helpers/fetch-json.js';

// Set the basis endpoint
const apiUrl = 'https://redpers.nl/wp-json/wp/v2';
const redpers_post_url = 'https://redpers.nl/wp-json/wp/v2/posts'
const redpers_categories_url = 'https://redpers.nl/wp-json/wp/v2/categories'

const directus_url = 'https://fdnd-agency.directus.app/items/redpers_shares'

// Create a new express app
const app = express();

// Set ejs as the template engine
app.set('view engine', 'ejs');

// Make working with request data easier
app.use(express.urlencoded({ extended: true }));

// Set the directory for ejs templates
app.set('views', './views');

// Use the 'public' directory for static resources
app.use(express.static('public'));

// Fetch posts from the API
const postsURL = `${apiUrl}/posts?per_page=27`;
const allpostsURL = `${apiUrl}/posts?per_page=100`;
const onePostURL = `${apiUrl}/posts?slug=`;
const categoriesURL = `${apiUrl}/categories?per_page=27`;

const sharesURL = `${directus_url}`; 

// Homepage route
// app.get('/', function (request, response) {
//     // Fetch posts concurrently
//     Promise.all([fetchJson(postsURL)])
//         .then(([postsData]) => {
//             // Render index.ejs and pass the fetched data as 'posts' variables
//             response.render('home', { posts: postsData });
//             // To check fetched Data
//         })
//         .catch((error) => {
//             // Handle error if fetching data fails
//             console.error('Error fetching data:', error);
//             response.status(500).send('Error fetching data!');
//         });
// });

// GET route for the index page
app.get('/', function (request, response) {

    // Fetch posts, categories, and shares concurrently
    Promise.all([fetchJson(categoriesURL), fetchJson(postsURL), fetchJson(sharesURL)])
        .then(([categoriesData, postsData, sharesData]) => {
            // Map over the postsData array and add shares information to each article
            postsData.forEach((article) => {
                const shareInfo = sharesData.data.find((share) => share.slug === article.slug);
                article.shares = shareInfo ? shareInfo.shares : 0;
            });

            // Render index.ejs and pass the fetched data as 'posts' and 'categories' variables
            response.render('home', { categories: categoriesData, posts: postsData });
            //Check if the sharesData has info
            console.log(sharesData);
        })
        .catch((error) => {
            // Handle error if fetching data fails
            console.error('Error fetching data:', error);
            response.status(500).send('Error fetching data');
        });
});



app.get('/post/:slug', function (request, response) {
    // Fetch posts concurrently
    const postSlug = request.params.slug;
    Promise.all([fetchJson(`${onePostURL} + ${postSlug}`)])
        .then(([onePostData]) => {
            // Render index.ejs and pass the fetched data as 'posts' variables
            response.render('post', { post: onePostData });
        })
        .catch((error) => {
            // Handle error if fetching data fails
            console.error('Error fetching data:', error);
            response.status(500).send('Error fetching data!');
        });
});

// All posts route
app.get('/allPosts', function (request, response) {
    // Fetch posts concurrently
    Promise.all([fetchJson(allpostsURL)])
        .then(([postsData]) => {
            // Render index.ejs and pass the fetched data as 'posts' variables
            response.render('allPosts', { posts: postsData });
            // To check fetched Data
            // console.log(postsData)
        })
        .catch((error) => {
            // Handle error if fetching data fails
            console.error('Error fetching data:', error);
            response.status(500).send('Error fetching data!');
        });
});


app.get('/categories', function (request, response) {
    // Fetch posts concurrently
    Promise.all([fetchJson(categoriesURL)])
        .then(([categoryData]) => {
            // Render index.ejs and pass the fetched data as 'posts' variables
            response.render('categories', { categories: categoryData });
            //Check fetched data
            // console.log(categoryData)
        })
        .catch((error) => {
            // Handle error if fetching data fails
            console.error('Error fetching data:', error);
            response.status(500).send('Error fetching data!');
        });
});

app.get('/testing', function (request, response) {

    Promise.all([fetchJson(directus_url)])
    .then(([sharesData]) => {
        // Render index.ejs and pass the fetched data as 'posts' variables
        response.render('testing', { shares: sharesData });
    })
    .catch((error) => {
        // Handle error if fetching data fails
        console.error('Error fetching data:', error);
        response.status(500).send('Error fetching data!');
    });
});

// POST route for the index page
app.post('/', function (request, response) {
    // Currently not handling POST data, redirect to the homepage
    response.redirect(303, '/');
});


// Set the port number for express to listen on
app.set('port', process.env.PORT || 2024);

// Start express and listen on the specified port : 2024
app.listen(app.get('port'), function () {
    // Log a message to the console with the port number
    console.log(`yoo stuff is running on : http://localhost:${app.get('port')}`);
});
