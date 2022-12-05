import YouTube from "react-youtube";

const NotFound = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="text-5xl">
      WHAT ARE YOU DOING?? THAT PAGE DOESNT EXIST???
      <YouTube videoId="dQw4w9WgXcQ" opts={opts} />
    </div>
  );
};

export default NotFound;
