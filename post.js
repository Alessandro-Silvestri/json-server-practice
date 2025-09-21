fetch('http://localhost:3000/products', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
         "productName" : "15Dash Cam",
            "category" : "15electronics",
            "brand" : "15DashCam company",
            "price" : 37,
            "isAvailable" : false,
            "description":{
                "productDescription" : "High quality video",
                "productFeatures" : "Full HD micro sd 64GB"}
    })
})
