import { useState } from 'react';
import styles from './Signup.module.css';

function Signup() {
  const [name, setName] = useState(""); // name 상태 추가
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password); // name 출력 추가
  };
  
  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Signup</h2>
      <label>
        <span>name:</span>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button className="btn">가입하기</button>
    </form>
  );
}

export default Signup;
