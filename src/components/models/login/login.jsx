import { Modal, Input, Form, message } from "antd";
import { AxiosError } from "axios";
import axios from "./../../../utils/axios";
import styles from "./login.module.css";

const Login = ({ open }) => {
  const handleOnSubmit = async (values) => {
    try {
      console.log("[values]", values);
      const response = await axios.post("/auth/signIn", {
        email: values.email,
        password: values.password,
      });

      if (response.data.data?.authToken) {
        localStorage.setItem("authToken", response.data.data?.authToken);
        message.success("User signed-in successfully.");
        window.location.href = "/";
      }

      console.log("[response]", response);
    } catch (error) {
      if (error instanceof AxiosError) {
        message.error(error?.response?.data?.message);
      } else {
        message.error(error.message);
      }
    }
  };

  return (
    <Modal
      open={open}
      centered={true}
      title="Login to continue shopping..."
      okText="Login"
      cancelButtonProps={{ style: { display: "none" } }}
      width={360}
      okButtonProps={{
        htmlType: "submit",
        form: "login-form",
      }}
    >
      <Form
        id="login-form"
        className={styles.form}
        layout="vertical"
        onFinish={handleOnSubmit}
      >
        <Form.Item label="Email" name="email">
          <Input id="email" type="email" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password id="password" type="password" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Login;
