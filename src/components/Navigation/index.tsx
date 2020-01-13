import Link from "next/link";
import { useRouter } from "next/router";
import { FC, FunctionComponent } from "react";
import { Image, Menu, Segment } from "semantic-ui-react";
import styled from "styled-components";

import { Box, Flex } from "@chakra-ui/core";

const StyledSegment = styled(Segment)`
  margin: 0;
  width: 100%;
`;

const Navigation: FC = () => {
  const { push, pathname: routerPathname } = useRouter();

  const MenuItem: FunctionComponent<{ pathname: string; name: string }> = ({
    pathname,
    name
  }) => (
    <Link href={pathname}>
      <Menu.Item name={pathname} active={pathname === routerPathname}>
        {name}
      </Menu.Item>
    </Link>
  );

  return (
    <StyledSegment inverted>
      <Flex alignItems="center" height="30px">
        <Box width={1 / 12} />
        <Box width={[1 / 5, "auto"]}>
          <Image
            className="cursorHover"
            size="tiny"
            src="/avatar.png"
            onClick={() => push("/")}
          />
        </Box>
        <Box width={1 / 18}></Box>
        <Box>
          <Menu inverted secondary fluid size="massive">
            <MenuItem pathname="/" name="Home" />
            <MenuItem pathname="/portfolio" name="Portfolio" />
          </Menu>
        </Box>
      </Flex>
    </StyledSegment>
  );
};

export default Navigation;
