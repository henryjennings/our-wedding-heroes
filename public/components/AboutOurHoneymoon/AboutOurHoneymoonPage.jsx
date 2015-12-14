import React from 'react';
import aboutOurHoneymoonApi from '../../api/aboutOurHoneymoon.api';
import { Jumbotron, Col } from 'react-bootstrap';
import AboutOurHoneymoonForm from './AboutOurHoneymoonForm.jsx';

class AboutOurHoneymoonPage extends React.Component {
    constructor() {
        super();

        this.state = {
            aboutOurHoneymoon: '',
        };
    }

    componentDidMount() {
        aboutOurHoneymoonApi
            .get()
            .then((response) => {
                this.setState({
                    aboutOurHoneymoon: response,
                });
            })
            .catch(() => {
                this.props.toastError('There was an error getting about our honeymoon');
            });
    }

    setAboutOurHoneymoonState(event) {
        this.setState({ aboutOurHoneymoon: event.target.value });
    }

    submit(event) {
        event.preventDefault();

        aboutOurHoneymoonApi
            .put(this.state)
            .then(() => {
                this.props.toastSuccess('About our honeymoon updated');
            })
            .catch(() => {
                this.props.toastError('There was an error saving about our honeymoon');
            });
    }

    render() {
        return (
            <Col md={6} mdOffset={3}>
                <Jumbotron>
                    <h1>About Our Honeymoon</h1>

                    <AboutOurHoneymoonForm aboutOurHoneymoon={this.state.aboutOurHoneymoon} onChange={this.setAboutOurHoneymoonState.bind(this)} onSubmit={this.submit.bind(this)} />
                </Jumbotron>
            </Col>
        );
    }
}

AboutOurHoneymoonPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default AboutOurHoneymoonPage;
