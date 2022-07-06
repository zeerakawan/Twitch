import { useEffect } from "react";

import { connect } from "react-redux";
import { fetchStreams } from "../../redux/actions/actions";

const StreamList = (props) => {
  useEffect(() => {
    props.fetchStreams();
  }, [props]);

  const renderList = () => {
    return props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <h2>Streams List</h2>
      <div className="ui celled list">{renderList()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // OBJECT.VALUES converts the object values into arrays
  return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
