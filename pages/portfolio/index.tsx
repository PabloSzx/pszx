import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import { FC, useMemo } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import { useRememberState } from "use-remember-state";

import { Box, Heading, Stack, Text } from "@chakra-ui/core";

import {
  PortfolioImage,
  PortfolioVideo,
  TextSegment,
} from "../../src/components/Portfolio";

enum PortfolioOptions {
  lalaTrAC = "LALA TrAC",
  lalaVERA = "LALA VERA",
  sinanticaWeb = "Sinantica Website",
  sinanticaFES = "Sinantica FES",
  awesomeTemplates = "Awesome Templates",
}

const SinanticaFES: FC = () => {
  return (
    <Grid centered>
      <TextSegment>
        <p>
          <b>Sinantica FES</b> is a private project that consists of a dashboard
          of real time data coming from a neural network that analyzes cameras
          pointing to the street, counting the vehicles and identifying them by
          category
        </p>
        <p>
          More info about this project is available at{" "}
          <a href="https://www.sinantica.cl/services">
            https://www.sinantica.cl/services
          </a>
          .
        </p>
      </TextSegment>
      <TextSegment>
        <p>This application works using:</p>
        <ul>
          <li>
            <a href="https://reactjs.org/">React.js</a>
          </li>
          <li>
            <a href="https://nodejs.org/">Node.js</a>
          </li>
          <li>
            <a href="https://www.typescriptlang.org/">TypeScript</a>
          </li>
          <li>
            <a href="https://mongodb.com">MongoDB</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API">
              WebSockets
            </a>
          </li>
        </ul>
        <p>
          All the previously mentioned being developed using libraries and
          frameworks like:
        </p>
        <ul>
          <li>
            <a href="https://expressjs.com/">Express.js</a>
          </li>
          <li>
            <a href="https://socket.io/">Socket.IO</a>
          </li>
          <li>
            <a href="https://react-redux.js.org/">React Redux</a>
          </li>
          <li>
            <a href="https://mongoosejs.com/">Mongoose</a>
          </li>
          <li>
            <a href="https://react.semantic-ui.com/">Semantic UI</a>
          </li>
          <li>
            <a href="https://apexcharts.com/">ApexCharts</a>
          </li>
        </ul>
      </TextSegment>
      <PortfolioImage
        src="/2019-10/sinanticafes1.png"
        alt="Sinantica FES Screenshot"
      />
      <PortfolioImage
        src="/2019-10/sinanticafes2.gif"
        alt="Sinantica FES GIF"
      />
    </Grid>
  );
};

