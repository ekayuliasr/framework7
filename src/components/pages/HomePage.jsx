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
  CardFooter,
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


  componentDidMount() {
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

  render() {
    const { items } = this.state;
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
          {
            this.state.items.map(item => {
              const { image, title, price } = item;
              return (
                <Col width="25">
                  <Card className="demo-card-header-pic">
                    <CardHeader><img src={image} ></img></CardHeader>
                    <CardContent>
                      <h1 className="text-title">{title}</h1>
                      <p>Rp. {price}</p>
                    </CardContent>
                    <CardFooter>
                      <Link>Like</Link>
                      <Link>Read more</Link>
                    </CardFooter>
                  </Card>
                </Col>
              );
            })
          }
        </Row>
      </Page>
    );

  }
}

export default HomePage;
