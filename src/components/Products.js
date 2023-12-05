"use clients";
import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";

const Products = () => {
  // Example data for each grid item
  const products = [
    {
      imageSrc: "/imagelibur.png",
      date: "January 1, 2023",
      title: "Product 1",
      description: "Short description for Product 1",
    },
    {
      imageSrc: "/imagelibur.png",
      date: "February 1, 2023",
      title: "Product 2",
      description: "Short description for Product 2",
    },
    {
      imageSrc: "/imagelibur.png",
      date: "February 1, 2023",
      title: "Product 2",
      description: "Short description for Product 2",
    },
    {
      imageSrc: "/imagelibur.png",
      date: "February 1, 2023",
      title: "Product 2",
      description: "Short description for Product 2",
    },
    {
      imageSrc: "/imagelibur.png",
      date: "February 1, 2023",
      title: "Product 2",
      description: "Short description for Product 2",
    },
    {
      imageSrc: "/imagelibur.png",
      date: "February 1, 2023",
      title: "Product 2",
      description: "Short description for Product 2",
    },
    {
      imageSrc: "/imagelibur.png",
      date: "February 1, 2023",
      title: "Product 2",
      description: "Short description for Product 2",
    },
    {
      imageSrc: "/imagelibur.png",
      date: "February 1, 2023",
      title: "Product 2",
      description: "Short description for Product 2",
    },
    // Add more products as needed
  ];

  return (
    <Box p={5}>
      <Text
        fontFamily={"lora"}
        fontWeight={"bold"}
        fontSize={"36px"}
        pb={"10px"}
      >
        Popular Topics
      </Text>
      <SimpleGrid columns={4} spacing={4}>
        {products.map((product, index) => (
          <Box key={index} borderRadius="lg">
            <Image
              src={product.imageSrc}
              alt={`Product ${index + 1}`}
              mb={4}
              w={"310px"}
              h={"280px"}
            />
            <Text fontSize="sm" color="gray.500" mb={2}>
              {product.date}
            </Text>
            <Text fontWeight="bold" mb={2}>
              {product.title}
            </Text>
            <Text>{product.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;
