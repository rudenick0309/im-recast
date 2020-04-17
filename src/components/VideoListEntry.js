import React from "react";

const VideoListEntry = (props) => (
  <a
    className="video-list-entry"
    onClick={function (e) {
      console.log("최하 엔트리 props", props.onClickEvent);
      props.onClickEvent();
      e.preventDefault();
    }}
  >
    {/* {console.log("비디오엔트리 리스트의 프랍", props)} */}
    <div className="media-left media-middle">
      <img
        className="media-object"
        src={props.data.snippet.thumbnails.default.url}
        alt=""
      />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{props.data.snippet.title}</div>
      <div className="video-list-entry-detail">
        {props.data.snippet.description}
      </div>
    </div>
  </a>
);

export default VideoListEntry;
