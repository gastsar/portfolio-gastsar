const CardSkill = ({ title, list }) => {
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

  export default CardSkill;


