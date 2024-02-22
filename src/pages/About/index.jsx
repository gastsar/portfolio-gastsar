import { CardSkill, CardTag } from '../../components/Cards'
import { Subtitle, Title } from '../../components/Utils/Title'
import { data } from '../../data/data'

const About = () => {
  const { texte, skills, softSkills } = data

  return (
    <main> 
        <Title title="Qui suis-je?" />
      <section className="descript">
       
        <article className="descript__contente">
          <p className="descript__texte">
            Bonjour, je suis Kevine, développeur front-end junior passionné.
            J'apprends depuis plus d'un an ! Je suis en constante formation et
            mon parcours est encore en construction. Mais ma détermination à
            maîtriser les technologies web et à créer des expériences web
            captivantes est inébranlable. Je suis à la recherche d'un projet
            porteur de sens où je m'épanouirai et apprendrai encore. Si vous
            recherchez un développeur front-end junior motivé, n'hésitez pas à
            me contacter !
          </p>
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
