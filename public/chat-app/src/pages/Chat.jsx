import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Contacts from '../components/Contacts';
// import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { allUsersRoute } from '../utils/APIRoutes';

const Chat = () => {

  const navigate = useNavigate();
  const [contacts,setContacts] = useState([])
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState({
    avatarImage: "",
    email: "",
isAvatarImageSet: "",
password:"",
username:"",
_id: ""
  });
 const sagar = async () =>{
 
    let sahar= await JSON.parse(
      localStorage.getItem("chat-app-user")
   )

   console.log(sahar)
 
   console.log(currentUser)

  
 }

  useEffect(async ( ) => {
    if (currentUser) {
      if(currentUser.isAvatarImageSet){
        const data = await axios.get(`${allUsersRoute}/${currentUser._id}`)
        setContacts(data.data)
      } else {
        navigate("/setAvatar")
      }
    }
  }, [currentUser]);

  useEffect( async() => {
    if (!localStorage.getItem("chat-app-user")) {
      navigate("/login");
    } else {
      //  sagar()
    }
  }, []);
  return (
    <>
    <Container>
      <div className="container">
        <Contacts contacts={contacts}  /> 
dcvf
      </div>
    </Container>
  </>
  )
}
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  .container {
    height: 85vh;
    width: 85vw;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;

export default Chat