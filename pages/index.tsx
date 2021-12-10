import { NextPage } from "next";
import Link from "next/link";
import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";
import styled from "styled-components";

import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

// const HeaderCover = styled(Header)`
//   font-size: 5vw;
//   @media only screen and (max-width: 650px) {
//     font-size: 2.5em;
//   }
// `;

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
    <Stack>
      <Flex
        justifyContent="center"
        alignItems="center"
        backgroundImage="url(/coverimg2.jpeg)"
        minHeight="calc(100vh - 72px)"
        backgroundSize="cover"
        backgroundPosition="fixed"
        width="100%"
      >
        <Segment secondary circular>
          <Heading as="h1" fontSize={["8vw", "2.5em"]}>
            <>
              <Icon name="hand peace outline" />
              Hi, I'm Pablo Sáez
            </>
          </Heading>
        </Segment>
      </Flex>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundImage="url(/coverimage1.jpg)"
        backgroundSize="cover"
        backgroundPosition="fixed"
        pt="1em"
        pb="1em"
      >
        <Segment size="massive" secondary>
          <Container text>
            <Header as="h1" textAlign="center" icon>
              <Icon name="code" />
              I'm a full-stack web developer, active open source contributor and
              tech enthusiast.
            </Header>
          </Container>
          <Divider />
          <Stack justifyContent="center" alignItems="center">
            {/* <p>
              <Link href="/portfolio" passHref>
                <Button basic icon labelPosition="left" color="black">
                  Portfolio
                  <Icon name="briefcase" />
                </Button>
              </Link>
            </p> */}
            <p>
              <a href="https://github.com/pabloszx">
                <Button basic icon labelPosition="left" color="black">
                  GitHub Profile
                  <Icon name="github" />
                </Button>
              </a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/pablo-sáez-parra-73044194">
                <Button basic icon labelPosition="left" color="black">
                  LinkedIn Profile
                  <Icon name="linkedin" />
                </Button>
              </a>
            </p>
            <p>
              <a href="https://twitter.com/PabloSz_">
                <Button basic icon labelPosition="left" color="black">
                  Twitter Profile
                  <Icon name="twitter" />
                </Button>
              </a>
            </p>
            <p>
              <a href="mailto:pablosaez1995@gmail.com">
                <Button basic icon labelPosition="left" color="black">
                  pablosaez1995@gmail.com
                  <Icon name="envelope outline" />
                </Button>
              </a>
            </p>
          </Stack>
        </Segment>
      </Box>
    </Stack>
  );
};

export default Home;
