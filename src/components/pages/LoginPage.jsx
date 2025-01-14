import React from 'react';
import {
    Page,
    List,
    Navbar,
    ListInput,
    LoginScreenTitle,
    Block,
    Button
} from 'framework7-react';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    render() {
        return (
            <Page noToolbar noSwipeback loginScreen>
                <Navbar backLink="Back"></Navbar>
                <LoginScreenTitle>Login</LoginScreenTitle>
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
                    <Block><Button raised fill round onClick={this.signIn.bind(this)}>Sign In</Button></Block>
                    <Block>
                        <span>Dont' have an account? <Button raised fill round href="/register/">Sign Up</Button></span>
                    </Block>
                </List>
            </Page>
        )
    }
    signIn() {
        const self = this;
        const app = self.$f7;
        const router = self.$f7router;
        app.dialog.alert(`Username: ${self.state.username}<br>Password: ${self.state.password}`, () => {
            router.back();
        });
    }
}