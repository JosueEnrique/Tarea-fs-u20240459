const fs = require("fs");
const fileName = "estudiantes.json";

const estudiantes = [
  { nombre: "Juan", edad: 18, carrera: "Ingeniería" },
  { nombre: "Ana", edad: 20, carrera: "Medicina" },
  { nombre: "Fran", edad: 19, carrera: "Arquitectura" }
];

fs.writeFile(fileName, JSON.stringify(estudiantes), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("El archivo JSON fue creado exitosamente.");
});
