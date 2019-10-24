import Link from "next/link";
import { NextRouter, withRouter } from "next/router";
import { FunctionComponent } from "react";
import { Box, Flex } from "rebass";
import { Image, Menu, Segment } from "semantic-ui-react";

const Navigation: FunctionComponent<{ router: NextRouter }> = ({ router }) => {
  const MenuItem: FunctionComponent<{ pathname: string; name: string }> = ({
    pathname,
    name,
  }) => (
    <Link href={pathname}>
      <Menu.Item name={pathname} active={pathname === router.pathname}>
        {name}
      </Menu.Item>
    </Link>
  );

  return (
    <Segment inverted style={{ margin: 0, width: "100%" }}>
      <Flex alignItems="center" height="30px">
        <Box width={1 / 12}></Box>
        <Box>
          <Link href="/">
            <Image
              href="/"
              className="cursorHover"
              size="tiny"
              src="/avatar.png"
            />
          </Link>
        </Box>
        <Box width={1 / 18}></Box>
        <Box>
          <Menu inverted secondary fluid size="massive">
            <MenuItem pathname="/" name="Home" />
            <MenuItem pathname="/portfolio" name="Portfolio" />
          </Menu>
        </Box>
      </Flex>
    </Segment>
  );
};

export default withRouter(Navigation);
