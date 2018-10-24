/**
 * import a whole directory of external specs, as [{name, url}]
 */

const request = require.context("../../external/", true, /\.txt$/);

let allSpecFiles = request.keys();

let urls = allSpecFiles.map ( (filename) => {
    return {
        name: filename,
        url: request(filename)
    };
} );

module.exports = urls;
