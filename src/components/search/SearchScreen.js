import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
//import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard'
import { getHeroByName } from '../../selectores/getHeroByName';

export const SearchScreen = ({ history }) => {

    //obtener location con hook

    const location = useLocation();


    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        search: q
    });

    const { search } = formValues;


    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);


    const handleSearch = (e) => {
        e.preventDefault();

        history.push(`?q=${search}`)
    }


    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className='row'>
                <div className='col-4'>
                    <h4>Search your Hero</h4>

                    <form onSubmit={handleSearch}>
                        <input
                            type='text'
                            placeholder='find your hero'
                            className='form-control'
                            name='search'
                            value={search}
                            onChange={handleInputChange}
                            autoComplete='off'
                        />

                        <button
                            type='submit'
                            className='btn m-1 btn-block btn-outline-primary'

                        >Search..</button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4> Results </h4>
                    <hr />

                    {

                        (q === '')
                        &&
                        <div className='alert alert-info'>
                            Search a hero
                            </div>
                    }


                    {

                        (q !== '' && heroesFiltered.length === 0)
                        &&
                        <div className='alert alert-danger'>
                            There is not a hero with " {q} "
                        </div>
                    }

                    {

                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))

                    }

                </div>
            </div>
        </div>
    )
}
