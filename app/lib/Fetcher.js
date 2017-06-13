
const fetcher = (url, processorFunc) => {
    fetch(url)
        .then((response) => response.json())
        .then(processorFunc)
        .catch((error) => console.log("::: ERROR :::" + error.message));
}

export default fetcher;