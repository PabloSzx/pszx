import { NextPage } from "next";
import Head from "next/head";
import { FunctionComponent } from "react";
import { Box, Flex } from "rebass";
import { Menu } from "semantic-ui-react";
import { useRememberState } from "use-remember-state";

enum PortfolioOptions {
  sinanticaFES = "Sinantica FES",
  lalaTrAC = "Lala TrAC",
}

const { sinanticaFES, lalaTrAC } = PortfolioOptions;

const Portfolio: NextPage = () => {
  const [active, setActive] = useRememberState("portfolioMenu", sinanticaFES, {
    SSR: true,
  });

  const MenuItem: FunctionComponent<{ name: PortfolioOptions }> = ({
    name,
  }) => (
    <Menu.Item onClick={() => setActive(name)} active={active === name}>
      {name}
    </Menu.Item>
  );
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Flex>
        <Box>
          <Menu vertical inverted>
            <MenuItem name={sinanticaFES} />
            <MenuItem name={lalaTrAC} />
          </Menu>
        </Box>
        <Box>
          {(() => {
            switch (active) {
              case sinanticaFES:
                return <div>sinantica</div>;
              case lalaTrAC:
                return <div>lala trac</div>;
            }
          })()}
        </Box>
      </Flex>
    </>
  );
};

export default Portfolio;
