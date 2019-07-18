import React from 'react'
import { Segment, Header, Form } from 'semantic-ui-react'

const BaseStatsComponent = (props) => (
    <Segment.Group className="box">
        <Segment compact>
            <Form.Group>
                <Form.Input fluid label='HP' width={4} />
                <Form.Input fluid label='Max HP' width={4} readOnly />
                <Form.Input fluid label='Non Lethal Dmg' width={4} />
                <Form.Input fluid label='DR' width={2} readOnly />
                <Form.Input fluid label='Hit Dice' width={2} readOnly />
            </Form.Group>
        </Segment>
        <Segment.Group horizontal>
            <Segment compact>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Initiative' readOnly />
                    <Header as='h3'>=</Header>
                    <Form.Input fluid label='Dex Mod' readOnly />
                    <Header as='h3'>+</Header>
                    <Form.Input fluid label='Misc Mod' />
                </Form.Group>
            </Segment>
            <Segment compact>
                <Form.Group widths='equal'>
                </Form.Group>
            </Segment>
        </Segment.Group>    
        <Segment compact>
            <Form.Group widths='equal'>
                <Form.Input fluid label='Base Speed' placeholder='ft.' readOnly />
                <Form.Input fluid label='With Armor' placeholder='ft.' readOnly />
                <Form.Input fluid label='Swim' placeholder='ft.' readOnly />
                <Form.Input fluid label='Fly' placeholder='ft.' readOnly />
                <Form.Input fluid label='Climb' placeholder='ft.' readOnly />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Input fluid placeholder='sq.' readOnly />
                <Form.Input fluid placeholder='sq.' readOnly />
                <Form.Input fluid placeholder='sq.' readOnly />
                <Form.Input fluid placeholder='sq.' readOnly />
                <Form.Input fluid placeholder='sq.' readOnly />
            </Form.Group>
        </Segment>
    </Segment.Group>
)

export default BaseStatsComponent