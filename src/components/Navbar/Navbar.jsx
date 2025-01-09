import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from "../Modal/Modal.jsx";
import { Character } from "../Character/CharacterList.jsx";
import styleCharacterList from "../Character/CharacterList.module.css";
import style from "./Navbar.module.css";

function Navbar({ children }) {
  return (
    <nav className={style.navbar}>
      <Logo />
      {children}
    </nav>
  );
}
export default Navbar;

function Logo() {
  return (
    <div className={style.navbar__logo}>
      <img src="../../assets/images/logo.png" alt="logo" />
    </div>
  );
}

export function SearchInput({ query, setQuery }) {
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      type="text"
      className="text-field"
      placeholder="search..."
    />
  );
}

export function SearchResult({ numOfResult }) {
  return (
    <div
      className={style.navbar__result}
    >{`Found ${numOfResult} characters`}</div>
  );
}

export function Favourites({ favourites, onDeleteFavourite }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Modal onOpen={setIsOpen} open={isOpen} title={"List of Favourites"}>
        {favourites.map((item) => (
          <Character key={item.id} item={item}>
            <button
              className={`${styleCharacterList.red} ${styleCharacterList.icon}`}
              onClick={() => onDeleteFavourite(item.id)}
            >
              <TrashIcon />
            </button>
          </Character>
        ))}
      </Modal>
      <button className={style.heart} onClick={() => setIsOpen(true)}>
        <HeartIcon className={style.icon} />
        <span className={style.badge}>{favourites.length}</span>
      </button>
    </div>
  );
}
