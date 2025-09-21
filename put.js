fetch('http://localhost:3000/products/9', {  // Update product with id 4
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: 9,  // Include the id (good practice)
        productName: "Dash Cam new version",  // Updated name
        category: "electronics",
        brand: "DashCam company",
        price: 45,  // Updated price
        isAvailable: true,  // Updated availability
        description: {
            productDescription: "High quality video with this new version",
            productFeatures: "Full HD micro sd 128GB"
        }
    })
})
    .then(response => response.json())
    .then(data => console.log('Updated product:', data))
    .catch(error => console.error('Error:', error));