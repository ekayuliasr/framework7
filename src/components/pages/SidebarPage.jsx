import React from 'react';
import { Page, Navbar, Block, BlockTitle, List, ListItem } from 'framework7-react';

export default () => (
    <Page>
        <Navbar title="Sidebar" />
        <List>
            <ListItem link="/" title="Home"></ListItem>
            <ListItem link="/login/" title="Login"></ListItem>
        </List>
    </Page>
);