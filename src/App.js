import {useState} from 'react';
import Navigation from './components/Navigation';
import {makeStyles} from '@material-ui/styles';
import FrontPage from './containers/pages/FrontPage'


const useStyles = makeStyles({
  'App': {
    textAlign: 'center',
    padding: '0 calc((100% - 1200px)/2)'
    
  }
})
function App() {
  const classes = useStyles();
  const [menu, setMenu] = useState('About');

  return (
    <div className={classes.App}>
      <Navigation menu = {menu} setMenu ={setMenu} />
      <FrontPage/>
    </div>
  );
}

export default App;
