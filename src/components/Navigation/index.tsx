import Link from "next/link";
import { NextRouter, withRouter } from "next/router";
import { FunctionComponent } from "react";
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
    <Segment inverted>
      <Image avatar src="/static/avatar.png" />
      <Menu inverted secondary>
        <MenuItem pathname="/" name="Home" />
        <MenuItem pathname="/portfolio" name="Portfolio" />
      </Menu>
    </Segment>
  );
};

export default withRouter(Navigation);
