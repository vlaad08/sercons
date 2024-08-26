import React from "react";
import "./styles/ServicesSection.css";

const services = [
  {
    title: "Construcții civile",
    description:
      "Oferim servicii complete de construcții civile, inclusiv clădiri rezidențiale și comerciale, de la proiectare până la finalizare.",
  },
  {
    title: "Construcții industriale",
    description:
      "Specializați în construcții industriale, realizăm proiecte de amploare, precum hale, fabrici și depozite, asigurând respectarea celor mai înalte standarde.",
  },
  {
    title: "Amenajări",
    description:
      "Servicii de amenajare interioară și exterioară pentru a transforma spațiul dvs. într-un mediu funcțional și estetic plăcut.",
  },
];

const ServicesSection = () => {
  return (
    <div className="servicesSection" id="services">
      <h2>Serviciile noastre</h2>
      <div className="servicesList">
        {services.map((service, index) => (
          <div key={index} className="serviceItem">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
