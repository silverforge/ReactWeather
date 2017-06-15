// @flow

const fetcher = (url: string, processorFunc: Function) => {
    fetch(url)
        .then((response) => response.json())
        .then(processorFunc)
        .catch((error) => console.log("::: ERROR :::" + error.message));
}

export default fetcher;