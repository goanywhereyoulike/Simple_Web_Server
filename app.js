const serverHandler = (req, res) => {
    res.setHeader('Content-type', 'application/json');

    const responseData = {
        name: 'Austin',
        age: 30,
        gender: 'man'
    }

    res.end(JSON.stringify(responseData));
}

module.exports = serverHandler;