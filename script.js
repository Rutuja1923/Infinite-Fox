const container = document.querySelector('.container');

const URL = `https://randomfox.ca/floof/`;

async function loadImages(numImgs = 8) {
    for (let i = 0; i < numImgs; i++) {
        try {
            const response = await fetch('https://randomfox.ca/floof/');
            const data = await response.json();

            const image = document.createElement('img');
            image.src = data.image;
            image.alt = "Random Fox"; 
            container.appendChild(image);
        } 
        catch (error) {
            console.error("Error fetching image:", error);
        }
    }
}
loadImages();

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadImages();
    }
});