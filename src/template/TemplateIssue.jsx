import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Modal, Button, Dropdown} from 'semantic-ui-react';
import {map as _map, isEmpty as _isEmpty} from 'lodash';
import {TemplateCard} from './TemplateCard';
import {templateActions} from './TemplateActions';
import templatePreview from './template_preview.jpg';

const mapStateToProps = (state) => {
    return {
        proportions: state.proportion.list || [],
        selected: state.template.selected || {}
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const templateId = ownProps.match.params.templateId;
    return {
        unselect: () => dispatch(templateActions.unselectTemplate()),
        getTemplate: () => dispatch(templateActions.getTemplate(templateId))
    };
};

export const TemplateIssue = connect(mapStateToProps, mapDispatchToProps)(
    class extends React.Component {
        state = {
            selectedOption: null
        };

        componentDidMount() {
            if (_isEmpty(this.props.selected)) {
                this.props.getTemplate();
            }
        }

        updateOption = (value) => this.setState({...this.state, selectedOption: value});

        render() {
            const {unselect, selected, proportions}                               = this.props;
            const {_id, name, created, modified, description, label} = selected;

            return (
                <Modal dimmer='blurring' size='tiny' open={true}>
                    <Modal.Content>
                        <TemplateCard

                            key={_id}
                            _id={_id}
                            image={templatePreview}
                            name={name}
                            created={created}
                            modified={modified}
                            description={description}
                            label={label}
                        />
                        <Dropdown
                            placeholder='Wybierz proporcje...'
                            fluid
                            selection
                            value={this.state.selectedOption}
                            options={_map(proportions, (p) => ({text: p.name, value: p._id}))}
                            onChange={(event, {value}) => this.updateOption(value)}
                        />
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            floated="left"
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
                            basic
                            color='blue'
                            onClick={unselect}
                            content="Podgląd"
                        />
                        <Button
                            as={Link}
                            to="/"
                            basic
                            color='blue'
                            icon='send'
                            labelPosition='right'
                            onClick={unselect}
                            content="Wyślij"
                        />
                        <Button
                            as={Link}
                            to="/"
                            positive
                            icon='print'
                            labelPosition='right'
                            content="Drukuj"
                        />
                    </Modal.Actions>
                </Modal>
            );
        };
    });