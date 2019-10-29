import { NextPage } from "next";
import Head from "next/head";
import { FC, useMemo } from "react";
import { useWindowSize } from "react-use";
import { Container, Grid, Image, Menu, Segment } from "semantic-ui-react";
import { useRememberState } from "use-remember-state";

enum PortfolioOptions {
  awesomeTemplates = "Awesome Templates",
  sinanticaFES = "Sinantica FES",
  lalaTrAC = "LALA TrAC",
  lalaVERA = "LALA VERA",
}

const TextSegment: FC = ({ children }) => {
  const { width } = useWindowSize(1920);
  return (
    <Grid.Row>
      <Segment padded={width > 630 ? "very" : false}>
        <Container text textAlign="justified">
          {children}
        </Container>
      </Segment>
    </Grid.Row>
  );
};

const PortfolioImage: FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Image src={src} alt={alt} />
      </Grid.Column>
    </Grid.Row>
  );
};

const SinanticaFES: FC = () => {
  return (
    <Grid centered>
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
      <PortfolioImage src="/2019-10/trac1.png" alt="LALA TrAC Screenshot" />
    </Grid>
  );
};
const LALAVera: FC = () => {
  return (
    <Grid centered>
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
          This is a personal project, the application offers a{" "}
          <b>centralized</b> list of programming projects templates, using the{" "}
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
            <a href="https://www.apollographql.com/">Apollo GraphQL</a>{" "}
            <i>
              (<b>client</b> and <b>API</b> side)
            </i>
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
      default:
        return null;
    }
  }, [active]);

  return (
    <>
      <Head key={1}>
        <title>Portfolio</title>
      </Head>
      <Grid padded stackable>
        <Grid.Row>
          <Grid.Column width={3} textAlign="center">
            <Menu vertical inverted fluid pointing>
              {Object.values(PortfolioOptions).map((name, key) => (
                <MenuItem name={name} key={key} />
              ))}
            </Menu>
          </Grid.Column>
          <Grid.Column width={13}>
            <Segment inverted>{ActiveItem}</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Portfolio;
