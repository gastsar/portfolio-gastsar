export const CardProject = ({ cover, techno, title, descript, github, codepen }) => {
  return (
    <div className="cardProject">
      <div className="cardProject__header">
        {cover && <img className="cards__img" src={cover} alt={'Photo de ' + title} />}
      </div>
      <div className="cardProject__content">
        <h4>{title}</h4>
        <div className="cardProject__body">
          <h5>{techno}</h5>
          <p>{descript}</p>
        </div>
        <div className="cardProject__footer">
          {github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          {codepen && <a href={codepen} target="_blank" rel="noopener noreferrer">CodePen</a>}
        </div>
      </div>
    </div>
  );
};
