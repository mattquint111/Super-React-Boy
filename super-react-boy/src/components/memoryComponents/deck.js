function shuffle(array) {
    const _array = array.slice(0);
    for (var i=0; i<_array.length-1; i++) {
        var randomIndex = Math.floor(Math.random() * (i+1));
        var temp = _array[i];
        _array[i] = _array[randomIndex];
        _array[randomIndex] = temp;
    }
    return _array;
}

export default function initializeDeck() {
    let id = 0;
    const cards= ['react', 'reactu', 'redux', 'vue', 
    'angular', 'javascript', 'ruby', 'rails'].reduce((acc, type) => {
        acc.push({
            id: id++,
            type
        })
        acc.push({
            id: id++,
            type
        })
        return acc
    }, [])
    return shuffle(cards);
}

        // '<i className="fas fa-heart"></i>',
        // '<i className="fas fa-moon"></i>',
        // '<i className="fas fa-star"></i>',
        // '<i className="fas fa-square"></i>',
        // '<i className="fas fa-star-of-life"></i>',
        // '<i className="fas fa-bolt"></i>',
        // '<i className="fas fa-bullseye"></i>',
        // '<i className="fas fa-circle"></i>'