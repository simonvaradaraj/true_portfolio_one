import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {

  // gets the loading progress from the useProgress function
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {/* Progress of the load at a precision of decimals */}
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;