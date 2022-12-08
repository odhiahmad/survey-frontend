import React, { useEffect } from "react";
import { Layout, Row, Col, Form, Input, Button, Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate, Navigate } from 'react-router-dom';

import { login, setToken, getSessionStorage } from "./../store";
import "./../styles/login.less";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
const { Content } = Layout;

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginResult = useSelector(
    (state) => state.login.result
  );
  const loginLoading = useSelector(
    (state) => state.login.loading
  );
  const loginError = useSelector(
    (state) => state.login.error
  );

  const onFinish = (values) => {

    const body = {
      username: values.username,
      password: values.password
    }

    dispatch(login(body))

  };

  const isToken = useSelector(
    (state) => state.getSessionStorage.result
  );

  const isAuthenticated = isToken === null ? false : true

  useEffect(() => {
    dispatch(getSessionStorage())
  }, [dispatch])


  useEffect(() => {
    if (loginError && loginError !== null) {
      Swal.fire({
        text: loginError,
        icon: 'error',
        title: 'Gagal',
      })
      dispatch(
        login({ reset: true })
      );
    } else if (loginResult) {
      if (loginResult) {
        dispatch(
          setToken(loginResult)
        );
        navigate("/wilayah/1");

      }
    }
  }, [loginResult, loginError, dispatch, navigate]);


  // let { from } = this.props.location.state || { from: { pathname: "/" } };
  if (isAuthenticated) return <Navigate to={'/wilayah/1'} />;

  return (
    <Layout className="login">
      <Content>
        <Spin spinning={loginLoading}>
          <Row justify="center" align="middle">
            <Col className="form-container">
              {/* <img src={logo} alt="btpns logo" /> */}
              <p className="form-title">Survey Perkimtan</p>
              <Form
                name="normal_login"
                className="form-login"
                initialValues={{ remember: true }}

                onFinish={onFinish}

              >
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Please input your Username!" },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Spin>
      </Content>
    </Layout>
  );
}



export default Login;
