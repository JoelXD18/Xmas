// 1. Obtener la dirección IP
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                document.getElementById('ip').textContent = data.ip;
            })
            .catch(() => {
                document.getElementById('ip').textContent = 'No disponible';
            });

        // 2. Obtener el código postal
        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                document.getElementById('postal-code').textContent = data.postal || 'No disponible';
            })
            .catch(() => {
                document.getElementById('postal-code').textContent = 'No disponible';
            });

        // 3. Nombre y versión del navegador
        document.getElementById('browser').textContent = navigator.userAgent;

        // 4. Sistema operativo
        document.getElementById('os').textContent = navigator.userAgent;

        // 5. Plataforma
        document.getElementById('platform').textContent = navigator.platform;

        // 6. Tipo de conexión
        const connection = navigator.connection || {};
        document.getElementById('connection').textContent = connection.effectiveType || 'No disponible';

        // 7 y 8. Nivel de batería y estado de carga
        if ('getBattery' in navigator) {
            navigator.getBattery().then(battery => {
                document.getElementById('battery-level').textContent = `${Math.round(battery.level * 100)}%`;
                document.getElementById('battery-status').textContent = battery.charging ? 'Cargando' : 'Descargando';
            });
        } else {
            document.getElementById('battery-level').textContent = 'No disponible';
            document.getElementById('battery-status').textContent = 'No disponible';
        }

        // 9. Latitud y longitud
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude, accuracy } = position.coords;
                    document.getElementById('location').textContent = 
                        `Latitud: ${latitude}, Longitud: ${longitude}, Precisión: ${accuracy} metros`;
                },
                error => {
                    document.getElementById('location').textContent = 'No disponible (Permiso denegado)';
                }
            );
        } else {
            document.getElementById('location').textContent = 'No disponible';
        }
