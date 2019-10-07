import React from 'react';
import {
    Page,
    Navbar,
    List,
    ListItem,
    ListInput,
    ListButton,
    LoginScreenTitle,
    BlockFooter
} from 'framework7-react';

export default () => (
    < Page >
        <LoginScreenTitle>Login</LoginScreenTitle>
        <List form>
            <ListInput
                label="Username"
                name="username"
                placeholder="Username"
                type="text"
            />
            <ListInput
                label="Password"
                name="password"
                placeholder="Password"
                type="password"
            />
        </List>
        <List>
            <ListButton title="Sign In" loginScreenClose></ListButton>
            <BlockFooter>
                <p>Click Sign In to close Login Screen</p>
            </BlockFooter>
        </List>
    </Page >
);