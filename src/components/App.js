import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

import { fakeData } from "./__test__/fakeData";
// console.log("app에서의 ", fakeData);

// const App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer/>
//     </div>
//     <div className="col-md-5">
//       <VideoList/>
//     </div>
//   </div>
// );

// etag: 'L332gQTY',
//   id: {
//     videoId: '000001'
//   },
//   snippet: {
//     title: 'Cute cat video',
//     description: 'The best cat video on the internet!',
//     thumbnails: {
//       default: {
//         url: 'https://i.redd.it/oa78q1ng7lc01.jpg',
//       }
//     }
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: fakeData,
      playing: {
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
        title: "Video Title",
        desc: "Video Description",
      },
    };
    console.log("앱 안의 컨스트럭터 ", this.state.entry);
  }

  render() {
    // var deliveryData = this.state;
    console.log("App 안의 렌더 메소드", this.state);
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer data={this.state.playing} />
        </div>
        <div className="col-md-5">
          <VideoList
            data={this.state.entry}
            onClickHandler={function (_src, _title, _desc) {
              // e.preventDefault();
              this.setState({
                playing: {
                  src: _src,
                  title: _title,
                  desc: _desc,
                },
              });
            }.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
