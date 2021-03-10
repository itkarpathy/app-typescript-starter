import React, { useEffect } from 'react'
import IPage from '../interfaces/page'
import logging from '../config/logging'
import { Link } from 'react-router-dom'

const ThreadPoolService: React.FC<IPage> = props => {
    
    useEffect(() => {
        logging.info(`loading ${props.name}`)
    }, [])


    return (
        <div className="section">
            <h1>
               Thread Pool Service Page
            </h1>
            <p><Link to="/">↵ back to HomePage </Link></p>
        </div>
    )
}

export default ThreadPoolService