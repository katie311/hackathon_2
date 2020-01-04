import React from 'react'
import { Form, Header, } from "semantic-ui-react"
import axios from 'axios'

class VideoForm extends React.Component {
  defaultValues = {
    title: "",
    genre: "",
    description: "",
    trailer: "",
  }

  state = { ...this.defaultValues, }

  handleSubmit = (e) => {
    e.preventDefault()
    const video = { ...this.state, }
    axios.post("/api/videos", video)
    .then( res => {
      this.props.history.push("/");
    })
   this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e
    this.setState({ [name]: value, })
  }

  render() {
    const { title, genre, description, trailer } = this.state

    return (
      <div>
        <br />
        <Header as="h1"> New Video </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Title"
              name="title"
              placeholder="Video Title"
              value={title}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Genre"
              name="genre"
              placeholder="Genre"
              value={genre}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Input
            label="Video URL"
            name="trailer"
            placeholder="Video link goes here"
            value={trailer}
            onChange={this.handleChange}
            required
          />
          <Form.TextArea
            label="Description"
            name="description"
            placeholder="Description..."
            value={description}
            onChange={this.handleChange}
          />
        <Form.Button color="red"> Create </Form.Button>
        </Form>
        <br />
      </div>
    )
  }

}

export default VideoForm;