import React from "react";

const VideoListEntry = (props) => (
  <div
    className="video-list-entry"
    onClick={function (e) {
      console.log("이벤트 찾자", e.target); //e.target으로 했을때, html태그가 같이 들어오네?
      console.log("최하 엔트리 props", props.onClickEvent);
      props.onClickEvent(1, 2, 3); //e.target.title과 e.target.desc를 잡아낼수잇으면 state를 변경할수잇을텐데
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
  </div>
);

export default VideoListEntry;
