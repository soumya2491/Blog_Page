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


