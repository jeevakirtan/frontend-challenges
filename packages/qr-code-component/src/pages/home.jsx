import styled from "styled-components";
import InfoCard from "../components/InfoCard";

const Main = styled.main`
  background-color: lightblue;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Home() {
  return (
    <Main>
      <InfoCard />
    </Main>
  );
}

export default Home;
