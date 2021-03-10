import React , {useEffect } from 'react';
import './App.css';
import logging from './config/logging'
import routes from './config/routes'
import { BrowserRouter, Route, Switch ,RouteComponentProps} from 'react-router-dom'
import Navbar from './pages/Navbar'


const App: React.FC<{}> = (props) => {
  useEffect(() => {
    logging.info(`Loading application`)
}, [])


return (
  <div>

    <BrowserRouter>
    <Navbar />
      <Switch>
        {routes.map((route, index)=>{
          return (
            <Route 
            key={index}
            path={route.path}
            exact={route.exact}
            render={(props: RouteComponentProps<any>) => (
                <route.component 
                    name={route.name}
                    {...props}
                    {...route.props}

                />
            ) }
            />
          )
        })}
      </Switch>
    </BrowserRouter>
  </div>
)
}

export default App;
