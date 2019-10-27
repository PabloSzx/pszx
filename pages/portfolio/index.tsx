import { NextPage } from "next";
import Head from "next/head";
import { FC, useMemo } from "react";
import { Grid, Image, Menu, Segment } from "semantic-ui-react";
import { useRememberState } from "use-remember-state";

enum PortfolioOptions {
  awesomeTemplates = "Awesome Templates",
  sinanticaFES = "Sinantica FES",
  lalaTrAC = "LALA TrAC",
  lalaVERA = "LALA VERA"
}

const { sinanticaFES, lalaTrAC, lalaVERA, awesomeTemplates } = PortfolioOptions;

const SinanticaFES: FC = () => {
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Image
            src="/2019-10/sinanticafes1.png"
            size="huge"
            alt="Sinantica FES Screenshot"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Image
            src="/2019-10/sinanticafes2.gif"
            size="huge"
            alt="Sinantica FES GIF"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const LALATrAC: FC = () => {
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Image
            src="/2019-10/trac1.png"
            size="huge"
            alt="LALA TrAC Screenshot"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
const LALAVera: FC = () => {
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Image
            src="/2019-10/vera1.png"
            size="huge"
            alt="LALA VERA Screenshot"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Image
            src="/2019-10/vera2.png"
            size="huge"
            alt="LALA VERA Screenshot"
          />
        </Grid.Column>
      </Grid.Row>
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
        </Segment>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Image
            src="/2019-10/awesometemplates1.png"
            size="huge"
            alt="Awesome Templates Screenshot"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Image
            src="/2019-10/awesometemplates2.png"
            size="huge"
            alt="Awesome Templates Screenshot"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const Portfolio: NextPage = () => {
  const [active, setActive] = useRememberState(
    "portfolioMenu",
    awesomeTemplates,
    {
      SSR: true
    }
  );

  const MenuItem: FC<{ name: PortfolioOptions }> = ({ name }) => (
    <Menu.Item onClick={() => setActive(name)} active={active === name}>
      {name}
    </Menu.Item>
  );

  const ActiveItem = useMemo(() => {
    switch (active) {
      case sinanticaFES:
        return <SinanticaFES />;
      case lalaTrAC:
        return <LALATrAC />;
      case lalaVERA:
        return <LALAVera />;
      case awesomeTemplates:
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
        <Grid.Column width={3} textAlign="center">
          <Menu vertical inverted fluid>
            {Object.values(PortfolioOptions).map((name, key) => (
              <MenuItem name={name} key={key} />
            ))}
          </Menu>
        </Grid.Column>
        <Grid.Column width={13}>
          <Segment inverted>{ActiveItem}</Segment>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Portfolio;
