import { FC } from "react";
import { useWindowSize } from "react-use";
import { Container, Grid, Segment } from "semantic-ui-react";

export const TextSegment: FC = ({ children }) => {
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