import styles from "./helloworld.module.css";
export default function HelloWorld() {
  return (
    <div>
      <h1 className={styles.hello}>Hello World</h1>
    </div>
  );
}
