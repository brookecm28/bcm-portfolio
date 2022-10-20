import { Switch, Route } from 'react-router-dom'
import Landing from './Components/Landing'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import RichRecipes from "./Components/projects/rich-recipes";

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/projects/rich-recipes' component={RichRecipes} />
        <Route exact path='/projects/lemon-prop' component={Contact} />
        <Route exact path='/contact/bcm-portfolio' component={Contact} />
        <Route exact path='/contact/inventor-manager-pro' component={Contact} />
    </Switch>
)