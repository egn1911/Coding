//const text = 'the queens gambit'

function capitalise(text){
    const texts = text.split(' ');
    newText = texts.map(texts => texts.substr(0,1).toUpperCase().concat(texts.substr(1)))
    return newText.join(' ');
}

console.log(capitalise('king is the king'))