import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
    </Switch>
)