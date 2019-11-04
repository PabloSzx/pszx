import { FC } from "react";
import { Grid, Image } from "semantic-ui-react";

export const PortfolioImage: FC<{ src: string; alt: string }> = ({
  src,
  alt,
}) => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Image src={src} alt={alt} />
      </Grid.Column>
    </Grid.Row>
  );
};
