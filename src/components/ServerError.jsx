export default function SeverError({ section }) {
  return (
    <div className="w-screen  flex flex-col justify-center items-center">
    <div className="w-1/2 h-1/2  shadow-md rounded-2xl flex flex-col justify-center items-center p-2">
      <div>
        <img src="/server_error.svg" alt="server error" className="w-64 h-64" />
      </div>
      <h3> 🤖 internal sever Error occured in {section} </h3>
    </div>
    </div>
  );
}