const LALATrAC: FC = () => {
  return (
    <Grid centered>
      <TextSegment>
        <b>LALA TrAC</b> is an{" "}
        <a href="https://github.com/LALA-UACh/TrAC-v2">open source project</a>{" "}
        driven by{" "}
        <a href="https://www.lalaproject.org/">
          <b>LALA Project</b>
        </a>{" "}
        -{" "}
        <a href="https://www.uach.cl/">
          <b>UACh</b>
        </a>{" "}
        that aims to help for better understanding of students trajectory.
      </TextSegment>
      <TextSegment>
        It was first designed for program's directors usage, but right now is in
        development for an expansion for student's own university career
        trajectory and semester planning.
      </TextSegment>

      <TextSegment>
        <p>This application is in development using:</p>
        <ul>
          <li>
            <a href="https://reactjs.org/">React.js</a>
          </li>
          <li>
            <a href="https://nodejs.org/">Node.js</a>
          </li>
          <li>
            <a href="https://www.typescriptlang.org/">TypeScript</a>
          </li>
          <li>
            <a href="https://www.postgresql.org/">PostgreSQL</a>
          </li>
          <li>
            <a href="https://graphql.org/">GraphQL</a>
          </li>
        </ul>
        <p>
          All the previously mentioned being developed using libraries and
          frameworks like:
        </p>
        <ul>
          <li>
            <a href="https://nextjs.org/">Next.js</a>
          </li>
          <li>
            <a href="https://expressjs.com/">Express.js</a>
          </li>
          <li>
            <a href="https://knexjs.org/">Knex.js</a>
          </li>
          <li>
            <a href="https://chakra-ui.com/">Chakra UI</a>
          </li>
          <li>
            <a href="https://react.semantic-ui.com/">Semantic UI</a>
          </li>
          <li>
            <a href="https://typegraphql.ml/">TypeGraphQL</a>
          </li>
          <li>
            <a href="https://github.com/graphql/dataloader">DataLoader</a>
          </li>
          <li>
            <a href="https://www.framer.com/motion/">Framer Motion</a>
          </li>
        </ul>
      </TextSegment>
      <PortfolioVideo src="/trac_video_2.mp4" />
    </Grid>
  );
};
const LALAVera: FC = () => {
  return (
    <Grid centered>
      <TextSegment>
        <b>LALA VERA</b> is a project driven by{" "}
        <a href="https://www.lalaproject.org/">
          <b>LALA Project</b>
        </a>{" "}
        -{" "}
        <a href="https://www.uach.cl/">
          <b>UACh</b>
        </a>{" "}
        that aims to give better graphic visualizations of surveys created by{" "}
        <a href="http://bienestarspm.uach.cl/apoyo-al-aprendizaje/">
          UAEEP UACh
        </a>
        .
      </TextSegment>
      <TextSegment>
        <p>This application was made using:</p>
        <ul>
          <li>
            <a href="https://reactjs.org/">React.js</a>
          </li>
          <li>
            <a href="https://nodejs.org/">Node.js</a>
          </li>
          <li>
            <a href="https://www.typescriptlang.org/">TypeScript</a>
          </li>
          <li>
            <a href="https://www.postgresql.org/">PostgreSQL</a>
          </li>
        </ul>
        <p>
          All the previously mentioned being developed using libraries and
          frameworks like:
        </p>
        <ul>
          <li>
            <a href="https://nextjs.org/">Next.js</a>
          </li>
          <li>
            <a href="https://expressjs.com/">Express.js</a>
          </li>
          <li>
            <a href="https://github.com/konvajs/react-konva">React Konva</a>
          </li>
          <li>
            <a href="https://sequelize.org/">Sequelize</a>
          </li>
          <li>
            <a href="https://github.com/axios/axios/">Axios</a>
          </li>
          <li>
            <a href="https://react.semantic-ui.com/">Semantic UI</a>
          </li>
        </ul>
      </TextSegment>

      <PortfolioImage src="/2019-10/vera1.png" alt="LALA VERA Screenshot" />
      <PortfolioImage src="/2019-10/vera2.png" alt="LALA VERA Screenshot" />
    </Grid>
  );
};
const AwesomeTemplates: FC = () => {
  return (
    <Grid centered>
      <Grid.Row>
        <Segment inverted secondary>
          In development, available at
          <Segment>
            <a href="https://awesome-templates.dev">
              https://awesome-templates.dev
            </a>
          </Segment>
          and it's source code at
          <Segment>
            <a href="https://github.com/PabloSzx/awesome-templates">
              https://github.com/PabloSzx/awesome-templates
            </a>
          </Segment>
        </Segment>
      </Grid.Row>

      <TextSegment>
        <p>
          <b>Awesome Templates</b> is a personal project, the application offers
          a <b>centralized</b> list of programming projects templates, using the{" "}
          <a href="https://developer.github.com/v4/">GitHub API</a> and open for
          the open source community to add templates and improve the app
          functionality.
        </p>
        <p>This web app aims to help for:</p>
        <ul>
          <li>Better understanding of specific environments</li>
          <li>
            Learning how different frameworks and libraries could interact with
            each other
          </li>
          <li>Boosting the beginning of new projects</li>
        </ul>
      </TextSegment>

      <TextSegment>
        <p>This application is being made using:</p>
        <ul>
          <li>
            <a href="https://graphql.org/">GraphQL</a>
          </li>
          <li>
            <a href="https://reactjs.org/">React.js</a>
          </li>
          <li>
            <a href="https://nodejs.org/">Node.js</a>
          </li>
          <li>
            <a href="https://www.typescriptlang.org/">TypeScript</a>
          </li>
          <li>
            <a href="https://www.postgresql.org/">PostgreSQL</a>
          </li>
        </ul>
        <p>
          All the previously mentioned being developed using libraries and
          frameworks like:
        </p>
        <ul>
          <li>
            <a href="https://nextjs.org/">Next.js</a>
          </li>
          <li>
            <a href="https://expressjs.com/">Express.js</a>
          </li>
          <li>
            <a href="https://www.apollographql.com/">Apollo GraphQL</a>
          </li>
          <li>
            <a href="https://typegraphql.ml/">TypeGraphQL</a>
          </li>
          <li>
            <a href="https://typeorm.io/">TypeORM</a>
          </li>
          <li>
            <a href="https://react.semantic-ui.com/">Semantic UI</a>
          </li>
        </ul>
      </TextSegment>

      <PortfolioImage
        src="/2019-10/awesometemplates1.png"
        alt="Awesome Templates Screenshot"
      />
      <PortfolioImage
        src="/2019-10/awesometemplates2.png"
        alt="Awesome Templates Screenshot"
      />
    </Grid>
  );
};

const SinanticaWebsite: FC = () => {
  return (
    <Grid centered>
      <Grid.Row>
        <TextSegment>
          <Text>
            Public website of <b>Sinantica</b>
          </Text>
          <Heading textAlign="center">
            <a href="https://sinantica.cl">https://sinantica.cl</a>
          </Heading>
        </TextSegment>
      </Grid.Row>
    </Grid>
  );
};

const Portfolio: NextPage = () => {
  const [active, setActive] = useRememberState(
    "portfolioMenu",
    PortfolioOptions.awesomeTemplates,
    {
      SSR: true,
    }
  );

  const MenuItem: FC<{ name: PortfolioOptions }> = ({ name }) => (
    <Menu.Item onClick={() => setActive(name)} active={active === name}>
      {name}
    </Menu.Item>
  );

  const ActiveItem = useMemo(() => {
    switch (active) {
      case PortfolioOptions.sinanticaFES:
        return <SinanticaFES />;
      case PortfolioOptions.lalaTrAC:
        return <LALATrAC />;
      case PortfolioOptions.lalaVERA:
        return <LALAVera />;
      case PortfolioOptions.awesomeTemplates:
        return <AwesomeTemplates />;
      case PortfolioOptions.sinanticaWeb:
        return <SinanticaWebsite />;
      default:
        return null;
    }
  }, [active]);

  return (
    <>
      <Head key={1}>
        <title>Portfolio</title>
      </Head>
      <Stack justifyContent="center" alignItems="center">
        <Box textAlign="center">
          <Menu inverted fluid>
            {Object.values(PortfolioOptions).map((name, key) => (
              <MenuItem name={name} key={key} />
            ))}
          </Menu>
        </Box>
        <Box>
          <Segment inverted>
            <AnimatePresence>
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, display: "none" }}
              >
                {ActiveItem}
              </motion.div>
            </AnimatePresence>
          </Segment>
        </Box>
      </Stack>
    </>
  );
};

export default Portfolio;
