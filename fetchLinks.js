
var anchors = document.getElementsByTagName('a');
var links = [];

for (var i = 0; i < anchors.length; i++) {
    var href = anchors[i].href;
    if (href.startsWith("http://") || href.startsWith("https://")) {
        links.push(href);
    }
}
console.log("No. of links:", links.length);
console.log(links);

async function checkLinkStatus(url) {
    try {
        const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
        console.log(`URL: ${url}, Status: ${response.status}`);
    } catch (error) {
        console.error(`Failed to fetch ${url}:`, error);
    }
}

links.forEach(url => checkLinkStatus(url));

