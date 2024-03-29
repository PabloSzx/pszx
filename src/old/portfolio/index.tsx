import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import { FC, useMemo } from "react";
import { Button, Grid, Icon, Menu, Segment } from "semantic-ui-react";
import { useRememberState } from "use-remember-state";

import { Box, Heading, Stack, Text } from "@chakra-ui/react";

import {
  PortfolioImage,
  PortfolioVideo,
  TextSegment,
} from "../../components/Portfolio";

enum PortfolioOptions {
  lalaTrAC = "LALA TrAC",
  lalaVERA = "LALA VERA",
  sinanticaWeb = "Sinantica Website",
  sinanticaFES = "Sinantica FES",
  e_ncendio = "e-ncendio",
  // awesomeTemplates = "Awesome Templates",
  communityUach = "Practice Community UACh",
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
          <a target="_blank" href="https://www.sinantica.cl/services">
            https://www.sinantica.cl/services
          </a>
          .
        </p>
      </TextSegment>
      <TextSegment>
        <p>This application works using:</p>
        <ul>
          <li>
            <a target="_blank" href="https://reactjs.org/">
              React.js
            </a>
          </li>
          <li>
            <a target="_blank" href="https://nodejs.org/">
              Node.js
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.typescriptlang.org/">
              TypeScript
            </a>
          </li>
          <li>
            <a target="_blank" href="https://mongodb.com">
              MongoDB
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"
            >
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
            <a target="_blank" href="https://expressjs.com/">
              Express.js
            </a>
          </li>
          <li>
            <a target="_blank" href="https://socket.io/">
              Socket.IO
            </a>
          </li>
          <li>
            <a target="_blank" href="https://react-redux.js.org/">
              React Redux
            </a>
          </li>
          <li>
            <a target="_blank" href="https://mongoosejs.com/">
              Mongoose
            </a>
          </li>
          <li>
            <a target="_blank" href="https://react.semantic-ui.com/">
              Semantic UI
            </a>
          </li>
          <li>
            <a target="_blank" href="https://apexcharts.com/">
              ApexCharts
            </a>
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
        <a target="_blank" href="https://github.com/LALA-UACh/TrAC-v2">
          open source project
        </a>{" "}
        driven by{" "}
        <a target="_blank" href="https://www.lalaproject.org/">
          <b>LALA Project</b>
        </a>{" "}
        -{" "}
        <a target="_blank" href="https://www.uach.cl/">
          <b>UACh</b>
        </a>{" "}
        that aims to help for better understanding of students trajectory.
      </TextSegment>
      <TextSegment>
        It was first designed for program's directors usage, and it was recently
        expanded for student's own university career trajectory and semester
        planning.
      </TextSegment>

