import React, { useEffect } from 'react'
import IPage from '../interfaces/page'
import logging from '../config/logging'

const HomePage: React.FC<IPage> = props => {
    
    useEffect(() => {
        logging.info(`loading ${props.name}`)
    }, [])


    return (
        <div className="home">
            <h1>
                Welcome in our App
            </h1>
        </div>
    )
}

export default HomePage