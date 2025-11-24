import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="horizontal">
          <Heading as="h1">wild oasis</Heading>
          <div>
            <Heading as="h2">Check in and out</Heading>
            <Button onClick={() => alert("check in")}>check in</Button>
            <Button onClick={() => alert("check out")}>check in</Button>
          </div>
        </Row>
        <Row type="vertical">
          <Heading as="h3">Forms</Heading>
          <form>
            <Input type="number" placeholder="Number of Guest" />
            <Input type="number" placeholder="Number of Guest" />
          </form>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
