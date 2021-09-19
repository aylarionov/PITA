import { useSelector } from "react-redux";
import squares from "./squares.module.css";

export const Squares = ({ links, handler }) => {
  const { id } = useSelector((state) => state.user);
  return (
    <>
      {links ? (
        <div className={squares.wrapper}>
          {links.map((link) => (
            <div className={squares.linkSquare}>
              <p
                key={link}
                onClick={() => handler(link, id)}
                className={squares.link}
              >
                {link}
              </p>
            </div>
          ))}
          <div onClick={() => handler()} className={squares.linkSquare}></div>
          <div onClick={() => handler()} className={squares.linkSquare}></div>
          <div onClick={() => handler()} className={squares.linkSquare}></div>
          <div onClick={() => handler()} className={squares.linkSquare}></div>
        </div>
      ) : (
        <>
          <div className={squares.square}></div>
          <div className={squares.square}></div>
          <div className={squares.square}></div>
          <div className={squares.square}></div>
          <div className={squares.square}></div>
        </>
      )}
    </>
  );
};
