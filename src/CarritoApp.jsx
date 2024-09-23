import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { ComprasPage } from "./pages/ComprasPage";
import { CarritoPage } from "./pages/CarritoPage";
import { ProductosProvider } from "./context/ProductosProvider";
import { CarritoProvider } from "./context/CarritoProvider";

export const CarritoApp = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/compras" element={<ComprasPage />}></Route>
            <Route path="/carrito" element={<CarritoPage />}></Route>
            <Route path="/*" element={<Navigate to="" />}></Route>
          </Routes>
        </div>
      </CarritoProvider>
    </ProductosProvider>
  );
};
