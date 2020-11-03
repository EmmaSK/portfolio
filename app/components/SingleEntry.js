import React from "react";
import { connect } from "react-redux";
import { fetchSingleEntry } from "../redux/singleEntry";
import { AllEntries } from "./index";
class SingleEntry extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    try {
      this.props.loadEntry(this.props.match.params.id);
    } catch (err) {
      console.error(err);
    }
  }

  handleChange() {
    // event.preventDefault();
    if (this.props.entry.id !== this.props.match.params.id) {
      this.props.entry = this.props.match.params;
      this.props.loadEntry(this.props.match.params.id);
    }
  }
  render() {
    const entry = this.props.entry;
    // let author = entry.author ? entry.author.handle : " Anonymous";
    if (!entry.id) {
      return <div>Not found!</div>;
    }

    console.log("entry", entry);
    return (
      <div id="singleEntry">
        <AllEntries changeEntry={this.handleChange} />
        <div>
          <div>{entry.title}</div>
          {/* <div>by {author}</div> */}
          <div>{entry.date}</div>
          <img src={entry.imageUrl} />
          <div>{entry.content}</div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return { entry: state.entry };
};

const mapDispatch = (dispatch) => {
  return { loadEntry: (id) => dispatch(fetchSingleEntry(id)) };
};
export default connect(mapState, mapDispatch)(SingleEntry);
