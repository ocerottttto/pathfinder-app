import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const InputExampleInput = () => <Input placeholder='Search...' />

export class CreatorComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Form>
                <div className="ui input"><Input type="text" placeholder="Search..." /></div>
                <div className="ui input"><Input type="text" placeholder="Search..." /></div>
                <div className="ui input"><Input type="text" placeholder="Search..." /></div>
                <div className="ui input"><Input type="text" placeholder="Search..." /></div>
            </Form>
        );
    }
}