import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { Button } from "@chakra-ui/react";
import { Container, Stack } from ".";

export const CTA = () => (
  <Container
    flexDirection={["unset", "row", "row", "row"]}
    width="100%"
    maxWidth="48rem"
    py={3}
  >
    <Stack
      mt="10"
      spacing="4"
      justify="center"
      direction={{ base: "column", sm: "row" }}
    >
      <Link to="/issues">
        <Button
          h="4rem"
          px="40px"
          fontSize="1.2rem"
          as="a"
          size="lg"
          bg="teal.200"
          rightIcon={<FaArrowRight fontSize="0.8em" />}
        >
          Get Started
        </Button>
      </Link>

      <Button
        as="a"
        size="lg"
        h="4rem"
        px="40px"
        fontSize="1.2rem"
        href="https://github.com/wattanx/github-issues-view"
        target="__blank"
        leftIcon={<DiGithubBadge size="1.5em" />}
      >
        GitHub
      </Button>
    </Stack>
  </Container>
);
