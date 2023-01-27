import { heroes } from '../data/heroes';

export const getHeroesByName = (name) => {
    if(name.length === 0) return []

    name = name.toLocaleLowerCase().trim()

    return heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(name))
}