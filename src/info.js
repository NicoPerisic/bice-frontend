
const urlInfo = (id) => {

    return new Promise((resolve, reject) => {
    let url = "https://dn8mlk7hdujby.cloudfront.net/interview/insurance/";
    fetch(url + id)
        .then(response => response.json())
        .then(data => resolve(data));
});
};

export default urlInfo;