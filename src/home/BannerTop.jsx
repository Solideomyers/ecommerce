import React, { useEffect, useMemo, useState } from "react";

export const BannerTop = () => {
  // mensajes automaticos de prueba
  const prompter = useMemo(
    () => [
      "ENVIOS GRATUITOS",
      "FINANCIA TU COMPRA EN CÓMODOS PLAZOS",
      "OPCIÓN DE SUBIDA Y MONTAJE EN SU DOMICILIO",
      "PRODUCTOS FABRICADOS EN ESPAÑA",
      "FABRICACIÓN PROPIA, MUEBLES HECHOS A MANO",
      "MUEBLES YA MONTADOS Y LISTOS",
      "GARANTÍA CON LA MEJOR SOLUCIÓN PARA TI EN 24 H",
      "ENVIOS EXPRESS CON ENTREGA 24 HORAS",
    ],
    []
  );

  // implementacion de un useEffect para
  // la animacion de transicionar los mensajes
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % prompter.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [index, prompter.length]);

  return (
    <div className="mt-2 mb-0">
      <div className="section-banner-top text-center">
        {" "}
        {prompter.map((text, i) => (
          <span
            key={i}
            className={`${i === index ? "d-block" : "d-none"} cate-icon-banner`}
          >
            <i className="icofont-info-circle"></i>

            {text.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
};
