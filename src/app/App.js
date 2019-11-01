import React from 'react';

import {Route, Switch} from 'react-router-dom';
import {connector} from "../store/utils/simpleConnector";
import { Layout, Menu, Breadcrumb, Icon, Button, PageHeader, Descriptions, Badge, Row, Col } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const Main = () => <div>Main</div>
const Page404 = () => <div>Page404</div>

const methods = {
    componentWillMount(props) {
        console.log('init App', props);
    }
}

const App = ({history, state, dispatch}) =>
  <Layout>

    <Content style={{ padding: '0 50px' }}>

    <Header className="header" style={{padding: 0}}>
      <div className="logo" />

      <PageHeader
        ghost={false}
        // onBack={() => window.history.back()}
        title="Title"
        subTitle="This is a subtitle"
        extra={[
          <Button size="small" icon="user" key="user" />,
          <Button size="small" icon="solution" key="solution" />,
          <Button size="small" icon="mail" key="mail" />,
          <Button size="small" icon="login" key="login" />,
          <Button size="small" icon="logout" key="logout" />,
          <Button size="small" icon="question" key="question" />,
        ]}
      >
      </PageHeader>

    </Header>

      <Breadcrumb style={{ margin: '16px 0' }} separator=">">
          {
            history.location
              .pathname.split('/').filter( a => !!a )
              .map((a) => <Breadcrumb.Item>{a}</Breadcrumb.Item>)
          }
      </Breadcrumb>

      <Layout style={{ padding: '24px 0', background: '#fff' }}>

            <Sider style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >

              <SubMenu
                  key="calendar"
                  title={
                    <span>
                      <Icon type="calendar" />
                      Календарь
                    </span>
                  }
                >
                  <Menu.Item key="1" onClick = { () => history.push(`/calendar/alltasks`) }>Все задачи</Menu.Item>
                  <Menu.Item key="2" onClick = { () => history.push(`/calendar/today`) }>Сегодня</Menu.Item>
                  <Menu.Item key="3" onClick = { () => history.push(`/calendar/week`) }>Неделя</Menu.Item>
                  <Menu.Item key="4" onClick = { () => history.push(`/calendar/month`) }>Месяц</Menu.Item>
                </SubMenu>

                <SubMenu
                    key="projects"
                    title={
                      <span>
                        <Icon type="laptop" />
                        Проекты
                      </span>
                    }
                  >
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
                  </SubMenu>

              </Menu>
            </Sider>
            <Switch>
                <Route exact path={"/"} component={Main}/>
                <Route component={Page404}/>
            </Switch>

      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Footer
    </Footer>

  </Layout>


export default connector({methods, component: App});
