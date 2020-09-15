import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchEntries } from "../redux/allEntries";

class AllEntries extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.loadEntries();
  }

  render() {
    const { entries } = this.props.entries;
    console.log(entries);

    return (
      <div className="main">
        <div className="title">Blog coming soon!</div>
        <div className="all">
          {entries.map((entry) => (
            <Link to={`/entries/${entry.id}`} key={entry.id}>
              <div>
                {entry.title} by{" "}
                {entry.author ? entry.author.handle : "Anonymus"}
              </div>
            </Link>
          ))}
        </div>
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
