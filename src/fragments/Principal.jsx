import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import ChangingProgressProvider from "./ChangingProgressProvider";
import "react-circular-progressbar/dist/styles.css";
import "../css/Principal_Style.css";
import Footer from "./Footer";

const Principal = () => {
  const [espData, setEspData] = useState({
    humedadSuelo: null,
    temperatura: null,
    humedadRelativa: null,
    nivelAgua: null,
    ph: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5006/api/fetch-datos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });
        if (!response.ok) {
          throw new Error("Error al obtener los datos del backend");
        }

        const jsonResponse = await response.json();
        setEspData(jsonResponse.data);
      } catch (error) {
        console.error("Error al obtener los datos desde el backend:", error);
      }
    };

    const interval = setInterval(fetchData, 2000); // Actualiza cada 2 segundos para datos en tiempo real
    return () => clearInterval(interval);
  }, []);

  const variables = [
    {
      nombre: "Humedad del Suelo",
      valor: espData.humedadSuelo,
      unidad: "%",
      color: "#FFAF00",
      img: "/img/humedad(1).png",
      advertencia:
        espData.humedadSuelo < 30
          ? { mensaje: "Humedad baja", color: "#FF0000" }
          : { mensaje: "Humedad óptima", color: "#00BFFF" },
    },
    {
      nombre: "Temperatura",
      valor: espData.temperatura,
      unidad: "°C",
      color: "#FF204E",
      img: "/img/temperatura(1).png",
      advertencia:
        espData.temperatura > 35
          ? { mensaje: "¡Temperatura alta!", color: "#FF0000" }
          : espData.temperatura < 15
            ? { mensaje: "Temperatura baja", color: "#A35C7A" }
            : { mensaje: "Temperatura adecuada", color: "#00BFFF" },
    },
    {
      nombre: "Humedad Relativa",
      valor: espData.humedadRelativa,
      unidad: "%",
      color: "#9BEC00",
      img: "/img/humedad(1).png",
      advertencia: {
        mensaje: "Nivel normal",
        color: "#00BFFF",
      },
    },
    {
      nombre: "Nivel de Agua",
      valor: espData.nivelAgua,
      unidad: "%",
      color: "#0078FF",
      img: "/img/nivel-del-agua.png",
      advertencia: {
        mensaje: "Nivel adecuado",
        color: "#00BFFF",
      },
    },
    {
      nombre: "pH del Agua",
      valor: espData.ph,
      unidad: "",
      color: "#B800FF",
      img: "/img/ph.png",
      advertencia: {
        mensaje: "pH adecuado",
        color: "#00BFFF",
      },
    },
  ];
  
  return (
    <div>
      <Navbar />
      <div className="main-container">
        {variables.map((variable, index) => (
          <div className="variable-container" key={index}>
            <h3 className="variable-title">{variable.nombre}</h3>
            <div className="content-row">
              <div className="progress-bar">
                <ChangingProgressProvider values={[variable.valor || 0, variable.valor || 0]}>
                  {(value) => (
                    <CircularProgressbar
                      value={value}
                      text={`${value || 0}${variable.unidad}`}
                      circleRatio={0.75}
                      styles={buildStyles({
                        rotation: 1 / 2 + 1 / 8,
                        pathColor: variable.color,
                        textColor: variable.color,
                        trailColor: "#d6d6d6",
                        strokeLinecap: "round",
                      })}
                    />
                  )}
                </ChangingProgressProvider>
              </div>
              <div className="info-container">
                <div className="image-container">
                  <img
                    src={variable.img}
                    alt={variable.nombre}
                    className="variable-img"
                  />
                </div>
                <p className="variable-value">
                  Valor Actual: {variable.valor !== null && variable.valor !== undefined ? variable.valor : "Cargando..."}
                  {variable.unidad}
                </p>

                <p
                  className="warning-text"
                  style={{ color: variable.advertencia.color }}
                >
                  {variable.advertencia.mensaje}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Principal;
