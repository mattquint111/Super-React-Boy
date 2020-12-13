export default function initializeDeck() {
    let id = 0
    const cards = [
        '<i className="fas fa-heart"></i>',
        '<i className="fas fa-moon"></i>',
        '<i className="fas fa-star"></i>',
        '<i className="fas fa-square"></i>',
        '<i className="fas fa-star-of-life"></i>',
        '<i className="fas fa-bolt"></i>',
        '<i className="fas fa-bullseye"></i>',
        '<i className="fas fa-circle"></i>'
    ].reduce((acc, type) => {
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

    return cards
}