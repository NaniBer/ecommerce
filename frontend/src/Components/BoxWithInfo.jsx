const BoxWithInfo = (props) => {
  return (
    <div className="bg-white  w-1/4 flex flex-col items-center justify-center p-5 m-9 rounded-lg">
      <img
        src={require(`../Assets/${props.path}.png`)}
        className="h-28 w-28"
        alt=""
      />

      <p className="text-4xl mb-7 w-80">{props.title}</p>
      <p className="text-lg w-80 text-left mb-8">{props.description}</p>
    </div>
  );
};
export default BoxWithInfo;
