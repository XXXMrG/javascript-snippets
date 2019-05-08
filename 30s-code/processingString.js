/**
 * 
 * @param {string} str 
 */
function processString (str) {
    let data = str.split("");
    let result = data.map((item) => {
        return item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
    })
    return result.join("");
}

console.log(processString("asl;dkfAfdlaskAfdl;sakA"));