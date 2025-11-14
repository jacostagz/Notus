"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  /* Datos del carrusel */
  const items = [
    { titleSmall: "Vehículos eléctricos", titleBig: "El futuro eléctrico de Chevrolet.", img: "/carro1.jpg" },
    { titleSmall: "OnStar", titleBig: "Todo para que estés protegido y conectado.", img: "/carro2.jpg" },
    { titleSmall: "Club Selective", titleBig: "Un mundo de experiencias y beneficios especiales.", img: "/carro3.jpg" },
    { titleSmall: "OnStar Buses y Camiones", titleBig: "Para los retos del camino la Tecnología OnStar.", img: "/carro4.jpg" },
    { titleSmall: "Camionetas", titleBig: "La potencia ideal para cualquier terreno.", img: "/carro5.jpg" },
    { titleSmall: "SUV", titleBig: "Tecnología y espacio para toda tu familia.", img: "/carro6.jpg" },
    { titleSmall: "Chevrolet Spark", titleBig: "Compacto y listo para la ciudad.", img: "/Spark.png" },
    { titleSmall: "Picanto Style", titleBig: "Agilidad y diseño moderno.", img: "/Picanto.png" },
    { titleSmall: "Fiesta Sport", titleBig: "Diversión con gran desempeño.", img: "/Fiesta.png" },
    { titleSmall: "Tecnología avanzada", titleBig: "Innovación en cada detalle.", img: "/carro7.jpg" },
    { titleSmall: "Máximo confort", titleBig: "Viaja con la máxima comodidad.", img: "/carro8.jpg" },
    { titleSmall: "Diseño premium", titleBig: "Elegancia y calidad.", img: "/carro9.jpg" },
  ];

  /* Autoslide del carrusel */
  const cardsPerView = 4;
  const totalViews = Math.ceil(items.length / cardsPerView);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalViews);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalViews]);

  /* Datos del comprador */
  const compareTitle = "¿Qué vehículo es mejor para ti?";
  const compareSubtitle = "Compara características clave y elige el que más se adapte a tus necesidades.";

  const models = [
    {
      id: "m1",
      name: "Modelo 1",
      price: "Desde: $XX.XXX.XXX",
      badge: "Nuevo",
      image: "/modelo1.jpg",
      colors: ["#E5E7EB", "#93C5FD", "#111827"],
      specs: {
        Motor: "2.0L Turbo",
        Potencia: "220 hp",
        Autonomia: "420 km (WLTP)",
        Consumo: "6.5 L/100km",
        Maletero: "450 L",
      },
    },
    {
      id: "m2",
      name: "Modelo 2",
      price: "Desde: $YY.YYY.YYY",
      badge: "Mejor valor",
      image: "/modelo2.jpg",
      colors: ["#FDE68A", "#FCA5A5", "#111827"],
      specs: {
        Motor: "1.8L Hybrid",
        Potencia: "185 hp",
        Autonomia: "520 km (combinado)",
        Consumo: "4.2 L/100km",
        Maletero: "380 L",
      },
    },
    {
      id: "m3",
      name: "Modelo 3",
      price: "Desde: $ZZ.ZZZ.ZZZ",
      badge: "Económico",
      image: "/modelo3.jpg",
      colors: ["#C7F9C0", "#BFDBFE", "#111827"],
      specs: {
        Motor: "1.5L Turbo",
        Potencia: "150 hp",
        Autonomia: "360 km (WLTP)",
        Consumo: "5.5 L/100km",
        Maletero: "420 L",
      },
    },
  ];

  const specRows = [
    { key: "Motor", label: "Motor" },
    { key: "Potencia", label: "Potencia" },
    { key: "Autonomia", label: "Autonomía" },
    { key: "Consumo", label: "Consumo" },
    { key: "Maletero", label: "Capacidad de maletero" },
  ];

  return (
    <>
      <Navbar />
      <main className="relative pt-[var(--navbar-height)]">

        {/* Introducción del video*/}
        <section className="w-full h-[calc(100vh-var(--navbar-height))] relative">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            preload="auto"
            poster="/video-poster.jpg"
            playsInline
          >
            <source src="/Video.mp4" type="video/mp4" />
          </video>
        </section>

        {/* Contenedor con imagen Toyota */}
        <section className="w-full h-[90vh] bg-black flex items-center justify-center">
          <div className="w-3/4 h-4/5 bg-gray-800 rounded-3xl flex overflow-hidden shadow-lg">
            <div className="w-1/2 bg-gray-300" />
            <div className="w-1/2 flex items-center justify-center bg-gray-700">
              <img
                src="/Toyota.jpg"
                alt="Toyota"
                className="w-full h-full object-cover object-[38%]"
              />
            </div>
          </div>
        </section>

        {/* Carrusel */}
        
        <section className="w-full bg-black flex flex-col items-center justify-center py-3">
          <h2 className="text-3xl font-bold mb-12 text-white">Conoce más</h2>

          <div className="relative w-3/4 overflow-hidden">
            <div
              className="flex transition-transform duration-[1200ms] ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {items.map((card, i) => (
                <div key={i} className="min-w-[25%] px-4 flex flex-col">
                  <div className="w-full h-[430px] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                    <img src={card.img} alt={card.titleBig} className="w-full h-full object-cover" />
                  </div>
                  <p className="mt-4 text-sm text-gray-400">{card.titleSmall}</p>
                  <h3 className="font-bold text-xl text-white">{card.titleBig}</h3>
                  <button className="mt-3 text-blue-400 font-semibold hover:underline flex items-center gap-1">
                    Conocer más →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* puntos */}
          <div className="flex gap-3 mt-5">
            {Array.from({ length: totalViews }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index ? "bg-blue-400 scale-125" : "bg-gray-500"
                }`}
              ></div>
            ))}
          </div>
        </section>

        {/* Comparador profesional */}
        <section className="w-full bg-black text-gray-900 py-20">
          <div className="w-3/4 mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl text-white font-bold">{compareTitle}</h2>
              <p className="text-white mt-2">{compareSubtitle}</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-4 gap-0 items-stretch">
                {/* Labels */}
                <div className="px-6 py-6 border-r border-gray-100 bg-white">
                  <div className="h-full flex flex-col gap-4">
                    <div />
                    <div className="text-sm text-gray-500">Comparar</div>
                    <div className="text-sm text-gray-500">Especificaciones</div>
                    <div className="text-sm text-gray-500">Rendimiento</div>
                    <div className="text-sm text-gray-500">Autonomía</div>
                  </div>
                </div>

                {/* Modelos */}
                {models.map((m) => (
                  <div key={m.id} className="px-6 py-6 border-r border-gray-100 bg-white">
                    <div className="flex flex-col items-center text-center">
                      <span className="text-sm text-gray-500">Modelo</span>
                      <h3 className="mt-1 text-lg font-bold">{m.name}</h3>
                      <div className="mt-1 text-sm text-gray-600">{m.price}</div>

                      {m.badge && (
                        <div className="mt-2 inline-block bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">
                          {m.badge}
                        </div>
                      )}

                      <div className="mt-3 flex gap-3">
                        <button className="px-3 py-1 text-xs border border-gray-200 rounded-md hover:bg-gray-50">
                          Comprar
                        </button>
                        <button className="px-3 py-1 text-xs text-blue-600 font-semibold hover:underline">
                          Más información
                        </button>
                      </div>

                      <div className="mt-4 w-full h-44 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                        <img src={m.image} alt={m.name} className="w-full h-full object-contain" />
                      </div>

                      <div className="mt-3 flex items-center gap-2">
                        {m.colors.map((c, i) => (
                          <span key={i} style={{ background: c }} className="w-4 h-4 rounded-full border" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="divide-y divide-gray-100">
                {specRows.map((row) => (
                  <div key={row.key} className="grid grid-cols-4 items-center px-6 py-6">
                    <div className="text-sm text-gray-600">{row.label}</div>
                    {models.map((m) => (
                      <div key={m.id + row.key} className="text-sm text-gray-800">
                        {m.specs[row.key as keyof typeof m.specs]}
                      </div>
                    ))}
                  </div>
                ))}

                {/* Resumen */}
                <div className="grid grid-cols-4 items-center px-6 py-6 bg-gray-50">
                  <div className="text-sm font-medium text-gray-700">Resumen</div>

                  <div className="text-sm text-gray-800">
                    <strong>{models[0].name}</strong>
                    <div className="text-xs text-gray-500 mt-1">Ideal para quienes buscan potencia.</div>
                  </div>

                  <div className="text-sm text-gray-800">
                    <strong>{models[1].name}</strong>
                    <div className="text-xs text-gray-500 mt-1">Mejor equilibrio autonomía/precio.</div>
                  </div>

                  <div className="text-sm text-gray-800">
                    <strong>{models[2].name}</strong>
                    <div className="text-xs text-gray-500 mt-1">Más económico y urbano.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-white text-center">
              Información mostrada a modo de ejemplo. Reemplaza las imágenes y datos por los reales.
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-auto bg-white text-gray-300 pt-26 pb-28">
          <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-black">

            {/* Productos */}
            <div>
              <h4 className="text-black font-semibold mb-4">Productos</h4>
              <ul className="text-gray-500 space-y-2 text-sm">
                <li>Compra y aprende</li>
                <li>Socio</li>
                <li>Operador</li>
                <li>Estilo de vida</li>
              </ul>
            </div>

            {/* Soporte */}
            <div>
              <h4 className="text-black font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Dónde comprar</li>
                <li>Centro de servicio</li>
                <li>Términos y condiciones</li>
                <li>Llámanos: 018005191116</li>
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="text-black font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Acerca de nosotros</li>
                <li>Equipo Directivo</li>
                <li>Política de privacidad</li>
                <li>Sustentabilidad</li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="text-black font-semibold mb-4">Contacto</h4>
              <ul className="text-gray-500 space-y-2 text-sm">
                <li>Correo electrónico</li>
                <li>Servicio de soporte</li>
                <li>Chat en directo</li>
                <li>018005191116</li>
                <li>Lunes-Viernes: 9:00-18:00</li>
              </ul>

              <h4 className="text-black font-semibold mt-6">Síguenos</h4>
              <div className="text-black flex gap-4 mt-3 text-lg">
                <FaFacebookF />
                <FaInstagram />
                <FaYoutube />
                <FaXTwitter />
              </div>
            </div>

            {/* Idioma*/}
            <div>
              <h4 className="text-black font-semibold mb-4">Descargando la app</h4>
              <p className="text-gray-500 text-sm">
                ¡Descarga la app cuando esté disponible!
              </p>

              <div className="w-32 h-32 bg-white mt-4 rounded-xl"></div>

              <p className="text-xs mt-4 text-black">Disponible en Google Play</p>

              <h4 className="text-white font-semibold mt-6">Idioma</h4>
              <select className="bg-white border border-gray-700 text-sm mt-2 px-3 py-2 rounded-lg w-full">
                <option>Colombia / Español</option>
              </select>
            </div>

          </div>

          <div className="w-3/4 mx-auto border-t border-gray-700 mt-10 pt-6 text-sm text-black">
            <div className="flex flex-col md:flex-row justify-between">
              <p>Copyright © 2025 Notus Automotive. Todos los derechos reservados</p>

              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#">Ajustes de Cookies</a>
                <a href="#">Política de cookies</a>
                <a href="#">Mapa del sitio</a>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}
