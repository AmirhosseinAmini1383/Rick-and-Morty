import style from "./CharacterList.module.css";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Loader from "../Loader";

function CharacterList({
  characters,
  isLoading,
  onSelectCharacter,
  selectedId,
}) {
  return (
    <div className={style["characters-list"]}>
      {isLoading ? (
        <Loader />
      ) : (
        characters.map((item) => (
          <Character key={item.id} item={item}>
            <button
              className={`${style.icon} ${style.red}`}
              onClick={() => onSelectCharacter(item.id)}
            >
              {selectedId === item.id ? <EyeSlashIcon /> : <EyeIcon />}
            </button>
          </Character>
        ))
      )}
    </div>
  );
}

export default CharacterList;

export function Character({ item, children }) {
  return (
    <div className={style.list__item}>
      <img src={item.image} alt={item.name} />
      <CharacterName item={item} />
      <CharacterInfo item={item} />
      {children}
    </div>
  );
}

function CharacterName({ item }) {
  return (
    <h3 className="name">
      <span>{item.gender === "Male" ? "👨🏼" : "👩🏼"}</span>
      <span>{item.name}</span>
    </h3>
  );
}

function CharacterInfo({ item }) {
  return (
    <div className={`${style["list-item__info"]} info`}>
      <span className={`status ${item.status === "Dead" ? "red" : ""}`}></span>
      <span>&nbsp;{item.status}</span>
      <span>&nbsp;-&nbsp;{item.species}</span>
    </div>
  );
}
