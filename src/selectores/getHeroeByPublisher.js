import {heroes} from '../data/heroes';

export const getHeroeByPublisher = publisher => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" incorrecto`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}
