import { useContext, useReducer } from "react";
import Button from "../components/Button";
import LanguageContext from "../store/LanguageContext/context";
import useLanguage from "../hooks/useLanguage";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    case "RESET":
      return { ...state, value: 0 };
    case "MULTIPLY":
      return { ...state, value: state.value * payload.multiplyBy };

    case "CHANGE_NAME":
      return { ...state, name: payload.name };

    default:
      return state;
  }
};

const Counter = () => {
  const texts = {
    EN: {
      changeName: "change name",
    },
    FA: {
      changeName: "تغییر نام",
    },
    DE: {
      changeName: "Namen ändern",
    },
  };
  const [state, dispatch] = useReducer(reducer, { value: 0, name: "Ali" });
  const { lang, setLang } = useLanguage();

  return (
    <div>
      <p>This is Counter page</p>
      <p>
        Current value is: {state.value} {state.name}
      </p>
      <Button
        title={"increment"}
        onClick={() => dispatch({ type: "INCREMENT" })}
      />
      <Button
        title={"decrement"}
        onClick={() => dispatch({ type: "DECREMENT" })}
      />
      <Button title={"reset"} onClick={() => dispatch({ type: "RESET" })} />
      <Button
        title={"multiply"}
        onClick={() =>
          dispatch({ type: "MULTIPLY", payload: { multiplyBy: 3 } })
        }
      />

      <Button
        title={"change language"}
        onClick={() => {
          if (lang === "EN") setLang("FA");
          if (lang === "FA") setLang("DE");
          if (lang === "DE") setLang("EN");
        }}
      />

      <Button
        title={texts[lang].changeName}
        onClick={() =>
          dispatch({
            type: "CHANGE_NAME",
            payload: { name: state.name === "Ali" ? "Mohammad" : "Ali" },
          })
        }
      />
    </div>
  );
};

export default Counter;
