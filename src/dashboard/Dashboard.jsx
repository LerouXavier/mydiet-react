import * as React from 'react';
import {connect} from 'react-redux';
import {dashboardActions} from './DashboardActions';
import {Container} from 'semantic-ui-react';
import {Proportions} from '../proportion/Proportions';
import {Templates} from '../template/Templates';
import {Mentees} from '../mentees/Mentees';

const mapDispatchToProps = (dispatch) => {
    return {
        loadDashboard: () => {
            dispatch(dashboardActions.loadDashboard());
        }
    };
};

export const Dashboard = connect(null, mapDispatchToProps)(
    class extends React.Component {

        componentDidMount() {
            this.props.loadDashboard();
        }

        render() {
            return (
                <React.Fragment>
                    <Container>
                        <Mentees/>
                        <Templates/>
                        <Proportions/>
                    </Container>
                </React.Fragment>
            );
        }
    });