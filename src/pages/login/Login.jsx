import { useState } from "react";
import styles from "./Login.module.css";
import { useLogin } from "../../hooks/useLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, passowrd);
  };
  return (
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      {/* 패스워드 라벨과 입력창도 완성한다! */}
      <label>
        <span>passowrd:</span>
        <input
          type="passowrd"
          onChange={(e) => setPassword(e.target.value)}
          value={passowrd}
        />
      </label>

      {!isPending && <button className="btn">로그인</button>}
      {isPending && (
        <button className="btn" disabled>
          로딩중...
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}

export default Login;
