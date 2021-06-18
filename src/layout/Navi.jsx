import React,{useState} from 'react'
import { useHistory } from 'react-router'
import { Redirect } from 'react-router-dom'
import { Menu,Button,Container} from 'semantic-ui-react'
import JobsList from '../pages/JobsList'
import SignedIn from './SignedIn'
import SignOut from './SignedOut'

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history=useHistory()

  function handleSignOut(params) {
      setIsAuthenticated(false)
      history.push("/")
  }

  function handleSignIn(params) {
      setIsAuthenticated(true)
      
  }

  function handleRouteMain(params){
    history.push("/")
  }

  function handleRoutCompany(params){
    history.push("/employers")
  }


  function handleRouteSeeker(params){
    history.push("/jobseekers")
  }

  



  return (
    <div>
       <Menu >
       <Container>
        <Menu.Item onClick={handleRouteMain}
          name='Anasayfa'
          
        />
        <Menu.Item onClick={handleRoutCompany}
          name='Firmalar'
          
        />
        <Menu.Item onClick={handleRouteSeeker}
          name='Adaylar'

        
        />

        <Menu.Item position = "right">          
        {isAuthenticated? <SignedIn signOut={handleSignOut} bisey="1"/>:<SignOut signIn={handleSignIn}/>}
          </Menu.Item>
      

        </Container>
      </Menu>
      
    </div>
  )
}
