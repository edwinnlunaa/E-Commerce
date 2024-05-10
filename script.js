fetch('products.json')
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


  //validation for contact form
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Validate inputs
      if (validateName() && validateEmail() && validateMessage()) {
          alert('Form submitted successfully!');
          form.reset(); // Reset form fields
      }
  });
  // Function to validate name
  function validateName() {
      const name = nameInput.value.trim();
      if (name === '') {
          alert('Please enter your name.');
          nameInput.focus();
          return false;
      }
      return true;
  }
  // Function to validate email
  function validateEmail() {
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          alert('Please enter a valid email address.');
          emailInput.focus();
          return false;
      }
      return true;
  }
  // Function to validate message
  function validateMessage() {
      const message = messageInput.value.trim();
      if (message === '') {
          alert('Please enter your message.');
          messageInput.focus();
          return false;
      }
      return true;
  }