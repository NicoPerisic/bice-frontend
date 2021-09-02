
const urlInfo = (id) => {
    let url = "https://dn8mlk7hdujby.cloudfront.net/interview/insurance/";
    fetch(url + id)
        .then(response => response.json())
        .then(data => console.log(data));
}

export default urlInfo;