      <TextSegment>
        <p>This application is in development using:</p>
        <ul>
          <li>
            <a target="_blank" href="https://reactjs.org/">
              React.js
            </a>
          </li>
          <li>
            <a target="_blank" href="https://nodejs.org/">
              Node.js
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.typescriptlang.org/">
              TypeScript
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.postgresql.org/">
              PostgreSQL
            </a>
          </li>
          <li>
            <a target="_blank" href="https://graphql.org/">
              GraphQL
            </a>
          </li>
        </ul>
        <p>
          All the previously mentioned being developed using libraries and
          frameworks like:
        </p>
        <ul>
          <li>
            <a target="_blank" href="https://nextjs.org/">
              Next.js
            </a>
          </li>
          <li>
            <a target="_blank" href="http://fastify.io/">
              Fastify
            </a>
          </li>
          <li>
            <a target="_blank" href="https://knexjs.org/">
              Knex.js
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.apollographql.com/docs/react/">
              Apollo GraphQL Client
            </a>
          </li>
          <li>
            <a target="_blank" href="https://chakra-ui.com/">
              Chakra UI
            </a>
          </li>
          <li>
            <a target="_blank" href="https://react.semantic-ui.com/">
              Semantic UI
            </a>
          </li>
          <li>
            <a target="_blank" href="https://typegraphql.ml/">
              TypeGraphQL
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/graphql/dataloader">
              DataLoader
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.framer.com/motion/">
              Framer Motion
            </a>
          </li>
        </ul>
      </TextSegment>
      <PortfolioVideo src="/new_trac_video.mp4" />
    </Grid>
  );
};
const LALAVera: FC = () => {
  return (
    <Grid centered>
      <TextSegment>
        <b>LALA VERA</b> is a project driven by{" "}
        <a target="_blank" href="https://www.lalaproject.org/">
          <b>LALA Project</b>
        </a>{" "}
        -{" "}
        <a target="_blank" href="https://www.uach.cl/">
          <b>UACh</b>
        </a>{" "}
        that aims to give better graphic visualizations of surveys created by{" "}
        <a
          target="_blank"
          href="http://bienestarspm.uach.cl/apoyo-al-aprendizaje/"
        >
          UAEEP UACh
        </a>
        .
      </TextSegment>
      <TextSegment>
        <p>This application was made using:</p>
        <ul>
          <li>
            <a target="_blank" href="https://reactjs.org/">
              React.js
            </a>
          </li>
          <li>
            <a target="_blank" href="https://nodejs.org/">
              Node.js
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.typescriptlang.org/">
              TypeScript
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.postgresql.org/">
              PostgreSQL
            </a>
          </li>
        </ul>
        <p>
          All the previously mentioned being developed using libraries and
          frameworks like:
        </p>
        <ul>
          <li>
            <a target="_blank" href="https://nextjs.org/">
              Next.js
            </a>
          </li>
          <li>
            <a target="_blank" href="https://expressjs.com/">
              Express.js
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/konvajs/react-konva">
              React Konva
            </a>
          </li>
          <li>
            <a target="_blank" href="https://sequelize.org/">
              Sequelize
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/axios/axios/">
              Axios
            </a>
          </li>
          <li>
            <a target="_blank" href="https://react.semantic-ui.com/">
              Semantic UI
            </a>
          </li>
        </ul>
      </TextSegment>

      <PortfolioImage src="/2019-10/vera1.png" alt="LALA VERA Screenshot" />
      <PortfolioImage src="/2019-10/vera2.png" alt="LALA VERA Screenshot" />
    </Grid>
  );
};

const E_ncendio: FC = () => {
  return (
    <Grid centered>
      <TextSegment>
        <b>e-ncendio</b> is an{" "}
        <a target="_blank" href="https://github.com/pabloszx/fire-uach">
          open source project
        </a>{" "}
        driven by <b>FireSeS</b> -{" "}
        <a target="_blank" href="https://www.uach.cl/">
          <b>UACh</b>
        </a>{" "}
        that aims to learn and research about fires perception interactively
        through games and image sharing.
      </TextSegment>

      <TextSegment>
        More info available{" "}
        <a
          target="_blank"
          href="https://diario.uach.cl/nucleo-fireses-lanza-aplicacion-para-investigar-sobre-incendios-jugando/"
        >
          here{" "}
        </a>
        <i>(university report in spanish).</i>
        <br />
        <br />
        This application is publicly available here:{" "}
        <a target="_blank" href="https://e-ncendio.inf.uach.cl/">
          <b>https://e-ncendio.inf.uach.cl/</b>
        </a>
      </TextSegment>

      <TextSegment>
        <p>This application is mobile focused and was made using:</p>
        <ul>
          <li>
            <a target="_blank" href="https://reactjs.org/">
              React.js
            </a>
          </li>
          <li>
            <a target="_blank" href="https://nodejs.org/">
              Node.js
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.typescriptlang.org/">
              TypeScript
            </a>
          </li>
          <li>
            <a target="_blank" href="https://mongodb.com">
              MongoDB
            </a>
          </li>
          <li>
            <a target="_blank" href="https://graphql.org/">
              GraphQL
            </a>
          </li>
        </ul>
        <p>
          All the previously mentioned being developed using libraries and
          frameworks like:
        </p>
        <ul>
          <li>
            <a target="_blank" href="https://nextjs.org/">
              Next.js
            </a>
          </li>
          <li>
            <a target="_blank" href="https://expressjs.com/">
              Express.js
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.apollographql.com/">
              Apollo GraphQL
            </a>
          </li>
          <li>
            <a target="_blank" href="https://typegoose.github.io/typegoose/">
              Typegoose
            </a>
          </li>
          <li>
            <a target="_blank" href="https://mongoosejs.com/">
              Mongoose
            </a>
          </li>
          <li>
            <a target="_blank" href="https://chakra-ui.com/">
              Chakra UI
            </a>
          </li>
          <li>
            <a target="_blank" href="https://react.semantic-ui.com/">
              Semantic UI
            </a>
          </li>
          <li>
            <a target="_blank" href="https://typegraphql.ml/">
              TypeGraphQL
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.framer.com/motion/">
              Framer Motion
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/lovell/sharp">
              sharp
            </a>
          </li>
        </ul>
      </TextSegment>
      <PortfolioVideo src="/e_ncendio_video.mp4" />
    </Grid>
  );
};

