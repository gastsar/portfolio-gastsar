import AboutContent from '../../components/AboutContent'
import { CardProject } from '../../components/Cards/CardProject'
import CardSkill from '../../components/Cards/CardSkill'
import MessageContact from '../../components/MessageContact'

import { Subtitle } from '../../components/Utils/Title'
import { data } from '../../data/data'

const Home = () => {
  const { skills,  project} = data
  return (
    <main>
<section>
  <h1>Narson kevine Yves, je suis  développeur </h1>
  <div className="image-container">
    <a target='_blank' rel='noreferrer' href="https://taplink.cc/kevine_dev">
  <img className="codeqr rotate" src="./images/codeQr.png" alt="codeQr1" />
  <img className="profil rotate" src="./images/profil.png" alt="codeQr2" /></a>
</div>

</section>
<section>
  <Subtitle subtitle="Projets"/>
  <article className="project">
    {project.map((proj, index) => (
      <CardProject 
        key={index} 
        cover={proj.image} 
        techno={proj.technologies} 
        title={proj.name} 
        descript={proj.description} 
        github={proj.github} 
        codepen={proj.codepen}  
      />
    ))}
  </article>
</section>

      <section className="skills">
        <Subtitle subtitle="Mes competences" />
        <article className="skills__contente">
          {Object.keys(skills).map((skill) => (
            <CardSkill key={skill} title={skill} list={skills[skill]} />
          ))}
        </article>
      </section>
      <section className="descript">
        <Subtitle subtitle="A propos" />
        <AboutContent/>
      </section>
      <section>
      <Subtitle subtitle="Contacts" />
     <MessageContact/>
      </section>
    </main>
  )
}

export default Home
