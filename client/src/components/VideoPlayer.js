import React, { useEffect, useState } from 'react';
import { Link}  from 'react-router-dom';
import Axios from 'axios';
import { Header, Container, Segment, Grid, Button, GridColumn, Divider, Card, Image } from 'semantic-ui-react';
import userImage from '../images/user.png';
import Iframe from 'react-iframe';

const VideoPlayer = (props) => {
    const [video, setVideo] = useState([]);
    const [user, setUser] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect( () => {
        Axios.get(`/api/videos/${props.match.params.id}`)
            .then( res => {
                setVideo(res.data.video);
                setUser(res.data.user);
                setComments(res.data.comments)
            } )
    }, []);
    return (

    <Container> 
<Segment basic textAlign='center'>
<Iframe url={video.trailer}
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
  <Header>{video.title}</Header>
  <p>{video.description}</p>
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
          src= {userImage}
        />
        <Card.Header>{user.nickname}</Card.Header>
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
    <Grid.Row>
    <Grid.Column width={8}>
    {comments.map(comment => (
        <Card>
        <Card.Content>
            <Image
              floated='left'
              size='mini'
              src= {userImage}
            />
            <Card.Header>{user.nickname}</Card.Header>
            <Card.Description>
                {comment.body}
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
  
    </Grid.Column>
    <Grid.Column  width={4}>
        <Iframe url="https://www.youtube.com/embed/1w8Z0UOXVaY"
        as={Link} to={`/videos/7`}
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
    
)};

export default VideoPlayer;