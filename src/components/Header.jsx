"use client";
import { Flex, HStack, chakra, Box, Link as ChakraLink } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import MobileHeader from "./MobileHeader";
import { links } from "../utils/constants";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <chakra.header
      pos="sticky"
      top={0}
      zIndex={1000}
      w="100%"
      bg={scrolled ? "rgba(15,15,40,0.95)" : "rgba(15,15,40,0.7)"}
      backdropFilter="blur(12px)"
      boxShadow={scrolled ? "0 8px 25px rgba(0,0,0,0.3)" : "none"}
      transition="all 0.3s ease"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={6}
        py={4}
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <chakra.h1
          fontFamily="Righteous"
          fontSize={["xl", "2xl"]}
          bgGradient="linear(to-r, #FF0080, #A855F7, #00FFFF)"
          bgClip="text"
          _hover={{ filter: "drop-shadow(0 0 5px #FF0080)" }}
          transition="all 0.3s ease"
        >
          Mihir {"</>"}
        </chakra.h1>

        {/* Desktop Links */}
        <HStack spacing={8} display={{ base: "none", md: "flex" }} position="relative">
          {links.map((link, index) => {
            const isActive = pathname === link.path;
            return (
              <Box key={index} position="relative">
                <ChakraLink
                  href={link.path}
                  fontWeight="bold"
                  fontSize="md"
                  color={isActive ? "pink.400" : "white"}
                  _hover={{ color: "pink.400" }}
                  transition="color 0.3s ease"
                >
                  {link.text}
                </ChakraLink>
                {/* Sliding underline */}
                <Box
                  position="absolute"
                  bottom="-2px"
                  left={0}
                  width="100%"
                  height="2px"
                  bgGradient="linear(to-r, #FF0080, #A855F7)"
                  opacity={isActive ? 1 : 0}
                  transition="opacity 0.3s ease"
                  borderRadius="full"
                />
              </Box>
            );
          })}
        </HStack>

        {/* Mobile Menu */}
        <HStack display={{ base: "flex", md: "none" }}>
          <MobileHeader {...{ pathname }} />
        </HStack>
      </Flex>
    </chakra.header>
  );
}
