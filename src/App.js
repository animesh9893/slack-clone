import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import db from './firebase';
import {useEffect, useState} from 'react';
import {auth} from './firebase'

function App() {

  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot)=>{
      setRooms(snapshot.docs.map((doc)=>{
        return {id: doc.id, name:doc.data().name}
      }))
    })
  }

  const signOut = () =>{
    auth.signOut().then(()=>{
      localStorage.removeItem('user');
      setUser(null);
    })
  }

  useEffect(()=>{
    getChannels()
  },[])

  // console.log(rooms);
  
  
  
  return (
    <div className="App">
      <Router>
        {
          !user ? 
          <Login setUser={setUser}/> : 
          <Container>
            <Header user={user} signOut={signOut}/>
            <Main>
              <Sidebar rooms={rooms}/>
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user={user}/>
                </Route>
                <Route path="/">
                  Select or Create Channel
                </Route>
                {/* <Route path="/">
                  <Login />
                </Route> */}
              </Switch>
            </Main>
          </Container>
        }
        
        
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display:grid;
  grid-template-rows: 30px minmax(0,1fr);
`
const Main = styled.div`

  display:grid;
  grid-template-columns : 260px auto;
`