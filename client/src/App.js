import "./App.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";

function App() {
  const handleSubmit = (values) => console.log(values);

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  const validationsRegister = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas não se coincidem")
      .required("A confirmação da senha é obrigatória"),
  });

  return (
    <div className="login-container">
      <h1>Login</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={validationsLogin}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field
              name="email"
              className="login-form-field"
              placeholder="Email"
            />

            <ErrorMessage
              component="span"
              name="email"
              className="login-form-error"
            />
          </div>
          {/*Outro campo*/}
          <div className="login-form-group">
            <Field
              name="password"
              className="login-form-field"
              placeholder="Senha"
            />

            <ErrorMessage
              component="span"
              name="password"
              className="login-form-error"
            />
          </div>

          <button className="login-button" type="submit">
            Login
          </button>
        </Form>
      </Formik>

      <h1>Cadastro</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={validationsRegister}
      >
        <Form className="register-form">
          <div className="register-form-group">
            <Field
              name="email"
              className="register-form-field"
              placeholder="Email"
            />

            <ErrorMessage
              component="span"
              name="email"
              className="register-form-error"
            />
          </div>
          {/*Outro campo*/}
          <div className="register-form-group">
            <Field
              name="password"
              className="register-form-field"
              placeholder="Senha"
            />

            <ErrorMessage
              component="span"
              name="password"
              className="register-form-error"
            />
          </div>

          <div className="register-form-group">
            <Field
              name="confirmation"
              className="register-form-field"
              placeholder="Senha"
            />

            <ErrorMessage
              component="span"
              name="confirmation"
              className="register-form-error"
            />
          </div>

          <button className="register-button" type="submit">
            Cadastrar
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
