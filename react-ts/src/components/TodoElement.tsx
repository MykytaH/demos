import classes from "./TodoElement.module.css";

const TodoElement: React.FC<{ text: string; onRemove: () => void }> = (
  props
) => {
  return (
    <li className={classes.item} onClick={props.onRemove}>
      {props.text}
    </li>
  );
};

export default TodoElement;
