import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchEntries } from "../redux/allEntries";
import Modal from "react-bootstrap/Modal";
// import Modal from "react-modal";
import Button from "react-bootstrap/Button";
import NewEntry from "./NewEntry";

class AllEntries extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleNew = this.handleNew.bind(this);
  }

  componentDidMount() {
    this.props.loadEntries();
  }

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => this.setState({ show: true });

  handleNew = () => {
    this.props.loadEntries();
  };

  render() {
    const { entries } = this.props.entries;
    console.log(entries);

    return (
      <div className="main">
        {/* <div className="title">Blog coming soon!</div> */}

        <div
        // className="all">
        >
          {entries.map((entry) => (
            <Link to={`/entries/${entry.id}`} key={entry.id}>
              <div>
                {entry.title} by{" "}
                {entry.author ? entry.author.handle : "Anonymus"}
              </div>
            </Link>
          ))}
        </div>

        <NewEntry
          close={this.handleClose}
          show={this.state.show}
          new={this.handleNew}
        />

        <Button variant="light" onClick={this.handleShow}>
          New Post
        </Button>
      </div>
    );
  }
}

const mapState = (state) => {
  return { entries: state.entries };
};
const mapDispatch = (dispatch) => {
  return { loadEntries: () => dispatch(fetchEntries()) };
};

export default connect(mapState, mapDispatch)(AllEntries);
