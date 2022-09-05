const search = function () {
    const keyWord = document.getElementById("searchText").value;
    const endpoint = `https://api.unsplash.com/search/photos?page=5&per_page=30&query=${keyWord}&client_id=gDke-mW4k9gTVYvqtEi9sVX7M6kyWp3zlV9YWl7HjZY`;
    getImages(endpoint);
};

const getImages = function (endpoint) {
    fetch(endpoint)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            let html = "";
            console.log(response);
            response.results.forEach((image) => {
                let imageSrc = image.urls.regular;
                let description =
                    image.description || "This image has no description.";
                let updatedHtml;
                if (!imageSrc) {
                    updatedHtml = "No image exists.";
                } else {
                    updatedHtml = `
              <a href="${image.links.html}" class="imageCard">
                <div class="image">
                  <img src="${image.urls.regular}" />
                </div>
                <div class="description">${
                    image.alt_description || "No description"
                }</div>
              </a>`;
                }
                html += updatedHtml;
            });
            document.getElementById("photoContainer").innerHTML = html;
        });
};
