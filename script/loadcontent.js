document.addEventListener("DOMContentLoaded", function() {
    const contentContainer = document.getElementById("content");

    const pageFiles = [
        "cards/crital.html",
        "cards/penomior.html",
    ];

    async function fetchAndDisplayContent(filePath) {
        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const htmlContent = await response.text();
            const cardContainer = document.createElement("div");
            cardContainer.classList.add("card"); // Apply card styles
            cardContainer.innerHTML = htmlContent;
            contentContainer.appendChild(cardContainer);
        } catch (error) {
            console.error("Error fetching content:", error);
        }
    }

    pageFiles.forEach(filePath => {
        fetchAndDisplayContent(filePath);
    });
});