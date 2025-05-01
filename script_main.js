function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
// alert("welcome")

const container = document.querySelector('.container');
const leftButton = document.querySelector('.scrollLeft');
const rightButton = document.querySelector('.scrollRight');
const scrollAmount = 400; 

leftButton.addEventListener('click', function(e) {
    e.preventDefault(); 
    container.scrollBy({
        left: -scrollAmount, 
        behavior: 'smooth'
    });
});

rightButton.addEventListener('click', function(e) {
    e.preventDefault(); 
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

function autoScroll(){
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    })};

   setInterval(autoScroll, 2100);

    function autoScroll() {
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
            container.scrollTo({ left: 0, behavior: 'smooth' }); 
        } else {
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    }


// searchbar

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchBar"); 
    const suggestionsBox = document.getElementById("suggestions");
    const blogHeadings = document.querySelectorAll(".main_2_headings");

    
    const headingsList = Array.from(blogHeadings).map(heading => ({
        title: heading.textContent.trim(),
        element: heading
    }));


    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase().trim();
        suggestionsBox.innerHTML = ""; 

        if (query === "") {
            suggestionsBox.style.display = "none"; 
            return;
        }

       
        const filteredHeadings = headingsList.filter(heading =>
            heading.title.toLowerCase().includes(query)
        );

        if (filteredHeadings.length === 0) {
            suggestionsBox.style.display = "none";
            return;
        }

        filteredHeadings.forEach(heading => {
            const li = document.createElement("li");
            li.textContent = heading.title;

      
            li.addEventListener("click", function () {
                heading.element.scrollIntoView({ behavior: "smooth" });
                searchInput.value = heading.title;
                suggestionsBox.innerHTML = ""; 
                suggestionsBox.style.display = "none"; 
            });

            suggestionsBox.appendChild(li); 
        });

        suggestionsBox.style.display = "block"; 
    });

   
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".search-box")) {
            suggestionsBox.style.display = "none";
        }
    });
});


 // lightbox

 document.addEventListener("DOMContentLoaded", function () {
       
    const postImages = document.querySelectorAll(".post-img img");
    const lightboxModal = document.querySelector(".lightbox-modal");
    const lightboxImage = lightboxModal.querySelector("img");
    const closeModal = lightboxModal.querySelector(".close");
  
    
    postImages.forEach((img) => {
      img.addEventListener("click", () => {
        lightboxImage.src = img.src; 
        lightboxModal.style.display = "flex";
      });
    });
  
  
    closeModal.addEventListener("click", () => {
      lightboxModal.style.display = "none";
    });
  
  
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.style.display = "none";
      }
    });
  });




  
document.addEventListener("DOMContentLoaded", function () {
   
    const postImages = document.querySelectorAll(".main_2_img");
    const lightboxModal = document.querySelector(".lightbox-modal");
    const lightboxImage = lightboxModal.querySelector("img");
    const closeModal = lightboxModal.querySelector(".close");
  
    
    img.addEventListener("click", () => {
        lightboxImage.src = img.src; // Set the lightbox image source
        lightboxImage.alt = img.alt; // Optionally set the alt text too
        lightboxModal.style.display = "block";
    });
    
  
  
    closeModal.addEventListener("click", () => {
      lightboxModal.style.display = "none";
    });
  
  
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.style.display = "none";
      }
    });
  });
  