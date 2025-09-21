fetch('http://localhost:3000/products/9', {  // Update product with id 9
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        price: 50,  // Updated price only
        isAvailable: false,  // Updated availability only
        description: {
            productDescription: "Enhanced dash cam with night vision",  // Updated description
            productFeatures: "4K Ultra HD, 256GB micro sd, GPS tracking"  // Updated features
        }
    })
})
    .then(response => response.json())
    .then(data => console.log('Updated product:', data))
    .catch(error => console.error('Error:', error));