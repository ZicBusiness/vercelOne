// Home.module.js
export function loadFormData() {
  try {
    if (typeof window !== 'undefined' && localStorage) {
      const savedData = localStorage.getItem('formData');
      console.log('Saved Data:', savedData);  // Adicione esta linha
      return savedData ? JSON.parse(savedData) : { name: '', email: '', comments: '' };
    } else {
      return { name: '', email: '', comments: '' };
    }
  } catch (error) {
    console.error('Error loading form data from localStorage:', error);
    return { name: '', email: '', comments: '' };
  }
}

export async function fetchDataFromAPI() {
  try {
    const response = await fetch('https://backend-api-c0ln.onrender.com/api/formData');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    return [];
  }
}

export function submitForm(formData, setFormData, setCommentsList) {
  // Validar os dados do formulário, se necessário
  const isValid = formData.name && formData.email && formData.comments;

  if (isValid) {
    const newComment = { name: formData.name, comments: formData.comments };

    // Atualizar o estado com o novo comentário
    setCommentsList((prevComments) => [...prevComments, newComment]);

    // Limpar os campos do formulário
    setFormData({ name: '', email: '', comments: '' });

    // Atualizar dados na API
    fetch('https://backend-api-c0ln.onrender.com/api/formData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => console.log('Data updated to API:', data))
      .catch(error => console.error('Error updating data to API:', error));
  }
}
