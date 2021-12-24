import './button.css';
function Button({name, ...rest}) {
    return(
        <div class='btn' {...rest}>{name}</div>
    ) 
  }

  export default Button;