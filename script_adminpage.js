const addPostForm = document.getElementById('addPostForm');
const postsContainer = document.getElementById('postsContainer');
let posts = []; 

function renderPosts() {
    postsContainer.innerHTML = ''; 
    posts.forEach((post, index) => {
        const postItem = document.createElement('div');
        postItem.className = 'list-item';
        postItem.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
            ${post.video ? `<video controls src="${post.video}"></video>` : ''}
            <button onclick="deletePost(${index})">Delete</button>
        `;
        postsContainer.appendChild(postItem);
    });
}

addPostForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const postTitle = document.getElementById('postTitle').value;
    const postContent = document.getElementById('postContent').value;
    const postImage = document.getElementById('postImage').files[0];
    const postVideo = document.getElementById('postVideo').value;

    let imageURL = '';
    if (postImage) {
        const reader = new FileReader();
        reader.onload = function (event) {
            imageURL = event.target.result;

           
            posts.push({ title: postTitle, content: postContent, image: imageURL, video: postVideo });
            addPostForm.reset();
            renderPosts();
        };
        reader.readAsDataURL(postImage); 
    } else {
     
        posts.push({ title: postTitle, content: postContent, image: '', video: postVideo });
        addPostForm.reset();
        renderPosts();
    }
});


function deletePost(index) {
    posts.splice(index, 1); 
    renderPosts();
}


renderPosts();