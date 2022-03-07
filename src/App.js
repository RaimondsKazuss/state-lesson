import styled from 'styled-components';
import './App.css';

const StyledCard = styled.div`
  width: 20rem;
  height: 20rem;
  border: 1px solid #222;
`

const StyledCardContent = styled.div`
  width: 15rem;
  height: 15rem;
  border: 1px solid #ff0ff0;
`

const StyledChild = styled.div`
  background-color: ${props => props.light ? "yellow" : "darkblue"};
`

function App() {

  const Card = ({isLight}) => {
    return (
      <StyledCard>
        <CardContent isLight={isLight}/>
      </StyledCard>
    )
  }

  const CardContent = ({isLight}) => {
    return (
      <StyledCardContent>
        <AnotherChild light={isLight}/>  
      </StyledCardContent>
    )
  }

  const AnotherChild = ({light}) => {
    return <StyledChild light={light}>Child element content</StyledChild>
  }

  return (
    <div className="App">
      <Card isLight />
    </div>
  );
}

export default App;
