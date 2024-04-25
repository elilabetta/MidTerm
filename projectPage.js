async function cargarArchivoJSON() {
      const response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");
      if (!response.ok) {
        throw new Error("Error to upload JSON");
      }
      const midterm= await response.json();
      // Obtener el elemento donde se mostrarán los datos
      const firstsection = document.getElementById("first-section");

      firstsection.innerHTML = `
      <h1>${midterm[3].name}</h1>
      <div>
        <p>UI Design & App Development</p>
        <p>Completed on: ${midterm[3].completed_on}</p>
      </div>
      <img class="image" src="${midterm[3].image}" alt="" />
      <p${midterm[3].content}></p>
      `

       // Iterar sobre los personajes del objeto JSON y crear filas en la tabla
       /*
    midterm.forEach((lugar) => {
        // Crear una nueva fila
        const row = document.createElement("tr");
        // Llenar la fila con datos de cada lugar
        row.innerHTML = `
            <td>${lugar.nombre}</td>
            <td>${lugar.mitologia}</td>
            <td>${lugar.descripcion}</td>
            <td>${lugar.primera_aparicion}</td>
          `;
        // Agregar la fila a la tabla
        tablapersonajes.appendChild(row);
      });
    } catch (error) {
      console.error("Error:", error);
    }
    */
  }
  
  
  cargarArchivoJSON();
  
