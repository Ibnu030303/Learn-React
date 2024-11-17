// components/Spinner.js
const Spinner = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen space-x-2 animate-pulse">
      <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
      <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
      <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
    </div>
  );
};

export default Spinner;
