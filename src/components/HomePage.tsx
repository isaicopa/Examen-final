import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Container,
  Grid,
} from "@mui/material";
import MainLayout from "./layouts/MainLayout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

interface CategoryGroup {
  [category: string]: Product[];
}

const HomePage = () => {
  const [groupedProducts, setGroupedProducts] = useState<CategoryGroup>({});

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      const products: Product[] = res.data.products;
      const grouped: CategoryGroup = {};

      products.forEach((product) => {
        if (!grouped[product.category]) grouped[product.category] = [];
        grouped[product.category].push(product);
      });

      setGroupedProducts(grouped);
    });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 960,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <MainLayout>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Typography variant="h4" fontWeight="bold" mb={4}>
          Categorías
        </Typography>

        <Slider {...sliderSettings}>
          {Object.entries(groupedProducts).map(([category, products]) => (
            <Box key={category} px={1}>
              <Link href={`/categorias/${category}`} passHref legacyBehavior>
                <Card
                  sx={{
                    cursor: "pointer",
                    height: "100%",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <CardActionArea sx={{ p: 2 }}>
                    <CardContent>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        textTransform="capitalize"
                        gutterBottom
                      >
                        {category}
                      </Typography>
                      <Grid container spacing={1}>
                        {products.slice(0, 5).map((product) => (
                          <Grid item xs={3} key={product.id}>
                            <CardMedia
                              component="img"
                              image={product.thumbnail}
                              alt={product.title}
                              sx={{
                                width: "100%",
                                height: 80,
                                objectFit: "cover",
                                borderRadius: 1,
                              }}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Box>
          ))}
        </Slider>
      </Container>
    </MainLayout>
  );
};

export default HomePage;
