import React, { useMemo } from 'react'
import {getHeroeByPublisher} from '../../selectores/getHeroeByPublisher';
import {HeroCard} from './HeroCard';

export const HeroeList = ({publisher}) => {

    //dependencias / si el publisher cambia [publisher]
    const heroes = useMemo(() => getHeroeByPublisher(publisher), [publisher]);

    //const heroes = getHeroeByPublisher(publisher);

    return (
        <div className='card-columns animate__animated animate__fadeIn'>
            {

                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                    
                        { ...hero }
                    />
                ))

            }
        </div>
    )
}
