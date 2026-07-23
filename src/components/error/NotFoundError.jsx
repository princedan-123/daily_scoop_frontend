export default function NotFoundError({ section }) {
  return (
    <div className="w-screen  flex flex-col justify-center items-center">
    <div className="w-1/2 h-1/2  shadow-md rounded-2xl flex flex-col justify-center items-center p-2">
      <div>
        <img src="/not_found.svg" alt="Not found" className="w-64 h-64" />
      </div>
      <h3>{section} Not found! </h3>
    </div>
    </div>
  );
}
