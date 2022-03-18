import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from 'antd';
import { Provider } from "react-redux";

import "./App.css"
import Home from "./pages/home";
import Detail from "./pages/detail";
import New from "./pages/new";
import Revise from "./pages/revise";
import store from "./store";


export default class App extends React.Component {
  render() {
    const { Header, Content, Footer } = Layout;
    return (
      <Provider store={store}>
      <Layout className="layout">
        
        <Header>
          <div className="logo" />
        </Header>

        <Content style={{ padding: '50px 50px' }}>
          <div className="site-layout-content">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="detail/:id" element={<Detail />} />
                <Route path="new" element={<New />} />
                <Route path="revise/:id" element={<Revise />} />
              </Routes>
            </BrowserRouter>
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Light Blog ©2022 Created by ChaonengFantuan
        </Footer>

      </Layout>
      </Provider>
    )
  }
}