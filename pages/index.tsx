import { NextPage } from "next";
import Head from "next/head";
import { Header, Icon } from "semantic-ui-react";
import styled from "styled-components";

const HeaderCover = styled(Header)`
  font-size: 10em;
  padding-bottom: 3em;
`;

const HomeCover = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/static/coverimg2.jpeg");
  background-size: cover;
  background-position: fixed;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PabloSz</title>
      </Head>
      <HomeCover>
        <HeaderCover as="h1" inverted>
          <Icon name="hand peace outline" />
          Hi, I'm Pablo Sáez
        </HeaderCover>
      </HomeCover>
    </>
  );
};

export default Home;
