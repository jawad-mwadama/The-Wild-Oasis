import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">wild oasis</Heading>

        <Heading as="h2">Check in and out</Heading>
        <Button onClick={() => alert("check in")}>check in</Button>
        <Button onClick={() => alert("check out")}>check in</Button>

        <Heading as="h3">Forms</Heading>
        <Input type="number" placeholder="Number of Guest" />
        <Input type="number" placeholder="Number of Guest" />
      </StyledApp>
    </>
  );
}

export default App;
