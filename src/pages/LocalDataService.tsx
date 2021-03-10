import React, { useEffect } from 'react'
import IPage from '../interfaces/page'
import logging from '../config/logging'
import { Link } from 'react-router-dom'

const LocalDataService: React.FC<IPage> = props => {
    
    useEffect(() => {
        logging.info(`loading ${props.name}`)
    }, [])


    return (
        <div className="section">
            <h1>
                Local Data page
            </h1>
            <p><Link to="/">↵ back to HomePage </Link></p>
        </div>
    )
}

export default LocalDataService