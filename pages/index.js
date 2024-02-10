import { useState, useEffect } from 'react'; // Importa o useState e useEffect
import styles from '../styles/Home.module.css';

const HomePage = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

    return (
      <>
      <header>
        <div className={styles.gradientText}>-HARMONIQUE-</div>
      </header>
        
        <h2>Bem-vindo ao projeto Next.js! Hoje é: {' '}
        {currentTime.toLocaleString('pt-BR', {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        })}</h2>

        

      <main>
        <h1>Let's Explore HTML</h1>

        <p>
          This experiment starts today <strong>19/01/2024</strong>!
        </p>

        <p>
          My name is <strong>Harmonique</strong> and I'll be your host!
        </p>
        <br></br>
        <h2>and now... Let´s Explore HTML in Next.Js!!!</h2>

        <p>
            Today is  <strong><date>03/02/204</date></strong>! And we´ve just landed here in Vercel! Now it´s Next.Js project!!
        </p>

        <fieldset>
          <legend>Feedback Info</legend>

          <h2>What's your name?</h2>
          <label htmlFor="name">Name:</label>
          <input id="name" type="name" placeholder="Enter your name here!" />
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" placeholder="Tell us your best e-mail" />
          <br />
          <h2>Leave your comments here!</h2>
          <textarea id="comments" rows="10" cols="60"></textarea>
          <button>Submit</button>
          
         
        </fieldset>

      </main>

     
      </>
    );
  };
  
  export default HomePage;