const blogTitleField = document.querySelector('.title');
const articleField = document.querySelector('.article');

const bannerImage = document.querySelector('#banner-upload');
const banner = document.querySelector('.banner');
let bannerPath;

const publishBtn = document.querySelector('.publish-btn');
const uploadInput = document.querySelector('#image-upload');

bannerImage.addEventListener('change', () => {
    uploadImage();
});

publishBtn.addEventListener('click', () => {
    if (articleField.value.length && blogTitleField.value.length) {
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        let blogTitle = blogTitleField.value.split(" ").join("-");
        let id = '';
        for (let i = 0; i < 4; i++) {
            id += letters[Math.floor(Math.random() * letters.length)];
        }
        let docName = `blog-${blogTitle}-${id}`;
        let data = new Date();

        // Get the values
        let title = blogTitleField.value;
        let article = articleField.value;
        let bannerImageUrl = bannerPath;
        let date = data.toLocaleString(); // Use toLocaleString to get a readable date

        // Create an object to store blog data
        let blogData = {
            title: title,
            article: article,
            bannerImageUrl: bannerImageUrl,
            date: date
        };
        let blogKeys = localStorage.getItem('blogKeys') ? JSON.parse(localStorage.getItem('blogKeys')) : [];

        // Add the new blog key to the array
        blogKeys.push(docName);
    
        // Store the updated array of blog keys in local storage
        localStorage.setItem('blogKeys', JSON.stringify(blogKeys));
        // Convert the object to JSON and store it in local storage
        localStorage.setItem(docName, JSON.stringify(blogData));

        // Optionally, you can clear the form fields after publishing
        blogTitleField.value = '';
        articleField.value = '';
        banner.style.backgroundImage = '';
        bannerPath = '';
        location.reload();
    } else {
        alert('Please fill in both title and article fields.');
    }
});

function uploadImage() {
    // Get the input element
    const uploadInput = document.querySelector('#banner-upload');

    // Check if a file is selected
    if (uploadInput.files.length > 0) {
        // Get the selected file
        let file = uploadInput.files[0];

        // Create a FileReader
        var reader = new FileReader();

        // Set a callback for when the file is loaded
        reader.onload = function (e) {
            // Display the image
            const banner = document.querySelector('.banner');
            banner.style.backgroundImage = 'url(' + e.target.result + ')';
            bannerPath = e.target.result; // Store the image path for later use
        };

        // Read the file as a data URL
        reader.readAsDataURL(file);
    } else {
        alert('Please choose an image to upload.');
    }
}
