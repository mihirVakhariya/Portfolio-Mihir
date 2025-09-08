"use client";
import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  Input,
  SimpleGrid,
  Stack,
  Tag,
  TagLabel,
  Text,
  Textarea,
  VStack,
  Heading,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter, FaMedium } from "react-icons/fa6";
import { SiHashnode } from "react-icons/si";

const categories = ["Web Development", "Hiring", "Freelance", "Other"];

export default function ContactSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

 
 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, category: activeCategory }),
    });
    const data = await res.json();
    alert(data.message);
  } catch (err) {
    console.error(err);
    alert("Error sending message");
  }
};


  const cardBg = useColorModeValue("white", "gray.800");
  const chipActive = "pink";
  const chipInactive = "gray";

  return (
    <Center
      bgGradient="linear(to-r, #0B0B2B, #14143E)"
      color="white"
      py={{ base: 12, md: 20 }}
      px={6}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={16}
        width="100%"
        maxW="1200px"
      >
        {/* LEFT SIDE */}
        <VStack align="flex-start" spacing={10} maxW="lg">
  <Heading
    fontSize={{ base: "3xl", md: "5xl" }}
    fontWeight="extrabold"
    lineHeight="short"
  >
    Let&apos;s discuss{" "}
    <Text
      as="span"
      bgGradient="linear(to-r, pink.400, purple.400)"
      bgClip="text"
    >
      something awesome
    </Text>{" "}
    together
  </Heading>

  <VStack align="flex-start" spacing={5} fontSize="lg" fontWeight="medium">
    <HStack spacing={4}>
      <Center
        bg="pink.400"
        color="white"
        rounded="full"
        w={10}
        h={10}
        shadow="lg"
      >
        <Icon as={IoMail} boxSize={5} />
      </Center>
      <Link
        href="mailto:mihirvakhariya5@gmail.com"
        _hover={{ color: "pink.300", textDecoration: "underline" }}
      >
        mihirvakhariya5@gmail.com
      </Link>
    </HStack>
    <HStack spacing={4}>
      <Center
        bg="pink.400"
        color="white"
        rounded="full"
        w={10}
        h={10}
        shadow="lg"
      >
        <Icon as={IoLocationSharp} boxSize={5} />
      </Center>
      <Text>Nagpur, India</Text>
    </HStack>
  </VStack>

  <HStack spacing={5} pt={2}>
    {[
      { icon: FaGithub, href: "#" },
      { icon: FaInstagram, href: "#" },
      { icon: FaLinkedin, href: "#" },
      { icon: FaXTwitter, href: "#" },
      { icon: SiHashnode, href: "#" },
      { icon: FaMedium, href: "#" },
    ].map((item, idx) => (
      <Link key={idx} href={item.href} isExternal>
        <Center
          w={12}
          h={12}
          rounded="full"
          bg="whiteAlpha.100"
          backdropFilter="blur(10px)"
          transition="all 0.3s"
          _hover={{
            bg: "pink.400",
            color: "white",
            transform: "scale(1.15)",
            shadow: "xl",
          }}
        >
          <Icon as={item.icon} boxSize={6} />
        </Center>
      </Link>
    ))}
  </HStack>
</VStack>

        {/* RIGHT SIDE */}
    <Box
  bg="black"
  color="white"
  p={{ base: 8, md: 10 }}
  borderRadius="3xl"
  boxShadow="xl"
  border="1px solid"
  borderColor="whiteAlpha.200"
  transition="all 0.3s ease"
  _hover={{ transform: "translateY(-6px)", boxShadow: "2xl" }}
>
  <form onSubmit={handleSubmit}>
    <VStack align="stretch" spacing={6}>
      <Text
        fontWeight="extrabold"
        fontSize="xl"
        bgGradient="linear(to-r, pink.300, purple.400)"
        bgClip="text"
      >
        I&apos;m interested in...
      </Text>

      {/* Categories */}
      <HStack spacing={3} flexWrap="wrap">
        {categories.map((cat) => (
          <Tag
            key={cat}
            size="lg"
            variant={activeCategory === cat ? "solid" : "outline"}
            colorScheme={activeCategory === cat ? "pink" : "gray"}
            borderRadius="full"
            px={5}
            py={2}
            fontWeight="semibold"
            transition="all 0.2s"
            cursor="pointer"
            _hover={{ transform: "scale(1.05)", boxShadow: "md" }}
            onClick={() => setActiveCategory(cat)}
          >
            <TagLabel>{cat}</TagLabel>
          </Tag>
        ))}
      </HStack>

      {/* Name */}
      <Input
        placeholder="Enter Name *"
        name="name"
        value={form.name}
        onChange={handleChange}
        borderRadius="full"
        focusBorderColor="pink.400"
        fontWeight="medium"
        color="white"
        bg="gray.800"
        border="1px solid"
        borderColor="whiteAlpha.200"
        boxShadow="sm"
        _hover={{ borderColor: "pink.400" }}
        _placeholder={{ color: "gray.400" }}
        required
      />

      {/* Email */}
      <Input
        placeholder="Enter Email *"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        borderRadius="full"
        focusBorderColor="pink.400"
        fontWeight="medium"
        color="white"
        bg="gray.800"
        border="1px solid"
        borderColor="whiteAlpha.200"
        boxShadow="sm"
        _hover={{ borderColor: "pink.400" }}
        _placeholder={{ color: "gray.400" }}
        required
      />

      {/* Phone */}
      <Input
        placeholder="Enter Phone No."
        name="phone"
        value={form.phone}
        onChange={handleChange}
        borderRadius="full"
        focusBorderColor="pink.400"
        fontWeight="medium"
        color="white"
        bg="gray.800"
        border="1px solid"
        borderColor="whiteAlpha.200"
        boxShadow="sm"
        _hover={{ borderColor: "pink.400" }}
        _placeholder={{ color: "gray.400" }}
      />

      {/* Message */}
      <Textarea
        placeholder="Enter Message *"
        name="message"
        value={form.message}
        onChange={handleChange}
        borderRadius="xl"
        focusBorderColor="pink.400"
        fontWeight="medium"
        color="white"
        bg="gray.800"
        border="1px solid"
        borderColor="whiteAlpha.200"
        boxShadow="sm"
        _hover={{ borderColor: "pink.400" }}
        _placeholder={{ color: "gray.400" }}
        required
      />

      <Button
        type="submit"
        colorScheme="pink"
        size="lg"
        borderRadius="full"
        fontWeight="bold"
        shadow="lg"
        transition="all 0.3s"
        _hover={{
          transform: "scale(1.08)",
          shadow: "xl",
        }}
        _active={{ transform: "scale(0.98)" }}
      >
        🚀 Send Message
      </Button>
    </VStack>
  </form>
</Box>

      </SimpleGrid>
    </Center>
  );
}
