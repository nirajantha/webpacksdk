import { Button, Card, ConfigProvider, Space, theme, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
interface dialerProps {
  userTheme?: {
    colorPrimary: string;
  };
}
const WebDialer: React.FC<dialerProps> = ({ userTheme }) => {
  const { Meta } = Card;
  const defaultTheme = {
    colorPrimary: "#6543A1",
  };
  return (
    <>
      <ConfigProvider
        theme={{
          token: userTheme ? userTheme : defaultTheme,
        }}
      >
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
          <Space direction="horizontal">
            <Button>More</Button>
          </Space>
        </Card>
      </ConfigProvider>
    </>
  );
};

export default WebDialer;
