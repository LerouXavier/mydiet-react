import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {List, Input, Grid, Modal, Button} from 'semantic-ui-react';
import {map as _map, isEmpty as _isEmpty} from 'lodash';
import {RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import {proportionActions} from './ProportionActions';
import './ProportionCard.css';

const mapStateToProps = (state) => {
    return {
        selected: state.proportion.selected || {}
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const proportionId = ownProps.match.params.proportionId;
    return {
        select: (updatedData) => dispatch(proportionActions.selectProportion(updatedData)),
        unselect: () => dispatch(proportionActions.unselectProportion()),
        getProportion: () => dispatch(proportionActions.getProportion(proportionId)),
        updateProportion: (updatedData) => dispatch(proportionActions.updateProportion(updatedData)),
        deleteProportion: () => dispatch(proportionActions.deleteProportion(proportionId))
    };
};

export const ProportionEditor = connect(mapStateToProps, mapDispatchToProps)(
    class extends React.Component {
        state = {
            hover: false
        };

        componentDidMount() {
            if (_isEmpty(this.props.selected)) {
                this.props.getProportion();
            }
        }

        updateModel = (key, value) => {
            const numericValuesFor = ['protein', 'carbohydrates', 'fats', 'calories'];
            let asNumber           = Number(value);
            asNumber               = Number.isNaN(asNumber) ? 0 : asNumber;
            this.props.select({...this.props.selected, [key]: numericValuesFor.indexOf(key) > -1 ? asNumber : value});
        };

        render() {
            const {unselect, updateProportion, deleteProportion, selected} = this.props;
            const {name, calories, protein, carbohydrates, fats}           = selected;
            const macronutrients                                           = [
                {key: 'protein', name: 'Białko', percentage: protein, fullMark: 100},
                {key: 'carbohydrates', name: 'Węglowodany', percentage: carbohydrates, fullMark: 100},
                {key: 'fats', name: 'Tłuszcze', percentage: fats, fullMark: 100}
            ];

            return (
                <Modal dimmer='blurring' size='small' open={true}>
                    <Modal.Header>
                        <Grid columns={2}>
                            <Grid.Column floated='left'>
                                <Input
                                    placeholder='Nazwa...'
                                    value={name}
                                    onChange={(event, {value}) => this.updateModel('name', value)}
                                />
                            </Grid.Column>
                            <Grid.Column floated='right' textAlign='right'>
                            <span className="proportion-card__calories">
                                <Input
                                    label={{basic: true, content: 'kcal'}}
                                    labelPosition='right'
                                    placeholder='Kaloryczność...'
                                    value={calories}
                                    onChange={(event, {value}) => this.updateModel('calories', value)}
                                />
                            </span>
                            </Grid.Column>
                        </Grid>
                    </Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <RadarChart
                                className="proportion-editor__chart"
                                cx={300}
                                cy={145}
                                outerRadius={100}
                                width={600}
                                height={250}
                                data={macronutrients}
                            >
                                <PolarGrid domain={[0, 100]}/>
                                <PolarRadiusAxis tick={false} axisLine={false} domain={[0, 100]}/>
                                <PolarAngleAxis dataKey="name"/>
                                <Radar
                                    name="macronutrient"
                                    dataKey="percentage"
                                    stroke="#37B156"
                                    fill="#5cae5c"
                                    fillOpacity={0.6}
                                />
                            </RadarChart>

                            <List
                                horizontal
                                relaxed
                                size="small"
                                className="proportion-editor__macronutrients"
                            >
                                {_map(macronutrients, m => (
                                    <List.Item key={m.name}>
                                        <List.Content className="proportion-card__macronutrient">
                                            <List.Header>{m.name}</List.Header>
                                            <List.Description>
                                                <Input
                                                    label={{basic: true, content: '%'}}
                                                    labelPosition='right'
                                                    placeholder='Ilość...'
                                                    value={m.percentage}
                                                    onChange={(event, {value}) => this.updateModel(m.key, value)}
                                                />
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                ))}
                            </List>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            as={Link}
                            to="/"
                            floated='left'
                            color='red'
                            basic
                            icon='remove'
                            labelPosition='left'
                            onClick={deleteProportion}
                            content="Usuń"
                        />
                        <Button
                            as={Link}
                            to="/"
                            basic
                            color='orange'
                            onClick={unselect}
                            content="Anuluj"
                        />
                        <Button
                            as={Link}
                            to="/"
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            onClick={() => updateProportion(selected)}
                            content="Zapisz"
                        />
                    </Modal.Actions>
                </Modal>
            );
        };
    });