import { heroes } from '../data/heroes';

export const getHeroesBypublisher = (publisher) => {
    const validpublishers = ['DC Comics', 'Marvel Comics']
    if(!validpublishers.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`)
    }

    return heroes.filter(heroe => heroe.publisher === publisher)
}