import React from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

class UserForm extends React.Component {

    state = {
        firstName: '',
        lastName: '',
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            firstName: '',
            lastName: '',
        });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>
                        First Name
                    </Label>
                    <Input
                        placeholder='First Name'
                        value={this.state.firstName}
                        onChange={e => {
                                const firstName = e.target.value;
                                this.setState(prev => ({
                                    ...prev,
                                    firstName,
                                }));
                            }
                        }
                    />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Last Name
                    </Label>
                    <Input
                        placeholder='Last Name'
                        value={this.state.lastName}
                        onChange={e => {
                                const lastName = e.target.value;
                                this.setState(prev => ({
                                    ...prev,
                                    lastName,
                                }));
                            }
                        }
                    />
                </FormGroup>
                <FormGroup>
                    <Button type="submit" block outline color='primer'>
                        Create
                    </Button>
                </FormGroup>
            </Form>
        );
    }
}

export default UserForm;