import { Box, BoxProps } from "./common";

export const Container = (props: BoxProps) => {
  return (
    <Box
      w="full"
      pb="12"
      pt="3"
      maxW={{ base: "xl", md: "7xl" }}
      mx="auto"
      px={{ base: "6", md: "8" }}
      {...props}
    />
  );
};
