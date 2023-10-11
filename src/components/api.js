import React, { useEffect, useState } from 'react';

function Api() {
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    // Función para obtener datos de la API
    function fetchEmployeeData() {
      fetch('http://localhost:5000/api/employees')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Actualiza el estado con los datos recibos de la API
          setEmployeeData(data);
        })
        .catch(error => {
          console.error('Hubo un error al recuperar los datos:', error);
        });
    }

    // Llama a la función para obtener datos cuando se monta el componente
    fetchEmployeeData();
  }, []);

  return (
    <div>
      <h2>Detalles del empleado</h2>
      {employeeData ? (
        <div>
          <p>Nombre: {employeeData.name}</p>
          <p>Email: {employeeData.email}</p>
          {/* Agrega más campos según la estructura de tus datos */}
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default Api;