function onClick() {
    const param = document.getElementById("searchbar").value;
    fetch("https://api.tvmaze.com/search/shows?q=" + param)
        .then((blob) => blob.json())
        .then((shows) => {
            const app = document.getElementById("app");
            app.innerHTML = shows
                .map(
                    ({ show }) => `
                        <div">
                            ${
                                show.image
                                    ? `<img src="${show.image.medium}">`
                                    : ""
                            }
                        </div>
                    `
                )
                .join();
        });
}

function changeclr(obj) {
    document.body.style.backgroundColor = obj.value;
}

function clear() {
    const app = document.getElementById("app");
    app.innerHTML = "";
}
document.getElementById("mybtn").addEventListener("click", onClick);
document.getElementById("clear").addEventListener("click", clear);
