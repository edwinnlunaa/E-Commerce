fetch('essentials.json')
  .then(response => response.json())
  .then(data => {
    // Iterate over each product in the JSON array
    data.forEach(product => {
      // Access each property of the product
      const img = product.img;
      const name = product.name;
      const price = product.price;
      const description = product.description;
      // Create HTML elements for the product
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${img}" alt="${name}">
        <h3>${name}</h3>
        <p>${description}</p>
        <h4>${price}</h4>
      `;
      // Append the product element to the product container
      const productContainer = document.getElementById('product-container');
      productContainer.appendChild(productElement);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });