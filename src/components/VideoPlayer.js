import React from "react";

//엡에서 받아야 하는 것이, 1. src 주소     2. 비디오 title     3. 비디오 description
//맘에 걸리는게, app 컴포넌트에서 state로 값을 playing 객체를 주고, 따로 뺄수는 잇겟지만

//  expect(superCuteCatVideo.find(selector).props().src).toBe('https://www.youtube.com/embed/000002');
//       25 |     expect(codeStatesVideo.find(selector).props().src).toBe('https://www.youtube.com/embed/000003')

const VideoPlayer = (props) => (
  <div className="video-player">
    {console.log("비디오플레이어 안에서", props.data)}
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        src={props.data.src}
        allowFullScreen
      ></iframe>
    </div>
    <div className="video-player-details">
      <h3>{props.data.title}</h3>
      <div>{props.data.desc}</div>
    </div>
  </div>
);

export default VideoPlayer;
