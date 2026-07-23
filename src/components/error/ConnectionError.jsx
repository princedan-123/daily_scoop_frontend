export default function ConnectionError({ section, message }) {
  return (
    <div className="w-screen  flex flex-col justify-center items-center">
      <div className="w-1/2 h-1/2  shadow-md rounded-2xl flex flex-col justify-center items-center p-2">
        <div>
          <img
            src="no-internet.png"
            alt="connection error"
            className="w-64 h-64"
          />
        </div>
        <h3>
          {" "}
          Error occured in {section} section: {message}{" "}
        </h3>
      </div>
    </div>
  );
}
