import * as React from 'react';
import {connect} from 'react-redux';
import {map as _map} from 'lodash';
import {Card, Header, Segment, Icon} from 'semantic-ui-react';
import {ProportionCard} from './ProportionCard';
import {proportionActions} from './ProportionActions';

const mapStateToProps = (state) => {
    return {
        list: state.proportion.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        select: (data) => {
            dispatch(proportionActions.selectProportion(data));
        }
    };
};

export const Proportions = connect(mapStateToProps, mapDispatchToProps)(({list, select}) => (
    <React.Fragment>
        <Segment vertical>
            <Header as='h2' floated='left'>
                Proporcje
            </Header>
            <Card.Group centered>
                {_map(list, proportion => (
                    <ProportionCard
                        key={proportion._id}
                        _id={proportion._id}
                        name={proportion.name}
                        calories={proportion.calories}
                        protein={proportion.protein}
                        carbohydrates={proportion.carbohydrates}
                        fats={proportion.fats}
                        select={select}
                    />
                ))}
                <Card className="proportion-card__create">
                    <Card.Content>
                        <Card.Header textAlign="center">
                            <Icon circular inverted name="plus" size="big"/>
                        </Card.Header>
                    </Card.Content>
                </Card>
            </Card.Group>
        </Segment>
    </React.Fragment>
));