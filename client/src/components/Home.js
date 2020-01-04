import { Header, Grid, Image, } from 'semantic-ui-react';
import React from 'react';

const Home = () => (
  <>
    <br />
    <Header as="h3" textAlign="left">All Videos</Header>
    <div>
      <br />
      <Grid align="left" columns={2}>
        <Grid.Column>
          <Image style={one} src='https://www.globalresearch.ca/wp-content/uploads/2017/07/Trump-Dictator-1024x538.png' />
          <h3>GINYU FORCE</h3>
        </Grid.Column>
        <Grid.Column>
          <Grid columns={2}>
            <div className="grid">
              <br />
              <Image style={two} src='https://www.globalresearch.ca/wp-content/uploads/2017/07/Trump-Dictator-1024x538.png' />
              <h4>GINYU FORCE</h4>
              <br />
              <Image style={two} src='https://www.globalresearch.ca/wp-content/uploads/2017/07/Trump-Dictator-1024x538.png' />
              <h4>GINYU FORCE</h4>
              <br />
            </div>
            <br />
            <div className="grid">
              <br />
              <Image style={two} src='https://www.globalresearch.ca/wp-content/uploads/2017/07/Trump-Dictator-1024x538.png' />
              <h4>GINYU FORCE</h4>
              <br />
              <Image style={two} src='https://www.globalresearch.ca/wp-content/uploads/2017/07/Trump-Dictator-1024x538.png' />
              <h4>GINYU FORCE</h4>
              <br />
            </div>
          </Grid>
        </Grid.Column>

      </Grid>
      <br /> <br />
    
        <Grid columns={4}>
          <Grid.Column>
          
              <Image style={four} src='https://www.globalresearch.ca/wp-content/uploads/2017/07/Trump-Dictator-1024x538.png' />
              <h3>GINYU FORCE</h3>
            
          </Grid.Column>
          <Grid.Column>
          
              <Image style={four} src='https://www.globalresearch.ca/wp-content/uploads/2017/07/Trump-Dictator-1024x538.png' />
              <h3>GINYU FORCE</h3>
            
          </Grid.Column>
          <Grid.Column>
          
              <Image style={four} src='https://www.globalresearch.ca/wp-content/uploads/2017/07/Trump-Dictator-1024x538.png' />
              <h3>GINYU FORCE</h3>
            
          </Grid.Column>
          <Grid.Column>
          
              <Image style={four} src='https://www.globalresearch.ca/wp-content/uploads/2017/07/Trump-Dictator-1024x538.png' />
              <h3>GINYU FORCE</h3>
            
          </Grid.Column>
        </Grid>
      
      <Grid columns={4}>
        <Grid.Column>
        
            <Image style={four} src='https://www.globalresearch.ca/wp-content/uploads/2017/07/Trump-Dictator-1024x538.png' />
            <h3>GINYU FORCE</h3>
          
        </Grid.Column>
        <Grid.Column>
        
            <Image style={four} src='https://www.globalresearch.ca/wp-content/uploads/2017/07/Trump-Dictator-1024x538.png' />
            <h3>GINYU FORCE</h3>
          
        </Grid.Column>
        <Grid.Column>
        
            <Image style={four} src='https://www.globalresearch.ca/wp-content/uploads/2017/07/Trump-Dictator-1024x538.png' />
            <h3>GINYU FORCE</h3>
          
        </Grid.Column>
        <Grid.Column>
        
            <Image style={four} src='https://www.globalresearch.ca/wp-content/uploads/2017/07/Trump-Dictator-1024x538.png' />
            <h3>GINYU FORCE</h3>
        
        </Grid.Column>
      </Grid>
    </div>
  </>
);

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
