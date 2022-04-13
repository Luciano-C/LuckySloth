const cleanMessage = (message) => {
    message = message.toLowerCase();
    const symbols = [",", ".", "\"", "#", "$", "%", "&", "/", "(", ")", "?", "¿", "´", "!", "¡", "+", "-", "~", "*", "{", "}", "[", "]", ":", ";", "`"];
    symbols.forEach(x => message = message.replaceAll(x, ""));
    message = message.trim();

    return ` ${message} ` 
}


 module.exports = {cleanMessage};