const CommunityPracticeUACh: FC = () => {
  return (
    <Grid centered>
      <Grid.Row>
        <TextSegment>
          <p>
            Practice Community UACh (Comunidades de práctica UACh in{" "}
            <b>Spanish</b>) is a website with Blog functionality included, using
            a self implemented CMS (Content Management System).
          </p>
          <p>Following a Serverless architecture.</p>
          <p>
            Publicly available at{" "}
            <b>
              <a target="_blank" href="https://comunidades.inf.uach.cl">
                https://comunidades.inf.uach.cl
              </a>
            </b>
          </p>

          <p>
            This project is open source, available here{" "}
            <a
              target="_blank"
              href="https://github.com/PabloSzx/Innov-UACh-Blog"
            >
              https://github.com/PabloSzx/Innov-UACh-Blog
            </a>
          </p>
        </TextSegment>
      </Grid.Row>
      <Grid.Row>
        <TextSegment>
          <p>This website + CMS was made using:</p>
          <ul>
            <li>
              <a target="_blank" href="https://reactjs.org/">
                React.js
              </a>
            </li>
            <li>
              <a target="_blank" href="https://nodejs.org/">
                Node.js
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.typescriptlang.org/">
                TypeScript
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.postgresql.org/">
                MongoDB
              </a>
            </li>
          </ul>
          <p>
            All the previously mentioned being developed using libraries and
            frameworks like:
          </p>
          <ul>
            <li>
              <a target="_blank" href="https://nextjs.org/">
                Next.js
              </a>
            </li>

            <li>
              <a
                target="_blank"
                href="https://github.com/apollographql/apollo-server"
              >
                Apollo Server GraphQL
              </a>
            </li>
            <li>
              <a target="_blank" href="https://mongoosejs.com/">
                Mongoose
              </a>
            </li>
            <li>
              <a target="_blank" href="https://chakra-ui.com/">
                Chakra UI
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/samdenty/gqless">
                gqless
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/PabloSzx/gqless-hooks"
              >
                gqless-hooks (made by myself)
              </a>
            </li>
          </ul>
        </TextSegment>
      </Grid.Row>

      <PortfolioImage
        src="/comunidades.png"
        alt="Screenshot comunidades.inf.uach.cl"
      />

      <PortfolioImage
        src="/comunidades_admin_1.png"
        alt="Screenshot comunidades admin 1"
      />
      <PortfolioImage
        src="/comunidades_admin_2.png"
        alt="Screenshot comunidades admin 2"
      />
      <PortfolioImage
        src="/comunidades_admin_3.png"
        alt="Screenshot comunidades admin 2"
      />
    </Grid>
  );
};

// const AwesomeTemplates: FC = () => {
//   return (
//     <Grid centered>
//       <Grid.Row>
//         <Segment inverted secondary>
//           In development, available at
//           <Segment>
//             <a target="_blank" href="https://awesome-templates.dev">
//               https://awesome-templates.dev
//             </a>
//           </Segment>
//           and it's source code at
//           <Segment>
//             <a
//               target="_blank"
//               href="https://github.com/PabloSzx/awesome-templates"
//             >
//               https://github.com/PabloSzx/awesome-templates
//             </a>
//           </Segment>
//         </Segment>
//       </Grid.Row>

//       <TextSegment>
//         <p>
//           <b>Awesome Templates</b> is a personal project, the application offers
//           a <b>centralized</b> list of programming projects templates, using the{" "}
//           <a target="_blank" href="https://developer.github.com/v4/">
//             GitHub API
//           </a>{" "}
//           and open for the open source community to add templates and improve
//           the app functionality.
//         </p>
//         <p>This web app aims to help for:</p>
//         <ul>
//           <li>Better understanding of specific environments</li>
//           <li>
//             Learning how different frameworks and libraries could interact with
//             each other
//           </li>
//           <li>Boosting the beginning of new projects</li>
//         </ul>
//       </TextSegment>

//       <TextSegment>
//         <p>This application is being made using:</p>
//         <ul>
//           <li>
//             <a target="_blank" href="https://graphql.org/">
//               GraphQL
//             </a>
//           </li>
//           <li>
//             <a target="_blank" href="https://reactjs.org/">
//               React.js
//             </a>
//           </li>
//           <li>
//             <a target="_blank" href="https://nodejs.org/">
//               Node.js
//             </a>
//           </li>
//           <li>
//             <a target="_blank" href="https://www.typescriptlang.org/">
//               TypeScript
//             </a>
//           </li>
//           <li>
//             <a target="_blank" href="https://www.postgresql.org/">
//               PostgreSQL
//             </a>
//           </li>
//         </ul>
//         <p>
//           All the previously mentioned being developed using libraries and
//           frameworks like:
//         </p>
//         <ul>
//           <li>
//             <a target="_blank" href="https://nextjs.org/">
//               Next.js
//             </a>
//           </li>
//           <li>
//             <a target="_blank" href="https://expressjs.com/">
//               Express.js
//             </a>
//           </li>
//           <li>
//             <a target="_blank" href="https://www.apollographql.com/">
//               Apollo GraphQL
//             </a>
//           </li>
//           <li>
//             <a target="_blank" href="https://typegraphql.ml/">
//               TypeGraphQL
//             </a>
//           </li>
//           <li>
//             <a target="_blank" href="https://typeorm.io/">
//               TypeORM
//             </a>
//           </li>
//           <li>
//             <a target="_blank" href="https://react.semantic-ui.com/">
//               Semantic UI
//             </a>
//           </li>
//         </ul>
//       </TextSegment>

//       <PortfolioImage
//         src="/2019-10/awesometemplates1.png"
//         alt="Awesome Templates Screenshot"
//       />
//       <PortfolioImage
//         src="/2019-10/awesometemplates2.png"
//         alt="Awesome Templates Screenshot"
//       />
//     </Grid>
//   );
// };

const SinanticaWebsite: FC = () => {
  return (
    <Grid centered>
      <Grid.Row>
        <TextSegment>
          <Text>
            Public website of <b>Sinantica</b>
          </Text>
          <Heading textAlign="center">
            <a target="_blank" href="https://sinantica.cl">
              https://sinantica.cl
            </a>
          </Heading>
        </TextSegment>
      </Grid.Row>
    </Grid>
  );
};

const Portfolio: NextPage = () => {
  const [active, setActive] = useRememberState(
    "portfolioMenu",
    PortfolioOptions.lalaTrAC,
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

      case PortfolioOptions.sinanticaWeb:
        return <SinanticaWebsite />;
      case PortfolioOptions.e_ncendio:
        return <E_ncendio />;
      case PortfolioOptions.communityUach:
        return <CommunityPracticeUACh />;
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
        <Box color="black">
          <TextSegment>
            <Text>
              These are some fullstack projects I've been working on
              <br /> Please check my{" "}
              <a target="_blank" href="https://github.com/pabloszx">
                <Button basic icon labelPosition="left" color="black">
                  GitHub Profile
                  <Icon name="github" />
                </Button>
              </a>{" "}
              to check some of my open source <b>libraries</b> and{" "}
              <b>contributions</b>.
            </Text>
          </TextSegment>
        </Box>
        <Box textAlign="center">
          <Menu inverted fluid stackable>
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
