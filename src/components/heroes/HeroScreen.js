import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { getHeroeById } from '../../selectores/getHeroeById';

export const HeroScreen = ({history}) => {

    //extraer parametros que vayan por el url
    const { heroeId } = useParams();

    const heroe = useMemo(() => getHeroeById(heroeId), [heroeId])

    //const heroe = getHeroeById(heroeId);

    if (!heroe) {
        return <Redirect to='/' />;
    }

    const handleReturn = () => {
        
        if (history.lenght <= 2) {
            history.push('/');
        }else{

        history.goBack();
        }
    }
    

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = heroe;

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img
                    src={`../assets/heroes/${heroeId}.jpg`}
                    alt={superhero}
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                />

            </div>
            <div className='col-8'>
                    <h3>{superhero}</h3>

                    <ul className='ist-group list-group-flush'>
                        <li className='list-group-item'>

                            <b>Alter ego: </b>{alter_ego}

                        </li>

                        <li className='list-group-item'>

                            <b>Publisher: </b>{publisher}

                        </li>

                        <li className='list-group-item'>

                            <b>First Appearance: </b>{first_appearance}

                        </li>
                    </ul>

                    <h5>Characters</h5>
                    <p>{characters}</p>
                
                    <button 
                        className='btn btn-outline-primary'
                        onClick= {handleReturn}
                    >
                        
                        Return
                    </button>
                </div>
        </div>
    )
}
