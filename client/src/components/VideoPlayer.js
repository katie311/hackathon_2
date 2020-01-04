import React from 'react';
import { Header, Container, Segment, Grid, Button, GridColumn, Divider, Card, Image } from 'semantic-ui-react';
import Iframe from 'react-iframe';

const VideoPlayer = () => (
    <Container> 
<Segment basic textAlign='center'>
<Iframe url="https://www.youtube.com/embed/RySHDUU2juM"
        width="640px"
        height="360px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        />
        </Segment>

  <Segment>
  <Grid>
      <Grid.Row>
      <GridColumn width={8}>
  <Header>Video Title</Header>
  <p>Video Description</p>
  </GridColumn>
  <GridColumn floated="right" width={4}>
  </GridColumn>
  <GridColumn floated="right"  width={4}>
      <Button icon='thumbs up outline'></Button>
      <Button icon='thumbs down outline'></Button>
  </GridColumn>
  </Grid.Row>
  <Divider/>
  <Grid.Row>
  <GridColumn width={8}>
  <Card>
      <Card.Content>
        <Image
          floated='left'
          size='mini'
          src='user.png'
        />
        <Card.Header>Username</Card.Header>
        <Card.Meta>subscriber count?</Card.Meta>
        <Card.Description>
            bio goes here
        </Card.Description>
      </Card.Content>
    </Card>
  </GridColumn>
  <GridColumn floated="right" width={4}>
  </GridColumn>
  <GridColumn floated="right"  width={4}>
      <Button color='red' >Add friend</Button>
  </GridColumn>
  </Grid.Row>
  </Grid>
  </Segment>
  <Grid>
      <GridColumn width={8}>
  <Header>Comments</Header>
  </GridColumn>
  <GridColumn floated="right" width={4}>
  <Header>Other Videos</Header>
  </GridColumn>
  <GridColumn floated="right"  width={4}>
  </GridColumn>
  </Grid>
  
  <Grid>
      <Grid.Row>
    <Grid.Column width={8}>
    <Segment>
      <p>Add comment field</p>
  </Segment>
    </Grid.Column>
    <Grid.Column  width={4}>
        <Iframe url="http://www.youtube.com/embed/WWINlGQxrZM"
        width="256px"
        height="144px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </Grid.Column>
    <Grid.Column  width={4}>
        <p>Video description goes here Video description goes here Video description goes here Video description goes here Video description goes here</p>
    </Grid.Column>
    </Grid.Row>
  </Grid>

  </Container>
    
);

export default VideoPlayer;