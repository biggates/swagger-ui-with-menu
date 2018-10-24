/**
 * import a whole directory of json specs, as [{name, url}]
 */

const request = require.context("../../specs/", true, /\.json|yaml$/);

const allSpecFiles = request.keys();

const urls = allSpecFiles.map ( (filename) => {
    const fn = filename.replace(/\.\//ig, '');
    return {
        name: fn.replace(/\.(json|yaml)$/ig, ''),
        url: request(filename)
    };
} );

module.exports = urls;
