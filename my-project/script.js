
    document.getElementById('info-form').addEventListener('submit', async function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      const formObject = {};
      formData.forEach((value, key) => { formObject[key] = value; });

      try {
        const response = await fetch('/api/submit-customer-info', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formObject)
        });

        if (response.ok) {
          alert('Information submitted successfully!');
          this.reset();
        } else {
          throw new Error('Failed to submit information.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit information. Please try again later.');
      }
    });
