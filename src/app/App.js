import React from 'react';

import {Route, Switch} from 'react-router-dom';
import {connector} from "../store/utils/simpleConnector";
import { Layout, Menu, Breadcrumb, Icon, Button, PageHeader, Descriptions } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const Main = () => <div>Main</div>
const Page404 = () => <div>Page404</div>

const methods = {
    componentWillMount(props) {
        console.log('init App', props);
    }
}

const App = ({location, state, dispatch}) =>
  <div>

  <Layout>

      <Header className="header">
        <div className="logo" />

        <PageHeader
          ghost={false}
          // onBack={() => window.history.back()}
          title="Title"
          subTitle="This is a subtitle"
          extra={[
            <Button size="small" key="3">Operation</Button>,
            <Button size="small" key="2">Operation</Button>,
            <Button size="small" key="1" type="primary">
              Primary
            </Button>,
          ]}
        >
        </PageHeader>

      </Header>

      <Content style={{ padding: '0 50px' }}>

        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >

              <Menu.Item key="1"><Icon type="calendar" />Все задачи</Menu.Item>
              <Menu.Item key="2"><Icon type="calendar" />Сегодня</Menu.Item>
              <Menu.Item key="3"><Icon type="calendar" />Неделя</Menu.Item>
              <Menu.Item key="4"><Icon type="calendar" />Месяц</Menu.Item>

              <SubMenu
                  key="projects"
                  title={
                    <span>
                      <Icon type="laptop" />
                      Проекты
                    </span>
                  }
                >
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="check" />
                      Архив
                    </span>
                  }
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>

                <SubMenu
                  key="favorit"
                  title={
                    <span>
                      <Icon type="star" />
                      Избранные
                    </span>
                  }
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>

                <SubMenu
                  key="search"
                  title={
                    <span>
                      <Icon type="search" />
                      Фильтры
                    </span>
                  }
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>

            </Menu>
          </Sider>

          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Switch>
                <Route exact path={"/"} component={Main}/>
                <Route component={Page404}/>
            </Switch>
          </Content>

        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>

  </div>

export default connector({methods, component: App});
