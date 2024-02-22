
export const CardProject = ({ cover, techno, title, descript }) => {
    return (
      <div className="card">
        {cover && <img className="cards__img" src={cover} alt={'Photo of ' + title} />}
        <h4>{techno}</h4>
        <div>
          <h5>{title}</h5>
          <button>{descript}</button>
        </div>
      </div>
    );
  };

export const CardSkill = ({ title, list }) => {
    return (
      <div className="cardSkill">
        <h4 className="cardSkill__title">{title}</h4>
        <ul className="cardSkill__list">
          {list.map((item, index) => (
            <li key={item}>
              {index < list.length - 1 ? item + ',' : item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  
  export const CardTag = ({ favorite }) => {
    return (
        <li className="cardTag">{favorite}</li>
    );
  };
  