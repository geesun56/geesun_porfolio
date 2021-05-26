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


const axios = require('axios').default;
const url = 'https://geesun-portfolio-7c275-default-rtdb.firebaseio.com/Projects.json';

function App() {
  const classes = useStyles();
  const [menu, setMenu] = useState('Projects');
  const [projects, setProjects] = useState();

  const getData = () => {
    axios.get(url)
    .then((res) => {
      setProjects(Object.values(res.data))
    })
    .catch((err) => console.error(err));
  }

  useEffect(() => {
    getData();
  }, [])

  const sampleProjects = [{'title': 'Spiderman', 'description': 'Great power comes with great responsibility', 'srcPreview':'https://images-na.ssl-images-amazon.com/images/I/91bBsCoK0rL._SL1500_.jpg'}, 
  {'title': 'Unsplash', 'description': 'Loren Ipsum test project', 'srcPreview':'https://images.unsplash.com/photo-1620709450523-786e53f0a073?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
  {'title': 'Ironman', 'description': 'The truth is, I am ironman', 'srcPreview':'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg'}, 
  {'title': 'Captain America', 'description': 'I can do this all day', 'srcPreview':'https://cdn.shopify.com/s/files/1/0747/3829/products/mL1192_1024x1024.jpg?v=1571445343'},
  {'title':'Dummy Project', 'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 'srcPreview': 'https://images.unsplash.com/photo-1620688904168-f044f3119daa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'},
  {'title':'Dummy Project', 'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 'srcPreview': 'https://images.unsplash.com/photo-1620680334350-eb7ba9afd018?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
  {'title':'Dummy Project', 'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 'srcPreview': 'https://images.unsplash.com/photo-1620747899017-b2229e9d9c9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80'},
  {'title':'Dummy Project', 'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 'srcPreview': 'https://images.unsplash.com/photo-1620694882401-c1aded43fa02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80'},
  {'title':'Dummy Project', 'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 'srcPreview': 'https://images.unsplash.com/photo-1620736214173-0544d50a8c86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'},
  {'title':'Dummy Project', 'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 'srcPreview': 'https://images.unsplash.com/photo-1612392062798-4117917fcc50?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}]

  return (
    <div className={classes.App}>
      
        <Navigation menu = {menu} setMenu ={setMenu} />
        {
          menu == 'Projects'? 

            <FrontPage projectlist = {sampleProjects}/>
            
          : (menu == 'About'? <About/> : <Articles/>)
        }
        
        {/* {projects != null ? <img src={projects[0].Thumbnail}/>: null} */}
        <Footer/>
        
        
        
      
    </div>
  );
}

export default App;
