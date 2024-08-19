function trackPageView() {
    fetch('/api/analytics', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url: window.location.href,
            timestamp: new Date().toISOString()
        })
    }).then(response => response.json())
      .then(data => console.log('Analytics data sent:', data))
      .catch(error => console.error('Error sending analytics data:', error));
}

// Llamar a la función para capturar la vista de página cuando la página se carga
window.onload = trackPageView;