import {useState} from 'react';
import Navigation from './components/Navigation';
import {makeStyles} from '@material-ui/styles';
import FrontPage from './containers/pages/FrontPage'
import About from './containers/pages/About'
import Contact from './containers/pages/Contact'
import Projects from './containers/pages/Projects'

const useStyles = makeStyles({
  'App': {
    textAlign: 'center',
    padding: '0 calc((100% - 1170px)/2)',
    background: 'linear-gradient(#f1faee, #faf9f9, #f1faee); ',
    overflow: 'hidden'
  },
})
function App() {
  const classes = useStyles();
  const [menu, setMenu] = useState('Projects');

  return (
    <div className={classes.App}>

        <Navigation menu = {menu} setMenu ={setMenu} />
        <FrontPage/>
        <Projects/>
        <About/>
        <Contact/>
      
    </div>
  );
}

export default App;
