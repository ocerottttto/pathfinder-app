import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const PageHeaderComponent = () => (
  <Header as='h1' attached='top'>
    <Icon name='settings' />
    <Header.Content>
      Character
      <Header.Subheader>Create your character</Header.Subheader>
    </Header.Content>
  </Header>
)

export default PageHeaderComponent