async function getData(url) {
    const fetch = require("node-fetch");
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response.json();
}

//export default getData;
