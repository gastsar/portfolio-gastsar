import AboutContent from '../../components/AboutContent'
import CardSkill from '../../components/Cards/CardSkill'
import { CardTag } from '../../components/Cards/CardTag'
import { Subtitle, Title } from '../../components/Utils/Title'
import { data } from '../../data/data'

const About = () => {
  const { texte, skills, softSkills } = data

  return (
    <main> 
       
      <section className="descript">
        <Title title="Qui suis-je?" />
         <AboutContent/>
      </section>
      <section className="skills">
        <Subtitle subtitle="Mes competences" />
        <article className="skills__contente">
          {Object.keys(skills).map((skill) => (
            <CardSkill key={skill} title={skill} list={skills[skill]} />
          ))}
        </article>
      </section>
      <section className="softSkills">
        <Subtitle subtitle="SoftSkills" />
        <article className="softSkills__contente">
          <ul>
            {softSkills.map((item, index) => (
              <CardTag key={index} favorite={item} />
            ))}
          </ul>
        </article>
      </section>
      <section className="kiff">
        <Subtitle subtitle="Mes kiff" />
        <article className="kiff__contente">
          <ul>
            {texte.map((item, index) => (
              <CardTag key={index} favorite={item} />
            ))}
          </ul>
        </article>
      </section>
    
    </main>
  )
}

export default About
