
import './App.css';
import { ButtonGroup, Button } from '@mui/material';





function App() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>


      <div className='board'>
        <ButtonGroup 
          
          aria-label="text button group"
          orientation='vertical'>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup 
           
          aria-label="text button group"
          orientation='vertical'>
          <Button>Four</Button>
          <Button>Five</Button>
          <Button>Six</Button>
        </ButtonGroup>
        <ButtonGroup 
          
          aria-label="text button group"
          orientation='vertical'>
          <Button>Seven</Button>
          <Button>Eight</Button>
          <Button>Nine</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default App;
