import { Button, ConfigProvider, theme, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
interface dialerProps {
  userTheme?: {
    colorPrimary: string;
  };
}
const WebDialer: React.FC<dialerProps> = ({ userTheme }) => {
  const defaultTheme = {
    colorPrimary: "#6543A1",
  };
  return (
    <>
      <ConfigProvider
        theme={{
          token: userTheme ? userTheme : defaultTheme,
          components: {
            Button: {
              defaultBg: userTheme
                ? userTheme.colorPrimary
                : defaultTheme.colorPrimary,
              colorPrimary: "red",
            },
          },
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

export default WebDialer;
