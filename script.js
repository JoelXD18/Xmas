// Obtener la IP usando una API pública
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        // Mostrar la IP en el elemento HTML
        document.getElementById('ip').textContent = `Tu IP es: ${data.ip}`;
    })
    .catch(error => {
        console.error('Error al obtener la IP:', error);
        document.getElementById('ip').textContent = 'No se pudo obtener la IP.';
    });
