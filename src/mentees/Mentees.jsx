import {Card, Header, Icon, Image, Segment} from 'semantic-ui-react';
import * as React from 'react';
import {Route, Switch} from 'react-router';
import {Link} from 'react-router-dom';
import {AddMentee} from './AddMentee';

export const Mentees = ({list}) => (
    <React.Fragment>
        <Segment vertical>
            <Header as='h2' floated='left'>
                Podopieczni
            </Header>
            <Link to="/add-mentee">
                <Icon inverted color='yellow' circular={true} name='plus' />
            </Link>
            <Card.Group centered>
                <Card>
                    <Image src='/images/avatar/large/matthew.png' />
                    <Card.Content>
                        <Card.Header>Matthew</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            22 Friends
                        </a>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src='/images/avatar/large/matthew.png' />
                    <Card.Content>
                        <Card.Header>Matthew</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            22 Friends
                        </a>
                    </Card.Content>
                </Card>
            </Card.Group>
        </Segment>

        <Switch>
            <Route path="/add-mentee" component={AddMentee}/>
        </Switch>
    </React.Fragment>
);