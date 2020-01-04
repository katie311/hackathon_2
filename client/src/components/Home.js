import Axios from 'axios';
import { Header, Grid, Image, Card} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Home = (props) => {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect( () => {
      Axios.get(`/api/videos`)
          .then( res => {
              setVideos(res.data);
          } )
  }, []);
  
  return (
  <>
    <br />
    <Header as="h3" textAlign="left">All Videos</Header>
    <div>
      <br />
      <Grid align="left" columns={2}>
        
        <Grid.Column>
        <Image 
        as={Link} to={`/videos/1`}
        style={one}
        src='https://www.globalresearch.ca/wp-content/uploads/2017/07/Trump-Dictator-1024x538.png'/>
        <h3>{video.title}</h3>
        </Grid.Column>
        <Grid.Column>
          <Grid columns={2}>
            <div className="grid">
              <br />
              <Image 
              as={Link} to={`/videos/2`}
              style={two} src='https://www.globalresearch.ca/wp-content/uploads/2017/07/Trump-Dictator-1024x538.png' />
              <br />
              <Image 
              as={Link} to={`/videos/3`}
              style={two} 
              src='https://www.globalresearch.ca/wp-content/uploads/2017/07/Trump-Dictator-1024x538.png' />
              <h3>{video.title}</h3>
              <br />
            </div>
            <br />
            <div className="grid">
              <br />
              <Image 
              as={Link} to={`/videos/4`}
              style={two} 
              src='https://www.globalresearch.ca/wp-content/uploads/2017/07/Trump-Dictator-1024x538.png' />
              
              <br />
              <Image as={Link} to={`/videos/5`}
              style={two} 
              src='https://www.globalresearch.ca/wp-content/uploads/2017/07/Trump-Dictator-1024x538.png' />
              
              <br />
            </div>
          </Grid>
        </Grid.Column>

      </Grid>
      <br /> <br />
      
        <Grid columns={4}>
        {videos.map(video => (
          <Grid.Column>
          
              <Image 
              as={Link} to={`/videos/6`}
              style={four} 
              src='https://www.globalresearch.ca/wp-content/uploads/2017/07/Trump-Dictator-1024x538.png' />
              <h3>{video.title}</h3>
            
          </Grid.Column>
          ))}

        </Grid>
      
      <Grid columns={4}>


        <Grid>
        <Grid.Column width={8}>
          <Grid.Row>
  </Grid.Row>
    </Grid.Column>
    </Grid>
      </Grid>
    </div>
  </>
  )};

const one = {
  height: '385px',
  width: '700px'
}

const four = {
  height: '150px',
  width: '220px'
}

const two = {
  height: '150px',
  width: '220px'
}

export default Home;
