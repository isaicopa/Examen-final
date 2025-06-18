import { useRouter } from "next/router";
import React from "react";

const DetalleProducto = () => {
  const router = useRouter();
  const { idProducto } = router.query;

  return <div>DetalleProducto {idProducto}</div>;
};

export default DetalleProducto;
