function Button(props) {
  return (
    <a href="props.button.url" className={props.button.isPrimary ? 'button primary' : 'button secondary'}>{props.button.text}</a>
  );
}

export default Button;