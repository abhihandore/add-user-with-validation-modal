import React,{ useState } from 'react';
import NewUser from './components/NewUser/NewUser';
import Modal from './components/UI/Modal';
import UsersList from './components/UsersList/UsersList';

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
      { openModal && <Modal className="modal-error" includes={error} onOkClick={onOkClickHandler} /> }
      <div className="App">
        <NewUser 
        onGettingError={onGettingErrorHandler} 
        onAddUserData={onAddUserDataHandler}
        />
        { users.length && <UsersList usersList={users} /> } 
      </div>
    </React.Fragment>
    
  );
}

export default App;
