import fetchMock from "fetch-mock";
import Button from "../button/submit_button.js";
import InputBox from "../input_box/input_box.js";
import { useEffect, useState } from "react";

function LoginForm() {
    /* Компонент формы аунтентификации */

    function tokenGenerator(length) {
        // Генерирует рандомную строку указанной длины

        let result = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    async function requestLogin() {
        // Делает запрос на сервер с данными из формы

        const url = "https://example.com/api/login";
        fetchMock.post(url, { token: tokenGenerator(10) }); // fetch mock
        const email = document.getElementsByName("email")[0].value;
        const password = document.getElementsByName("password")[0].value;
        let body = JSON.stringify({ email: email, password: password });
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: body,
        });
        let result = await response.json();
        console.log("result: ", result);
        alert("Token: " + result.token);
        fetchMock.restore(); // fetch mock release
    }

    function blurHandler(e) {
        switch (e.target.name) {
            case "email":
                setEmailDirty(true);
                break;
            case "password":
                setPasswordDirty(true);
                break;
        }
    }

    function emailValidate(email) {
        // Валидация email

        setEmail(email.target.value);
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email.target.value).toLowerCase())) {
            setEmailError("Email введен некорректно");
        } else {
            setEmailError("");
        }
    }

    function passwordValidate(password) {
        // Валидация password

        setPassword(password.target.value);
        if (password.target.value.length < 4) {
            setPasswordError("Password должен быть больше 4 символов");
            if (!password.target.value) {
                setPasswordError("Password не может быть пустым");
            }
        } else {
            setPasswordError("");
        }
    }

    function errorEffect() {
        // Установка состояния формы

        if (emailError || passwordError) {
            setFormValid(false);
        } else setFormValid(true);
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState("Email не может быть пустым");
    const [passwordError, setPasswordError] = useState("Password не может быть пустым");
    const [formValid, setFormValid] = useState(false);

    useEffect(errorEffect, [emailError, passwordError]);

    return (
        <div className="login-form">
            <h1>Login form</h1>

            {emailDirty && emailError && <div className="error">{emailError}</div>}
            <InputBox
                type="text"
                name="email"
                placeholder="Email"
                onBlur={blurHandler}
                onChange={emailValidate}
                value={email}
            />

            {passwordDirty && passwordError && <div className="error">{passwordError}</div>}
            <InputBox
                type="password"
                name="password"
                placeholder="Password"
                onBlur={blurHandler}
                onChange={passwordValidate}
                value={password}
            />

            <div className="remember-forgot">
                <label>
                    <input type="checkbox" name="remember" />
                    Remember me
                </label>
                <a href="#">Forgot password?</a>
            </div>

            <Button type="submit" sign="Login" onClick={requestLogin} disabled={!formValid} />

            <div className="register-link">
                <p>
                    Don't have an account? <a href="#">Register</a>
                </p>
            </div>
        </div>
    );
}
export default LoginForm;
