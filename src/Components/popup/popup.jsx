import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const MyPopup = ({ isAuthenticated }) => (
  <>
    {isAuthenticated ? (
      <Popup trigger={<button> Trigger</button>} position="right center">
        <div>login first !!</div>
      </Popup>
    ) : (
      // Render nothing if the user is authenticated
      null
    )}
  </>
);

export default MyPopup;
