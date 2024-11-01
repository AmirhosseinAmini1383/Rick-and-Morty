import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Loader from "./Loader";

function CharacterList({
  characters,
  isLoading,
  onSelectCharacter,
  selectedId,
}) {
  return (
    <div className="characters-list">
      {isLoading ? (
        <Loader />
      ) : (
        characters.map((item) => (
          <Character
            key={item.id}
            selectedId={selectedId}
            item={item}
            onSelectCharacter={onSelectCharacter}
          />
        ))
      )}
    </div>
  );
}

export default CharacterList;

function Character({ item, onSelectCharacter, selectedId }) {
  return (
    <div className="list__item">
      <img src={item.image} alt={item.name} />
      <CharacterName item={item} />
      <CharacterInfo item={item} />
      <button className="icon red" onClick={() => onSelectCharacter(item.id)}>
        {selectedId === item.id ? <EyeSlashIcon /> : <EyeIcon />}
      </button>
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
    <div className="list-item__info info">
      <span className={`status ${item.status === "Dead" ? "red" : ""}`}></span>
      <span>&nbsp;{item.status}</span>
      <span>&nbsp;-&nbsp;{item.species}</span>
    </div>
  );
}