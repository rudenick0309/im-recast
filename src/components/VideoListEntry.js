import React from "react";

const VideoListEntry = (props) => (
  <div
    className="video-list-entry"
    onClick={function (e) {
      const parentNodeOfTarget = e.target.parentNode.parentNode;

      e.preventDefault();
      console.log("이벤트 찾자", parentNodeOfTarget); //e.target으로 했을때, html태그가 같이 들어오네?
      console.log("최하 엔트리 props", props.onClickEvent);
      props.onClickEvent(
        parentNodeOfTarget.childNodes[0].childNodes[0].src,
        parentNodeOfTarget.childNodes[1].childNodes[0].textContent,
        parentNodeOfTarget.childNodes[1].childNodes[1].textContent
      ); //e.target.title과 e.target.desc를 잡아낼수잇으면 state를 변경할수잇을텐데
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
