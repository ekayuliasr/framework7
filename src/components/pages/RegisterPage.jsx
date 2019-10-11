import React from 'react';
import {
    Page,
    List,
    ListInput,
    Button,
    LoginScreenTitle,
    Navbar,
    Block
} from 'framework7-react';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
        };
    }

    render() {
        return (
            <Page noToolbar noNavbar noSwipeback loginScreen>
                <Navbar backLink="Back"></Navbar>
                <LoginScreenTitle>Register</LoginScreenTitle>
                <List form>
                    <ListInput
                        label="Username"
                        type="text"
                        placeholder="Your username"
                        value={this.state.username}
                        onInput={(e) => {
                            this.setState({ username: e.target.value });
                        }}
                    />
                    <ListInput
                        label="Email"
                        type="email"
                        placeholder="Your email"
                        value={this.state.email}
                        onInput={(e) => {
                            this.setState({ email: e.target.value });
                        }}
                    />
                    <ListInput
                        label="Password"
                        type="password"
                        placeholder="Your password"
                        value={this.state.password}
                        onInput={(e) => {
                            this.setState({ password: e.target.value });
                        }}
                    />
                </List>
                <List>
                    <Block>
                        <Button raised fill round>Sign Up</Button>
                    </Block>
                </List>
            </Page>
        )
    }

}