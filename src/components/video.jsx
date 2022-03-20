import ReactPlayer from "react-player/lazy";

export const Video = () => {
  return (
    <>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={"https://www.youtube.com/embed/nW7vlXCeI9M"} // 플레이어 url
          width="100%" // 플레이어 크기 (가로)
          height="100%" // 플레이어 크기 (세로)
          playing={true} // 자동 재생 on
          muted={true} // 자동 재생 on
          loop={true}
          controls={false} // 플레이어 컨트롤 노출 여부
          light={false} // 플레이어 모드
          pip={true} // pip 모드 설정 여부
        />
      </div>
    </>
  );
};
// return (
//   <Player autoPlay loop fluid playsInline src="videos/gachisaja_video.mp4">
//     <ControlBar disableCompletely={true} />
//   </Player>
// );
{
  /* <>
<div className="player-wrapper">
  <ReactPlayer
    className="react-player"
    url={
      "https://drive.google.com/file/d/1d13JNE5O8van5BUlPmvOt2aCB6y1ovNR/view?usp=sharing"
    }
    playsinline={true}
    playing={true} // 자동 재생 on
    muted={true} // 자동 재생 on
    controls={false} // 플레이어 컨트롤 노출 여부
    light={false} // 플레이어 모드
    pip={true} // pip 모드 설정 여부
    width="100%"
    height="100%"
  />
</div>
</> */
}
