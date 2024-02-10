// ... outros códigos ...

export function submitForm(formData, setFormData, setCommentsList) {
    // Validar os dados do formulário, se necessário
    const isValid = formData.name && formData.email && formData.comments;
  
    if (isValid) {
      const newComment = { name: formData.name, comments: formData.comments };
  
      // Atualizar o estado com o novo comentário
      setCommentsList((prevComments) => [...prevComments, newComment]);
  
      // Limpar os campos do formulário
      setFormData({ name: '', email: '', comments: '' });
    }
  }
  