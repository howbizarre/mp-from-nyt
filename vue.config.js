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

module.exports = {
    devServer: {
        before: function(app, server) {
            app.get("/rsp", function(req, res) {
                const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.VUE_APP_NYT_MP}`;

                getData(url).then((data) => {
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify(data.results));
                });
            });
        },
    },
};
