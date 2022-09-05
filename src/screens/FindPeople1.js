import Search from '@mui/icons-material/Search'
import { AppBar, InputBase, Toolbar, Button, Avatar } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followRequest, getFollow } from '../actions/followActions';
import { people } from '../actions/peopleActions';
import { MDBCol } from "mdbreact";
import { useNavigate } from 'react-router-dom';
import '../components/myStyles.css'
import SearchIcon from '@mui/icons-material/Search';
import { BottomNav } from '../components/BottomNav'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Row } from 'react-bootstrap'
import { Col, Card, Image, Alert } from 'react-bootstrap';





const FindPeople = () => {
    const [message, setMessage] = useState("")
    const [variant, setVariant] = useState("")

    const dispatch = useDispatch()


    const peopleSelector = useSelector(state => state.people)

    const followSelector = useSelector(state => state.follow)

    const getFollowSelector = useSelector(state => state.getFollow)

    const redirect = "/"

    const history = useNavigate()

    const OnChangeHandler = (e) => {
        const value = e.target.value
        dispatch(people(value))
    }

    let token = ""

    let jsonUser = ""

    let followStatus = ""

    let color = ""

    let following_list = []

    if (localStorage.getItem("userInfo")) {
        jsonUser = JSON.parse(localStorage.getItem("userInfo"))

    }

    useEffect(() => {
        const user = localStorage.getItem("userInfo")

        if (!user) {
            history(redirect)
        }

        token = "Bearer " + jsonUser.token

        dispatch(getFollow(token))
    }, [])

    const followHandler = (id) => {
        window.scrollTo(0, 0);
        const action = id.target.innerHTML
        id = id.target.value
        const user_id = JSON.parse(localStorage.getItem("userInfo")).id

        dispatch(followRequest(user_id, id, action))
        window.location.reload()

        if (action == "Follow") {
            setMessage("Followed!")
            setVariant("success")
        } else if (action == "Unfollow") {
            setMessage("Unfollowed!")
            setVariant("danger")
        } else {
            setMessage("Canceled Follow Request!")
            setVariant("warning")
        }
    }





 const inputWrapper = {
    backgroundColor:'#FFFFFF',
    borderRadius:104,
    marginTop:47,
    color:'#1E8582',
    padding:'6px 79.5px',
    height:44,
    display:'flex',
    alignItems:'center'

 }
 const cardStyle = {
    borderRadius: 16,
    marginTop: 16,
    marginRight: 24,
    marginLeft: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 76,
    alignItems: 'center'
}
const detailStyle = {
    padding:16,
    gap:16,
   
}

      
  return (
    <Container style={{maxWidth:505, padding:0}}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor:'#1976d200'}} elevation={0}>
                <Toolbar  sx={{display:'flex', justifyContent:'center'}}>
                
                    <Row style={inputWrapper}>
                    <SearchIcon sx={{padding:0, alignItems:'center'}} />
                    <InputBase
                    onChange={(e) => OnChangeHandler(e)}
                        sx={{ ml: 1, flex: 1, padding:0 }}
                        placeholder="FIND NEW PEOPLE..."
                        inputProps={{ 'aria-label': 'search', style: {fontSize:12, color:'#1E8582'}  }}
                    />
                    </Row>  
                </Toolbar>
            </AppBar>
        </Box>
        <div style={{ marginTop: 20, flexDirection: 'column-reverse', display: 'flex' }}>
        {
                getFollowSelector.allFollowInfo ? getFollowSelector.allFollowInfo[0].map((element) => {
                    following_list.push([element.followed_user, element.status])
                }) : ""
            }

            {peopleSelector.peopleInfo && peopleSelector.peopleInfo.map((e) => {
                const id = e[0].id
                return (
                    <div style={cardStyle} key={e[0].id}>
                    
                        <Row style={detailStyle}>

                            <Col style={{paddingLeft: '16px',paddingRight:0, display:'flex', alignItems:"center"}}>
                                <Avatar>                           
                                    {(e[0].avatar ? (<Image src={(e[0].avatar)} roundedCircle width={40} alt={e[0].username}></Image>): "OP")}
                                </Avatar>
                            </Col>

                            <Col style={{padding:0}}>
                                <Typography variant='body1' sx={{textTransform: 'none'}}> {e[0].username}</Typography>
                                <Typography variant='subtitle2' sx={{textTransform: 'none'}} color={(e[1] == "Private" ? '#1B1B1B' : e[1] === true ? "#F76E09" : "#340546")}>{(e[1] == "Private" ? e[1] : e[1] === true ? "Happy" : "Sad")}</Typography>
                                {/* <Typography className={(e[1] == "Private" ? "bg-warning py-2 text-primary" : (e[1] === true ? "bg-success py-2 text-primary" : "bg-info py-2 text-primary"))} style={{ boxShadow: "0px 1px 3px 1px gray" }}>{(e[1] == "Private" ? e[1] : e[1] === true ? "Happy" : "Sad")}</Typography> */}
                            </Col>
                        </Row>

                    {/* <Row>
                    {
                                        following_list.find(element => element[0] == e[0].id) ?

                                            (
                                                following_list.find(element => element[1] == "pending" & element[0] == e[0].id) ?
                                                    (jsonUser.id == e[0].id ? <></> :
                                                        <Button value={id} onClick={followHandler}
                                                            variant="warning">Pending</Button>)

                                                    :
                                                    (jsonUser.id == e[0].id ? <></> :
                                                        <Button value={id} onClick={followHandler}
                                                            variant="danger">Unfollow</Button>)
                                            )

                                            :

                                            (
                                                (jsonUser.id == e[0].id ? <></> :
                                                    <Button value={id} onClick={followHandler}
                                                        variant="primary">Follow</Button>)
                                            )
                                    }

                    </Row> */} 
                    {/* it adds the follow button//not styled. */}

                    </div>
                    
                  
                )
            })}
        </div>
    <BottomNav />
    </Container>
  )
}

export default FindPeople