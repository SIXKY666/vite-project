import {useState} from 'react'
import { useNavigate, Outlet } from "react-router-dom";
import type { MenuProps } from "antd";
import { Layout, Space, Menu, Button } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeFilled,
  AppstoreFilled,
} from "@ant-design/icons";

const AdminLayout = () => {
  //!Declare
  const { loginWithRedirect } = useAuth0();
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items: MenuItem[] = [
    getItem("Home", "Home", <HomeFilled />),
    getItem("Dashboard", "Dashboard", <AppstoreFilled />),
  ];

    type MenuItem = Required<MenuProps>["items"][number];

    function getItem(
      label: React.ReactNode,
      key: React.Key,
      icon?: React.ReactNode,
      children?: MenuItem[],
      type?: "group"
    ): MenuItem {
      return {
        key,
        icon,
        children,
        label,
        type,
      } as MenuItem;
    }
  //!Style
  const contentStyle: React.CSSProperties = {
    padding: '10px',
    textAlign: "left",
    minHeight: 120,
    lineHeight: "120px",
    color: "#000",
    backgroundColor: "#fff",
  };

  const siderStyle: React.CSSProperties = {
    height: '100vh',
    textAlign: "center",
    color: "#000",
    backgroundColor: "#fff",
  };

  //!Function
  const onClick: MenuProps["onClick"] = e => {
    e.key === 'Dashboard' ? navigate('/dashboard'): null
    e.key === "Home" ? navigate("/") : null;
  };

  return (
    <>
      <Layout>
        <Layout.Sider style={siderStyle} collapsed={collapsed}>
          <Space direction='vertical' style={{display:'flex',justifyContent: 'space-between',height:'100%'}}>
            <Menu
              style={{ textAlign: "left" }}
              items={items}
              onClick={onClick}
            />
            <Button onClick={loginWithRedirect} >Login</Button>
            <Button onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
          </Space>
        </Layout.Sider>
        <Layout.Content style={contentStyle}>
          <Outlet />
        </Layout.Content>
      </Layout>
    </>
  );
};

export default AdminLayout;
