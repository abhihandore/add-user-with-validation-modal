import React,{ useState } from 'react';
import NewUser from './components/NewUser/NewUser';
import Modal from './components/UI/Modal';
import UsersList from './components/UsersList/UsersList';
import Overlay from './components/UI/Overlay';
import ReactDOM from 'react-dom';

function App() {

  const [users, setUsers] = useState([]);
  const [openModal,setOpenModal] = useState(false);
  const [error, setError] = useState();

  const onGettingErrorHandler = (error) => {
    setError(error);
    setOpenModal(true);
  }
  const onOkClickHandler = () => {
    setError(null);
    setOpenModal(false);
  }
  const onAddUserDataHandler = (data) => {
    setUsers( (prevData) => {
      return [data,...prevData];
    })
  }

  return (
    <React.Fragment>
      {openModal && // If OpenModal True
        <React.Fragment>
        {ReactDOM.createPortal( // Contains two parameters - first -> component calling and second -> destination
                <Overlay onClick={onOkClickHandler} />, 
                document.getElementById('backdrop-root')
                )
        }
        {ReactDOM.createPortal( 
                <Modal className="modal-error" includes={error} onOkClick={onOkClickHandler} />, 
                document.getElementById('overlay-root')
                )
        }
        </React.Fragment>
      }
        
      <NewUser 
        onGettingError={onGettingErrorHandler} 
        onAddUserData={onAddUserDataHandler}
      />

      { users.length && 
        <UsersList 
        usersList={users} 
        /> 
      }
    </React.Fragment>
    
  );
}

export default App;
