// Importe o useEffect do React
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';
import { loadFormData, submitForm, fetchDataFromAPI } from '../scripts/Home.module.js';

const HomePage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [formData, setFormData] = useState(() => loadFormData() || { name: '', email: '', comments: '' });
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Carregar dados do servidor ao montar o componente
  fetchDataFromAPI()
  .then(data => {
    setCommentsList(data);
    // Salvar os dados no localStorage
    localStorage.setItem('formData', JSON.stringify(data));
  })
  .catch(error => console.error('Error fetching data from API:', error));

    return () => clearInterval(intervalId);
  }, []);


  const formattedTime = currentTime.toLocaleString('pt-BR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = async () => {
    submitForm(formData, setFormData, setCommentsList);

    // Atualizar dados na API
    try {
      await axios.post('http://localhost:3001/api/formData', formData);
      const updatedData = await fetchDataFromAPI();
      setCommentsList(updatedData);
      setFormData({ name: '', email: '', comments: '' }); // Mover aqui para garantir que a requisição foi bem-sucedida
    } catch (error) {
      console.error('Error updating data to API:', error);
    }
  };

  return (
    <>
      <header>
        <div className={styles.gradientText}>-HARMONIQUE-</div>
      </header>

        <h2>Bem-vindo ao projeto Next.js! Hoje é: {' '}{formattedTime}</h2>

      <main>
        <h1>Let's Explore HTML</h1>

        <p>
          This experiment starts today <strong>19/01/2024</strong>!
        </p>

        <p>
          My name is <strong>Harmonique</strong> and I'll be your host!
        </p>
        <br></br>
        <ul>
        <li><h2>and now... Let´s Explore HTML in Next.Js!!!</h2>

        <p>
            Today is  <strong><date>03/02/204</date></strong>! And we´ve just landed here in Vercel! Now it´s Next.Js project!!
        </p></li>
        <br></br>
        <li><h2><strong>Today is <date>18/02/2024</date>!!! Finalmente conseguimos estabilizar nosso primeiro Backend!</strong></h2>

        <p>
            Agora vamos para a próxima etapa que é subir tudo para a rede!
        </p></li>
        </ul>

        {/* ... restante do código ... */}

        <fieldset>
          <legend>Feedback Info</legend>

          <h2>What's your name?</h2>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name here!"
            value={formData.name}
            onChange={handleInputChange}
          />
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Tell us your best e-mail"
            value={formData.email}
            onChange={handleInputChange}
          />
          <br />
          <h2>Leave your comments here!</h2>
          <textarea
            id="comments"
            rows="10"
            cols="60"
            value={formData.comments}
            onChange={handleInputChange}
          ></textarea>
          <button onClick={(e) => { e.preventDefault(); submitForm(formData, setFormData, setCommentsList); }}>-Submit-</button>

        </fieldset>
        <br />

        <div id='commentsDisplay'>
          {/* Renderizar a lista de comentários */}
          {commentsList.map((comment, index) => (
            <div key={index} className={styles.commentBlock}>
              <p>
                <strong>{comment.name}:</strong> {comment.comments}
              </p>
            </div>
          ))}
        </div>

      </main>
    </>
  );
};

export default HomePage;
