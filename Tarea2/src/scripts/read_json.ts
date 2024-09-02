fetch('assets/data.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    // Select the h1 element by its new ID
    let nameElement = document.querySelector('#headerName') as HTMLElement;

    // Check if the element exists before updating
    if (nameElement) {
      nameElement.innerHTML = data.name; // Assuming data.Name is the property in your JSON
    } else {
      console.error('Element with ID "headerName" not found');
    }

    // Select the contact info paragraph by its ID
    let contactInfoElement = document.querySelector('#contactInfo') as HTMLElement;

    // Check if the element exists before updating
    if (contactInfoElement) {
      // Assuming your JSON has properties `email` and `phone`
      contactInfoElement.innerHTML = `Email: ${data.email} | Phone: ${data.phone}`;
    } else {
      console.error('Element with ID "contactInfo" not found');
    }
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });
