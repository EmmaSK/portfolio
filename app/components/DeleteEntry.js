import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { deleteEntry } from "../redux/allEntries";

class DeleteEntry extends React.Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
  }
  async handleDelete(event) {
    event.preventDefault();
    await this.props.delete(this.props.entry);
  }

  render() {
    return (
      <button type="button" onClick={(e) => this.handleDelete(e)}>
        X
      </button>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    delete: (input) => {
      dispatch(deleteEntry(input));
    },
  };
};
export default connect(null, mapDispatch)(DeleteEntry);
