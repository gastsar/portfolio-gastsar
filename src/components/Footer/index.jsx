

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
      
          <p>yvesnarsonkevine@gmail.com</p>
     
        <div className="footer__contact__media">
          <h5>Médias sociaux</h5>
          <ul>
            <li><a href="https://github.com/gastsar" target="_blank" rel="noopener noreferrer"><img src="./logo/github.svg" alt="" /></a></li>
            <li><a href="https://fr.linkedin.com/in/yvesnarsonkevine" target="_blank" rel="noopener noreferrer"><img src="./logo/linkedin.svg" alt="" /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer__copy">
      <blockquote>
            <p>"Seul on va plus vite, ensemble on va plus loin... Mais parfois, on se perd en chemin."</p><br /> 
            <span> - Proverbe africain -</span> 
        </blockquote>
        <p >&copy;Copyright 2024, Made by Yves. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer
