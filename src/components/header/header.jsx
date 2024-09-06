import { useState } from "react";
import { Button, Dropdown, Space, Input } from "antd";
import { DownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import UserService from "./../../services/user-service.js";
import styles from "./header.module.css";
import LoginModal from "./../models/login/login.jsx";

const Search = Input.Search;

const items = [
  {
    key: "orders",
    label: <a href="https://www.antgroup.com">My Orders</a>,
  },
  {
    key: "addresses",
    label: <a href="https://www.antgroup.com">Saved Addresses</a>,
  },
  {
    key: "faqs",
    label: <a href="https://www.antgroup.com">FAQ's</a>,
  },
  {
    key: "account_privacy",
    label: <a href="https://www.antgroup.com">Account Privacy</a>,
  },
  {
    key: "logout",
    label: <a href="https://www.antgroup.com">Logout</a>,
  },
];

const Header = () => {
  const [modal, setModal] = useState(false);
  const authToken = localStorage.getItem("authToken");

  const { data: user } = useQuery({
    queryKey: ["/user"],
    queryFn: async () => {
      return UserService.get().then((response) => response.data);
    },
    enabled: Boolean(authToken),
  });

  return (
    <header className={styles.header}>
      <LoginModal open={modal} />
      <Link to="/" className={styles.logo}>
        <span className={styles.spacial}>Quick</span>Commerce
      </Link>
      <div className={styles.location}>
        <Space direction="vertical">
          <div className={styles.deliveryEta}>Delivery in 17 minutes</div>
          <div>
            Hadapsar, Pune, MH, India <DownOutlined />
          </div>
        </Space>
      </div>
      <div className={styles.search}>
        <Search
          placeholder="Search anything"
          onSearch={() => {}}
          size="large"
        />
      </div>
      <div className={styles.actions}>
        <Space size="middle">
          {authToken ? (
            <Dropdown menu={{ items }} placement="bottom">
              <Button type="text" ghost size="large">
                <Space>
                  Account
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          ) : (
            <Button size="large" onClick={() => setModal(true)}>
              Login
            </Button>
          )}
          <Button type="primary" size="large">
            <Space>
              <ShoppingCartOutlined />
              My Cart
            </Space>
          </Button>
        </Space>
      </div>
    </header>
  );
};

export default Header;
