fetch('http://localhost:3000/products/9', {  // Delete product with id 9
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
    // No body needed for DELETE requests
})
    .then(response => {
        if (response.ok) {
            return response.json();  // or response.text() if server returns plain text
        }
        throw new Error(`HTTP error! status: ${response.status}`);
    })
    .then(data => console.log('Deleted product:', data))
    .catch(error => console.error('Error:', error));
