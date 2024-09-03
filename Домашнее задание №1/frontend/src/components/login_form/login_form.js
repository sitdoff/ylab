import Button from "../button/submit_button.js";
import InputBox from "../input_box/input_box.js";

function LoginForm() {
  return (
    <div className="login-form">
      <form>
        <h1>Login form</h1>
        <InputBox type="text" name="email" placeholder="Email" />
        <InputBox type="password" name="password" placeholder="Password" />
        <div className="remember-forgot">
          <label>
            <input type="checkbox" name="remember" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <Button type="submit" sign="Login" />
        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
