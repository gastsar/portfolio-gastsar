import { CardSkill, CardTag } from '../../components/Cards'
import { Subtitle, Title } from '../../components/Utils/Title'
import { data } from '../../data/data'

const Home = () => {
  const { texte, skills, softSkills } = data
  return (
    <main>
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
      <section>
      <Subtitle subtitle="Contacts" />
        <div>
             <span>
          À la recherche d'un magicien du code ? Félicitations, vous venez de
          débarquer au bon endroit ! (À moins que ce ne soit une illusion...)
        </span>
        <p>
          Si vous êtes curieux(se) de découvrir mes prouesses technologiques,
          parcourez mon portfolio. Même si vous ne savez pas trop ce que vous
          voulez, envoyez-moi un message, et je promets de vous répondre plus
          rapidement qu'il ne faut pour dire "bug".
        </p>
        </div>
      </section>
    </main>
  )
}

export default Home
