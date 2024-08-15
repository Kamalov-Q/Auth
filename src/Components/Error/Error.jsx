/* eslint-disable no-unused-vars */
import "./Error.css";
import notFound from '/not.png'
const Error = () => {
  return (
    <div className="Error">
      <div>
        <img src={notFound} className="Error_image" alt="Error Image" />
      </div>
      <div> 404 Page Not Found</div>
    </div>
  );
};

export default Error;
