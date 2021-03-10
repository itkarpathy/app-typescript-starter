import React, { useEffect , useState } from 'react'
import IPage from '../interfaces/page'
import logging from '../config/logging'
import { RouteComponentProps, withRouter , Link} from 'react-router-dom';

const NetworkService: React.FC<IPage & RouteComponentProps<any>> = props => {
    const [ message, setMessage] = useState<string>('');
    
    useEffect(() => {
        logging.info(`loading ${props.name}`);

        let number = props.match.params.number;

        if(number){
            setMessage(`The network ID is: ${number}`)
        } 
        else{
            setMessage('No network service ID provided ⬇️')
        }
    }, []);


    return (
    <div className="section">
         <p>Network's above here: </p>
         <p>{message}</p>

         <Link to="/">↵ back to HomePage </Link>
    </div>
   )
    }

export default withRouter(NetworkService);