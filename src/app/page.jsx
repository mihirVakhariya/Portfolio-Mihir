"use client";
import { useEffect, useRef, useCallback } from "react";
import { Heading, Flex, Center, Image, Box } from "@chakra-ui/react";
import Typed from "typed.js";
import SocialIcons from "../components/SocialIcons";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "../particlesjs.json";
import { RevealWrapper } from "next-reveal";

export default function Home() {
  const typedTextRef = useRef(null);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const options = {
      strings: [
        "Digital Marketer",
        "Business Development Professional",
        "SEO Specialist",
        "Brand Growth Strategist"
      ],
      typeSpeed: 50,
      backSpeed: 35,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);
    return () => typed.destroy();
  }, []);

  return (
    <Box position="relative" height="100vh" width="100vw" overflow="hidden">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleConfig}
        style={{ position: "absolute", top: 0, left: 0 }}
      />

      {/* Content */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="100%"
        width="100%"
        zIndex={1}
        position="relative"
        px={4}
        textAlign="center"
      >
        {/* Profile Image */}
        <RevealWrapper delay={300}>
          <Image
            src="/images/mihir-profile.png"
            alt="profile"
            boxSize={["12rem", "14rem", "16rem"]}
            borderRadius="full"
            objectFit="cover"
            boxShadow="xl"
            mb={6}
            border="4px solid rgba(255,255,255,0.2)"
          />
        </RevealWrapper>

        {/* Intro Text */}
        <RevealWrapper delay={400}>
          <Heading
            size="md"
            color="gray.200"
            fontFamily="Righteous"
            mb={2}
          >
            Hi, my name is
          </Heading>
        </RevealWrapper>

        {/* Name */}
        <RevealWrapper delay={500}>
          <Flex direction={["column", "row"]} align="center" mb={4}>
            <Heading
              fontFamily="Black Ops One"
              fontSize={["2.5rem", "3.5rem", "4rem"]}
              bgGradient="linear(to-r, pink.400, purple.400)"
              bgClip="text"
            >
              Mihir
            </Heading>
            <Heading
              fontFamily="Black Ops One"
              fontSize={["2.5rem", "3.5rem", "4rem"]}
              bgGradient="linear(to-r, pink.400, purple.400)"
              bgClip="text"
              ml={[0, 3]}
            >
              Vakhariya
            </Heading>
          </Flex>
        </RevealWrapper>

        {/* Typed Text */}
        <RevealWrapper delay={600}>
          <Heading
            size="lg"
            fontFamily="Righteous"
            color="gray.300"
            mb={6}
          >
            I&apos;m <span ref={typedTextRef} className="typed-text"></span>
          </Heading>
        </RevealWrapper>

        {/* Social Icons */}
        <RevealWrapper delay={700}>
          <SocialIcons />
        </RevealWrapper>
      </Flex>
    </Box>
  );
}
