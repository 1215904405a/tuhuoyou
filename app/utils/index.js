function getArgvParams() {
    let env = ''
    process.argv.forEach((item) => {
        if (item.match(/--env=\w*/)) {
            env = item.split('=')[1];
        }
    });
    return env
}


module.exports = { getArgvParams }