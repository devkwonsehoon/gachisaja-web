import ReactPlayer from "react-player/lazy";

export const Video = () => {
  return (
    <>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          }
          width="100%" // 플레이어 크기 (가로)
          height="100%" // 플레이어 크기 (세로)
          playing={true} // 자동 재생 on
          loop={true}
          muted={true} // 자동 재생 on
          controls={false} // 플레이어 컨트롤 노출 여부
          light={false} // 플레이어 모드
          pip={true} // pip 모드 설정 여부
          poster={
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
          } // 플레이어 초기 포스터 사진
        />
      </div>
    </>
  );
};
