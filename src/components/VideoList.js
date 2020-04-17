import React from "react";
import VideoListEntry from "./VideoListEntry";

// 실제 API를 쓰게 되면 이 fakeData는 더이상 import 하지 않아야 합니다.
// import { fakeData } from "./__test__/fakeData";
// console.log(fakeData);
// const data = fakeData;

const VideoList = (props) => (
  <div className="video-list media">
    {console.log("비디오리스트의 프랍, 얘는 객체다 배열 아님", props)}
    {props.data.map((data) => (
      <VideoListEntry
        data={data}
        key={data.id.videoId}
        onClickEvent={props.onClickHandler}
      />
    ))}
  </div>
);

export default VideoList;
