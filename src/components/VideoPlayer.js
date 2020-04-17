import React from "react";

//엡에서 받아야 하는 것이, 1. src 주소     2. 비디오 title     3. 비디오 description
//맘에 걸리는게, app 컴포넌트에서 state로 값을 playing 객체를 주고, 따로 뺄수는 잇겟지만
//iframe의 src는 어떻게 처리하는거야? 저 값을 어디서 가져오는겨??
//fakeData는 연습하ㄴ는거니까..고양이 사진, 저걸로 연습하란 뜻인가
// 테스트케이스에 보면 이렇게 뒤에 url만 바꾸면 되는거 아닌가...그럼 저거는 어떻게 나타내?...
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
