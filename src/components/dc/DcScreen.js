import React from 'react'
import { HeroeList } from '../heroes/HeroeList'

export const DcScreen = () => {
    return (
        <div>
            <h1>DcScreen</h1>
            <hr />

            <HeroeList publisher="DC Comics" />
        </div>
    )
}
