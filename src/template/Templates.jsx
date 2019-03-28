import * as React from 'react';
import {connect} from 'react-redux';
import {map as _map} from 'lodash';
import {Link} from 'react-router-dom';
import {Card, Header, Image, Segment} from 'semantic-ui-react';
import {templateActions} from './TemplateActions';
import templatePreview from './template_preview.jpg';
import templateTable from './template_table.jpg';
import templatePlaceholder from './template_placeholder.jpg';
import {TemplateCard} from './TemplateCard';

const mapStateToProps = (state) => {
    return {
        list: state.template.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        select: (data) => {
            dispatch(templateActions.selectTemplate(data));
        }
    };
};
const images             = [templatePreview, templateTable];
export const Templates   = connect(mapStateToProps, mapDispatchToProps)(({list, select}) => (
    <Segment vertical>
        <Header as='h2' floated='left'>
            Szablony
        </Header>
        <Card.Group centered>
            {_map(list, (template, index) => (
                <TemplateCard
                    key={template._id}
                    _id={template._id}
                    image={images[index]}
                    name={template.name}
                    created={template.created}
                    modified={template.modified}
                    description={template.description}
                    label={template.label}
                    select={select}
                />
            ))}
            <Card>
                <Image src={templatePlaceholder}/>
                <Card.Content>
                    <Card.Header>Nowy Plan</Card.Header>
                    <Card.Description>Wybierz aby utworzyć nowy plan.</Card.Description>
                </Card.Content>
            </Card>
        </Card.Group>
    </Segment>
));