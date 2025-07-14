import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { ProductType } from "@/modules/producto/types/productTypes";

interface Props {
  producto: ProductType;
  onClick: (id: number) => void;
  onAddToCart: (producto: ProductType) => void;
}

const CardProducto2 = ({ producto, onClick, onAddToCart }: Props) => {
  const descuento = producto.discountPercentage;
  const precioOriginal = producto.price;
  const precioConDescuento = (precioOriginal * (1 - descuento / 100)).toFixed(
    2
  );

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: "0 2px 5px rgba(0,0,0,0.08)",
      }}
    >
      <CardActionArea onClick={() => onClick(producto.id)}>
        <CardMedia
          component="img"
          height="200"
          image={producto.thumbnail}
          alt={producto.title}
          sx={{ objectFit: "cover", p: 1, borderRadius: 2 }}
        />

        <CardContent sx={{ px: 2 }}>
          <Typography variant="body1" fontWeight="bold" gutterBottom noWrap>
            {producto.title}
          </Typography>

          {/* ⭐ Reseñas y calificación */}
          <Box display="flex" alignItems="center" mb={1}>
            <Rating
              value={producto.rating}
              precision={0.5}
              size="small"
              readOnly
            />
            <Typography variant="caption" ml={0.5}>
              {producto.rating.toFixed(1)} ({Math.floor(Math.random() * 10000)}
              +)
            </Typography>
          </Box>

          {/* 💰 Precio */}
          <Box mb={1}>
            {descuento > 0 ? (
              <>
                <Typography
                  variant="body1"
                  color="error"
                  fontWeight="bold"
                  component="span"
                >
                  ${precioConDescuento}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="span"
                  sx={{ textDecoration: "line-through", ml: 1 }}
                >
                  ${precioOriginal}
                </Typography>
                <Typography variant="caption" color="success.main" ml={1}>
                  Save {Math.round(descuento)}%
                </Typography>
              </>
            ) : (
              <Typography variant="body1" fontWeight="bold">
                ${precioOriginal}
              </Typography>
            )}
          </Box>

          {/* 🚚 Envío */}
          <Typography variant="body2" color="text.secondary">
            Delivery Tue, Jul 9
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Ships to Bolivia
          </Typography>
        </CardContent>
      </CardActionArea>

      {/* 🛒 Add to cart */}
      <Box px={2} pb={2} mt="auto">
        <Button
          variant="contained"
          color="warning"
          fullWidth
          onClick={() => onAddToCart(producto)}
        >
          Add to cart
        </Button>
      </Box>
    </Card>
  );
};

export default CardProducto2;
