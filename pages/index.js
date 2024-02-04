import styles from '../styles/Home.module.css';

const HomePage = () => {
    return (
      <>
        <h1 style={{ fontSize: '6em' }}>-Harmonique-</h1>
        <h2>Bem-vindo ao meu projeto Next.js!</h2>

        <header>
        <div className={styles.gradientText}>-HARMONIQUE-</div>
      </header>

      <main>
        <h1>Let's Explore HTML</h1>

        <p>
          This experiment starts today <strong>19/01/2024</strong>!
        </p>

        <p>
          My name is <strong>Harmonique</strong> and I'll be your host!
        </p>

        <fieldset>
          <legend className={styles.legendStyle}>Feedback Info</legend>

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
          <button onClick={submitForm}>Submit</button>
        </fieldset>

        <div id="commentsDisplay"></div>
      </main>

      <footer></footer>
      </>
    );
  };
  
  export default HomePage;