import {useState} from 'react';
import Navigation from './components/Navigation';
import {makeStyles} from '@material-ui/styles';
import FrontPage from './containers/pages/FrontPage'
import About from './containers/pages/About'
import Contact from './containers/pages/Contact'
import Projects from './containers/pages/Projects'
import Aux from './components/Auxiliary';

const useStyles = makeStyles({
  'App': {
    textAlign: 'center',
    padding: '0 calc((100% - 1170px)/2)',
    background: 'linear-gradient(#f1faee, #faf9f9, #E1F4DA); ',
    overflow: 'hidden'
  },
})
function App() {
  const classes = useStyles();
  const [menu, setMenu] = useState('Projects');

  return (
    <div className={classes.App}>

        <Navigation menu = {menu} setMenu ={setMenu} />
        {
          menu == 'Projects'? 
          <Aux>
            <FrontPage/>
            <Projects/>
          </Aux> 
          : (menu == 'About'? <Aux><About/></Aux>:<Aux><Contact/></Aux>)
        }
        
        
      
    </div>
  );
}

export default App;
