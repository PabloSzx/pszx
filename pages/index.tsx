import { NextPage } from "next";
import { Header, Icon, Segment } from "semantic-ui-react";
import styled from "styled-components";

const HeaderCover = styled(Header)`
  font-size: 5vw;
`;

const HomeCover = styled.div<{ backgroundImg: string; navMargin?: boolean }>`
  width: 100%;
  min-height: ${({ navMargin }) =>
    navMargin ? "calc(100vh - 58px)" : "100vh"};
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ backgroundImg }) => backgroundImg});
  background-size: cover;
  background-position: fixed;
`;

const Home: NextPage = () => {
  return (
    <>
      <HomeCover backgroundImg="/coverimg2.jpeg" navMargin>
        <Segment secondary circular>
          <HeaderCover as="h1" inverted>
            <Icon name="hand peace outline" />
            Hi, I'm Pablo Sáez
          </HeaderCover>
        </Segment>
      </HomeCover>
      {/* <HomeCover backgroundImg="/coverimage1.jpg">
        <Segment size="massive" secondary>
          This Website is made to show some of some of my work
        </Segment>
      </HomeCover> */}
    </>
  );
};

export default Home;
