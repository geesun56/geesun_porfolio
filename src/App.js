import {useState, useEffect} from 'react';
import Navigation from './components/Navigation';
import {makeStyles} from '@material-ui/styles';
import FrontPage from './containers/pages/FrontPage'
import About from './containers/pages/About'
import Articles from './containers/pages/Articles'
import Footer from './components/Footer'


const useStyles = makeStyles({
  'App': {
    textAlign: 'center',
    padding: '0 calc((100% - 1170px)/2)',
    background: 'linear-gradient(#f1faee, #faf9f9, #EEFAF1); ',
    overflow: 'hidden',
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

            <FrontPage/>
            
          : (menu == 'About'? <About/> : <Articles/>)
        }
        
        
        <Footer/>
        
        
        
      
    </div>
  );
}

export default App;
