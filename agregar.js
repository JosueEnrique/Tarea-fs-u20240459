const fs = require("fs");
const fileName = "estudiantes.json";
const nuevoEstudiante = { nombre: "Carlos", edad: 22, carrera: "Derecho" };

fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const estudiantes = JSON.parse(data);

  estudiantes.push(nuevoEstudiante);

  fs.writeFile(fileName, JSON.stringify(estudiantes), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("El nuevo estudiante fue agregado exitosamente.");
  });
});
