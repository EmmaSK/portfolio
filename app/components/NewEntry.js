import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { addNewEntry } from "../redux/allEntries";

// import { addNewCampus } from "../redux/campuses";
class NewEntry extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      imageUrl: "",
      content: "",
      tags: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    // const name = event.target.name.value;
    // const address = event.target.address.value;
    // const res = await axios.post("/api/campuses", {
    //   name: name,
    //   address: address,
    // })
    this.props.add(this.state);

    this.props.new();
    this.props.close();
    // this.setState({ title: "", imageUrl: "", content: "", tags: "" });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    const show = this.props.show;
    const close = this.props.close;
    const submit = this.handleSubmit;
    return (
      <div id="modal">
        <Modal show={show} onHide={close} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>New Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <for onSubmit={this.handleSubmit}>
              <Row>
                <Col>
                  <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="string" placeholder={""} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="imageUrl">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="string" placeholder={""} />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="content">
                    <Form.Label>Content</Form.Label>
                    <Form.Control type="string" placeholder={""} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="tags">
                    <Form.Label>Tags</Form.Label>
                    <Form.Control type="string" placeholder={""} />
                  </Form.Group>
                </Col>
              </Row>
            </for> */}
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
              <label htmlFor="imageUrl">Image:</label>
              <input
                type="text"
                name="imageUrl"
                value={this.state.imageUrl}
                onChange={this.handleChange}
              />
              <label htmlFor="content">Content:</label>
              <input
                type="text"
                name="content"
                value={this.state.content}
                onChange={this.handleChange}
              />
              <label htmlFor="tags">Tags:</label>
              <input
                type="text"
                name="content"
                value={this.state.tags}
                onChange={this.handleChange}
              />
              <br />
              <button type="submit">Submit</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={submit}>
              Post
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    add: (input) => {
      dispatch(addNewEntry(input));
    },
  };
};
export default connect(null, mapDispatch)(NewEntry);
