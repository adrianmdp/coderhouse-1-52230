// http://www.misitio.com

// Endpoints

// GET      /api/usuarios       // Obtener usuarios
// POST     /api/usuarios       // Crear un usuario
// DELETE   /api/usuarios/:id   // Borrar un usuario
// PUT      /api/usuarios/:id   // Actualizar un usuario (reemplazar)
// PATCH    /api/usuarios/:id   // Actualizar un usuario (modificar parcialmente)

// GET      /api/compras                    // Obtener compras
// GET      /api/compras/:id/collaborator   // Obtener compras
// POST     /api/compras                    // Crear un compras
// DELETE   /api/compras/:id                // Borrar un compras
// PUT      /api/compras/:id                // Actualizar un compras (reemplazar)
// PATCH    /api/compras/:id                // Actualizar un compras (modificar parcialmente)

// http://www.misitio.com/api/usuarios/123ABC345?locale=ES.es
// http://www.api.libros.com/novedades?minprice=100&maxprice=200&category=terror&category=ciencia-ficcion

const getUsers = async () => {
  const response = await fetch(
    "http://www.misitio.com/api/usuarios?locale=EN.en&scope=test"
  ); // Por defecto es GET
  const data = await response.json();
  return data;
};

const getUser = async (id) => {
  const response = await fetch(
    `http://www.misitio.com/api/usuarios/${id}?locale=ES.es`
  ); // Por defecto es GET

  const data = await response.json();
  return data;
};

const addUser = async (user) => {
  const options = {
    method: "POST",
    data: user,
    headers: {},
  };

  const response = await fetch("http://www.misitio.com/api/usuarios", options); // POST
  const data = await response.json();
  return data;
};

fetch("http://www.misitio.com/api/usuarios?locale=EN.en&scope=test")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
