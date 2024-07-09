import { Button, ConfigProvider, theme, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
interface dialerProps {
  userTheme: {
    colorPrimary: string;
    colorTextBase: string;
  };
}
const webDialer: React.FC<dialerProps> = ({ userTheme }) => {
  const defaultTheme = {
    colorPrimary: "#6543A1",
    colorTextBase: "white",
  };
  return (
    <>
      <ConfigProvider
        theme={{
          token: userTheme ? userTheme : defaultTheme,
        }}
      >
        <Tooltip title="search">
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button>Dialer Button</Button>
      </ConfigProvider>
    </>
  );
};

export default webDialer;
