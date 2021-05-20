import React, {useState, useEffect} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Stories from './components/stories';



const App = (type) => {




    
    return ( 
        <React.Fragment>
        <CssBaseline />
        <Container fixed>
            <h1>Top Stories</h1>
            <Stories    type={type} />
        </Container>
      </React.Fragment>
     );
}
 
export default App;