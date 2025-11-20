import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>wild oasis</H1>
        <Button onClick={() => alert("check in")}>check in</Button>
        <Button onClick={() => alert("check out")}>check in</Button>

        <Input type="number" placeholder="Number of Guest" />
        <Input type="number" placeholder="Number of Guest" />
      </StyledApp>
    </>
  );
}

export default App;
