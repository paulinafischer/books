
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import HeroesCatalogue from './HeroesCatalogue';
import HeroInfo from '../components/HeroInfo';
import Item from './components/item'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HeroesCatalogue} />
            <Route exact path="/hero/:category/:id" component={HeroInfo} />
        </Switch>
    </BrowserRouter>
  
);

export default Routes;