import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Joinpage = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState(''); // set room id
  const [username, setUsername] = useState(''); // set username

  const createNewRoom = (e) => {
    e.preventDefault(); // For remove reloading
    const id = uuidv4(); // Grenertating unique id's
    setRoomId(id);
    toast.success('Room created'); // For popup toast
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error('Username & ROOM ID is required');
      return;
    }

    //Redirection to editor page

    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (e) => {
    //  console.log('event',e.code);
    if (e.code === 'Enter') {
      joinRoom();
    }
  };

  return (
    <>
      {/* <Particle color='#101010' /> */}
      <div className='joinPageWrapper'>
        <div className='formWrapper'>
          <span className='join_logo'>CodeFusion</span>
          <div className='mainLabel'>Paste Invitation Room ID </div>

          <input
            type='text'
            className='inputBox'
            placeholder='ROOM ID'
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
          />
          <br />
          <input
            type='text'
            className='inputBox'
            placeholder='USERNAME'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyUp={handleInputEnter}
          />
          <br />
          <div className='button-container'>
            <button className='joinBtn' onClick={joinRoom}>
              Join
            </button>
          </div>
          <h5 className='createInfo'>
            If You Don't have an invite then create &nbsp;
            <a onClick={createNewRoom} href='/' className='createNewBtn'>
              New Room
            </a>
          </h5>
        </div>
      </div>
    </>
  );
};

export default Joinpage;
