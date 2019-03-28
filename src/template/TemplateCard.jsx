import * as React from 'react';
import {Card, Grid, Icon, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import './TemplateCard.css';
import {templateLabel} from './TemplateLabels';

export class TemplateCard extends React.Component {
    render() {
        const {_id, image, name, created, modified, description, label, select} = this.props;

        return (
            <Card className="template-card">
                <Link to={`/template/${_id}/issue`} >
                    <Image
                        label={templateLabel[label]}
                        src={image}
                    />
                </Link>
                <Card.Content>
                    <Card.Header>
                        <Grid columns={2}>
                            <Grid.Column floated='left' width={13}>{name}</Grid.Column>
                            {select ? <Grid.Column floated='right' textAlign='right' width={3}>
                                <Link to={`/template/${_id}`}>
                                    <Icon
                                        onClick={() => select({
                                            _id,
                                            image,
                                            name,
                                            created,
                                            modified,
                                            description,
                                            label
                                        })}
                                        className="template-card__edit" name="pencil" color="blue"
                                    />
                                </Link>
                            </Grid.Column> : null}
                        </Grid>
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>Ostatnio modyfikowany: {modified || created}</span>
                    </Card.Meta>
                    <Card.Description>{description}</Card.Description>
                </Card.Content>
            </Card>
        );
    };
}