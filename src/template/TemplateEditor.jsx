import * as React from 'react';
import {connect} from 'react-redux';

import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from 'jodit-react';

import {isEmpty as _isEmpty} from 'lodash';
import {templateActions} from './TemplateActions';

import './TemplateEditor.css';

const mapStateToProps = (state) => {
    return {
        selected: state.template.selected || {}
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const templateId = ownProps.match.params.templateId;
    return {
        select: (updatedData) => dispatch(templateActions.selectTemplate(updatedData)),
        unselect: () => dispatch(templateActions.unselectTemplate()),
        getTemplate: () => dispatch(templateActions.getTemplate(templateId)),
        updateTemplate: (updatedData) => dispatch(templateActions.updateTemplate(updatedData)),
        deleteTemplate: () => dispatch(templateActions.deleteTemplate(templateId))
    };
};

export const TemplateEditor = connect(mapStateToProps, mapDispatchToProps)(
    class extends React.Component {
        state = {
            content: 'content'
        };

        componentDidMount() {
            if (_isEmpty(this.props.selected)) {
                this.props.getTemplate();
            }
        }

        updateContent = (value) => {
            this.setState({content: value});
        };

        updateModel = (key, value) => {
            const numericValuesFor = ['protein', 'carbohydrates', 'fats', 'calories'];
            let asNumber           = Number(value);
            asNumber               = Number.isNaN(asNumber) ? 0 : asNumber;
            this.props.select({...this.props.selected, [key]: numericValuesFor.indexOf(key) > -1 ? asNumber : value});
        };
        jodit;
        setRef      = jodit => this.jodit = jodit;

        config = {
            readonly: false, // all options from https://xdsoft.net/jodit/doc/
            fullsize: true,
            globalFullsize: false,
            editorCssClass: 'template-editor__workplace',
            removeButtons: ['fullsize']
        };

        render() {
            const {unselect, updateProportion, deleteProportion, selected} = this.props;
            const {name, calories, protein, carbohydrates, fats}           = selected;

            return (
                <div className="template-editor">
                    <JoditEditor
                        editorRef={this.setRef}
                        value={this.state.content}
                        config={this.config}
                        onChange={this.updateContent}
                    />
                </div>
            );
        };
    });