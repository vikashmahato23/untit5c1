import styles from "./Button.module.css";

function Button({ title, onClick, disabled, id ,data,data1}) {

  return (
    <button id={id} data-testid="button-component" onClick={()=>{
            if(onClick=="Sort by Descending Salary"){
              data.sort((a, b) => b.salary - a.salary);
          
            }
            else {
              data.sort((a, b) => a.salary - b.salary)
            }
            console.log(data,onClick)
          data1([...data])
    }} className={styles.button}>
      {title}
    </button>
  );
}

export default Button;
