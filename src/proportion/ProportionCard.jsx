import * as React from 'react';
import {Card, List, Icon, Grid} from 'semantic-ui-react';
import {map as _map} from 'lodash';
import { Link } from 'react-router-dom';
import './ProportionCard.css';

export class ProportionCard extends React.Component {
    render() {
        const {_id, name, calories, protein, carbohydrates, fats, select} = this.props;
        const macronutrients                                 = [
            {name: 'Białko', percentage: protein},
            {name: 'Węglowodany', percentage: carbohydrates},
            {name: 'Tłuszcze', percentage: fats}
        ];
        return (
            <Card className="proportion-card">
                <Card.Content>
                    <Card.Header>
                        <Grid columns={2}>
                            <Grid.Column floated='left'>{name}</Grid.Column>
                            <Grid.Column floated='right' textAlign='right'>
                                <span className="proportion-card__calories">
                                    {calories ? `${calories} kcal` : null}
                                </span>
                                <Link to={`/proportion/${_id}`}>
                                    <Icon
                                        onClick={() => select({_id, name, calories, protein, carbohydrates, fats})}
                                        className="proportion-card__edit" name="pencil" color="blue"
                                    />
                                </Link>
                            </Grid.Column>
                        </Grid>
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Card.Description>
                        <List horizontal relaxed size="small">
                            {_map(macronutrients, m => (
                                <List.Item key={m.name}>
                                    <List.Content className="proportion-card__macronutrient">
                                        <List.Header>{m.name}</List.Header>
                                        <List.Description>
                                            {m.percentage ? `${m.percentage}%` : null}
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            ))}
                        </List>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    };
}