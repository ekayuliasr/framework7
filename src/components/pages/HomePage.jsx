import React, { Component } from 'react';
import {
  Page,
  Col,
  Navbar,
  NavLeft,
  NavTitle,
  Link,
  Card,
  CardHeader,
  CardContent,
  Row,
  List,
  ListItem,
} from 'framework7-react';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }


  getDataProduk() {
    fetch(`https://api.myjson.com/bins/b1n2v`)
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.entities.map(data => (
        {
          image: `${data.image}`,
          title: `${data.title}`,
          price: `${data.price}`,
        }
      )))
      .then(res => {
        console.log(res)
        this.setState({
          items: res.slice(0, 15),
          isLoaded: false,
        });
      })
  }

  componentDidMount() {
    this.getDataProduk();
  }


  render() {
    return (
      <Page>
        <Navbar>
          <NavLeft>
            <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left"></Link>
          </NavLeft>
          <NavTitle>My App</NavTitle>
        </Navbar>
        <List>
          <ListItem link="/login/" title="Login"></ListItem>
        </List>
        <Row>
          {this.state.items.map((item) => (
            <Col width="20">
              <Card className="demo-card-header-pic">
                <CardHeader><img src={item.image} ></img></CardHeader>
                <CardContent>
                  <h1 className="text-title">{item.title}</h1>
                  <p className="text-subtitle">Rp. {item.price}</p>
                </CardContent>
              </Card>
            </Col>
          ))
          }
        </Row>
      </Page>
    );
  }
}

export default HomePage;
