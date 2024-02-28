// Function to load posts from local storage and update the blog management table
function loadPostsToTable() {
    const blog_records = JSON.parse(localStorage.getItem("blogs")) || [];
    const blogTableBody = document.querySelector('.admin-content table tbody');
  
    // Clear existing table rows
    blogTableBody.innerHTML = '';
  
    blog_records.forEach((post, index) => {
      const { postTitle, postCategory, formattedDate } = post;
  
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td data-title="SN">${index + 1}</td>
        <td data-title="Title">${postTitle}</td>
        <td data-title="Author">${postCategory}</td>
        <td data-title="edit"><a href="/blog/index.html" class="edit">edit</a></td>
        <td data-title="delete"><a href="#" class="delete" onclick="deleteBlog(${index})">delete</a></td>
        <td data-title="publish">${formattedDate}</td>
      `;
  
      blogTableBody.appendChild(newRow);
    });
  }
  
  // Function to delete a blog post
  window.deleteBlog = function (index) {
    const blog_records = JSON.parse(localStorage.getItem("blogs")) || [];
    blog_records.splice(index, 1);
    localStorage.setItem("blogs", JSON.stringify(blog_records));
  
    // Call the function to load posts to the table after deleting data
    loadPostsToTable();
  };
  document.addEventListener("DOMContentLoaded", function () {
    // Check if the user is signed in
    if (isUserSignedIn()) {
        // Redirect to another page or perform actions
        redirectToDashboard();
        loadPostsToTable();
    }
    else{
      window.location.href = "/index.html";
    }

    function isUserSignedIn() {
        // Check if user information is available in session storage
        let logged = sessionStorage.getItem("logged");
        return logged !== null;
    }

    function redirectToDashboard() {
        let email = sessionStorage.getItem("logged");
        if (!(email === 'irankundayvan2020@gmail.com')) {
            window.location.href = "/users/index.html";
        }
    }
});
  
  document.addEventListener('DOMContentLoaded', function () {
    // Call the function to load posts to the table during page load
    loadPostsToTable();
  
    // ... (your existing code)

  });
  