import styled from "styled-components";
import qrImage from "../assets/image-qr-code.png";

const Div = styled.div`
  max-width: 32rem;
  height: 49.7rem;
  border-radius: 1rem;
  background-color: #ffffff;
  text-align: center;
`;
const Img = styled.img`
  width: 90%;
  border-radius: 1rem;
  margin: 1rem auto;
`;

const Content = styled.div`
  padding: 0 2rem 1rem 2rem;
`;

const H1 = styled.h1`
  font-size: 2rem;
  color: #1f314f;
`;

const P = styled.p`
  font-size: 2rem;
  color: #7d889e;
`;

function InfoCard() {
  return (
    <Div>
      <Img src={qrImage} alt="qr-image" />
      <Content>
        <H1>Improve your front-end skills by building projects</H1>
        <P>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </P>
      </Content>
    </Div>
  );
}

export default InfoCard;
