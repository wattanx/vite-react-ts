import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, CTA, Hero, Box } from "../components";
export const Home: React.FC = () => {
  return (
    <Container height="100vh">
      <Box as="section" pt="6rem" pb={{ base: "0", md: "5rem" }}>
        <Box textAlign="center">
          <Hero />
        </Box>
      </Box>

      <CTA />
    </Container>
  );
};
