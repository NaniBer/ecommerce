const BoxWithInfo = (props) => {
  return (
    <div className="bg-neutral-300 lg:w-1/4  flex flex-col items-center justify-center p-5 m-9 rounded-lg text-center">
      <img
        src={require(`../Assets/${props.path}.png`)}
        className="h-28 w-28 "
        alt=""
      />

      <p className="lg:text-4xl text-3xl mb-7 w-80 font-semibold">
        {props.title}
      </p>
      <p className="text-lg  w-80 text-left mb-8">{props.description}</p>
    </div>
  );
};
export default BoxWithInfo;
