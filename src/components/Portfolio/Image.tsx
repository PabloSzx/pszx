import { FC } from "react";
import { Grid, Image } from "semantic-ui-react";

export const PortfolioImage: FC<{ src: string; alt: string }> = ({
  src,
  alt,
}) => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Image
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
          src={src}
          alt={alt}
        />
      </Grid.Column>
    </Grid.Row>
  );
};

export const PortfolioVideo: FC<{ src: string }> = ({ src }) => {
  return (
    <Grid.Row>
      <Grid.Column>
        <video height="100%" width="100%" src={src} autoPlay muted loop />
      </Grid.Column>
    </Grid.Row>
  );
};
