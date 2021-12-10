import { FC } from "react";
import { useWindowSize } from "react-use";
import { Container, Grid, Segment } from "semantic-ui-react";

import { Box } from "@chakra-ui/react";

export const TextSegment: FC = ({ children }) => {
  const { width } = useWindowSize(1920);
  return (
    <Grid.Row>
      <Box p={1}>
        <Segment padded={width > 630 ? (width > 800 ? "very" : true) : false}>
          <Container text textAlign="justified">
            {children}
          </Container>
        </Segment>
      </Box>
    </Grid.Row>
  );
};
