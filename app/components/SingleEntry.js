import React from "react";
import { connect } from "react-redux";
import { fetchSingleEntry } from "../redux/singleEntry";
import { AllEntries } from "./index";
class SingleEntry extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    try {
      this.props.loadEntry(this.props.match.params.id);
    } catch (err) {
      console.error(err);
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
        <AllEntries />
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
