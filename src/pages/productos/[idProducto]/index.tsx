import MainLayout from "@/components/layouts/MainLayout";
import { useCarrito } from "@/hooks/useCarrito";
import { ProductType } from "@/modules/producto/types/productTypes";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  Rating,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const cantidades = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
];

const REFERENCE_LOW_STOCK = 5;

const DetalleProducto = () => {
  const router = useRouter();
  const { idProducto } = router.query;

  const [producto, setProducto] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(false);

  const [cantidad, setCantidad] = useState(1);

  const { agregarProducto } = useCarrito();

  useEffect(() => {
    if (!idProducto) return;
    setLoading(true);
    fetch(`https://dummyjson.com/products/${idProducto}`)
      .then((res) => res.json())
      .then((datos) => {
        setProducto(datos);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idProducto]);

  return (
    <MainLayout titulo="Detalle Producto">
      {loading && <div>Cargando producto...</div>}
      {!loading && producto && (
        <Grid container spacing={2} mt={2}>
          <Grid size={4}>
            <Box
              component={"img"}
              src={producto.thumbnail}
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid size={6}>
            <CardContent>
              <Typography variant="h6" fontWeight={"bold"}>
                {producto.title} - {producto.description}
              </Typography>
              <Rating
                name="read-only"
                value={producto.rating}
                precision={0.5}
                readOnly
                size="small"
              />
              <Typography variant="body2" color="text.secondary">
                {producto.shippingInformation}
              </Typography>
              <Typography variant="body2" color="primary.main">
                {producto.brand}
              </Typography>
              <Divider />
              <Typography variant="h4" fontWeight={"medium"}>
                ${producto.price}
              </Typography>
              {producto.stock <= REFERENCE_LOW_STOCK && (
                <Typography variant="body2" fontWeight={"medium"} color="error">
                  Only {producto.stock} left in stock - order soon
                </Typography>
              )}
              <Typography variant="body2">
                {producto.warrantyInformation}
              </Typography>
              <Grid container>
                <Grid size={6}>
                  <Typography variant="body2" fontWeight={"bold"}>
                    Height
                  </Typography>
                </Grid>
                <Grid size={6}>
                  <Typography variant="body2">
                    {producto.dimensions.height} in
                  </Typography>
                </Grid>
                <Grid size={6}>
                  <Typography variant="body2" fontWeight={"bold"}>
                    Width
                  </Typography>
                </Grid>
                <Grid size={6}>
                  <Typography variant="body2">
                    {producto.dimensions.width} in
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
              <Box>
                <Typography variant="subtitle1" fontWeight={"bold"}>
                  About this item
                </Typography>
                <Box component={"ul"}>
                  {producto.reviews.map((review, index) => (
                    <Typography key={index} component={"li"} variant="body2">
                      {review.comment}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Grid>
          <Grid size={2}>
            <Card
              variant="outlined"
              sx={{
                borderRadius: 2,
              }}
            >
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h4" fontWeight={"bold"}>
                    ${producto.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {producto.returnPolicy}
                  </Typography>
                  <Typography color="success" fontWeight={"bold"}>
                    {producto.availabilityStatus}
                  </Typography>
                  <FormControl fullWidth>
                    <Select
                      id="cantidadProducto"
                      size="small"
                      value={cantidad}
                      onChange={(e) => {
                        setCantidad(e.target.value as number);
                      }}
                    >
                      {cantidades.map((cantidad) => (
                        <MenuItem key={cantidad.value} value={cantidad.value}>
                          {cantidad.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      agregarProducto({
                        id: producto.id,
                        title: producto.title,
                        price: producto.price,
                        image: producto.thumbnail,
                        quantity: cantidad,
                      });
                    }}
                  >
                    Add to cart
                  </Button>
                  <Button variant="contained">Buy Now</Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </MainLayout>
  );
};

export default DetalleProducto;
