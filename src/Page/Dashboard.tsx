import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import {
  Typography,
  Row,
  Col,
  Card,
  Table,
  Statistic,
  Layout,
  Space,
} from "antd";

const Dashboard = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];


  return (
    <>
      <Typography.Title level={2}>Summary Dashboard</Typography.Title>
      <Layout style={{ padding: "6px" }}>
        <Row>
          <Col span={16}>
            <Row gutter={5}>
              <Col span={8}>
                <Card bordered={false}>
                  <Statistic
                    title="1"
                    value={11.28}
                    precision={2}
                    valueStyle={{
                      color: "#3f8600",
                    }}
                    suffix="%"
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card bordered={false}>
                  <Statistic
                    title="2"
                    value={11.28}
                    precision={2}
                    valueStyle={{
                      color: "#3f8600",
                    }}
                    suffix="%"
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card bordered={false}>
                  <Statistic
                    title="3"
                    value={11.28}
                    precision={2}
                    valueStyle={{
                      color: "#3f8600",
                    }}
                    suffix="%"
                  />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Space direction="vertical">
              {/* <Card title="Card title" bordered={false} style={{ height: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card> */}
            </Space>
          </Col>
        </Row>
        <Table dataSource={dataSource} columns={columns} />;
      </Layout>
    </>
  );
};

export default Dashboard;
