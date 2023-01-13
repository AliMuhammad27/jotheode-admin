export let connection_string;
export let image_url;

const PORT = 7081;

if (window.location.hostname == "localhost") {
  connection_string = `https://localhost:${PORT}/api`;
  image_url = `https://localhost:${PORT}/`;
} else {
  connection_string = `https://dev74.onlinetestingserver.com:${PORT}/api`;
  image_url = `https://dev74.onlinetestingserver.com:${PORT}/`;
}
