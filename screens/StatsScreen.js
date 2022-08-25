import { AppBar, Box, Container, Table, Toolbar, Typography, SvgIcon, Skeleton } from '@mui/material'
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { time } from '../actions/timeActions';
import {ReactComponent as sadEclipse} from '../sad.svg';
import {ReactComponent as happyEclipse} from '../happy.svg';
import { BottomNav } from '../components/BottomNav';



const StatsScreen = () => {
    const dispatch = useDispatch()
    let date = []
    let modifDate = []
    let sadCounter = 0
    let happyCounter = 0
    
    let finalDate = []

    const month = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    const history = useNavigate()
    
    const userTimes = useSelector(state => state.time)

    const {error, loading, timeInfo} = userTimes

    let i = 1

    let token = null

    let redirect = ""

    let obj = {}

    useEffect(()=>{
        const userInfo = localStorage.getItem("userInfo")

        if(userInfo){
            token = "Bearer " + JSON.parse(userInfo).token
        }else{
            redirect = "/"
            history(redirect)
        }

        dispatch(time(token))
        
    },[])

    {timeInfo.map((t)=>{
        let tDate = new Date(t.date)
        let result = timeInfo.filter(element=>
            new Date(element.date).getMonth() == tDate.getMonth() && new Date(element.date).getFullYear() == tDate.getFullYear()
        )
        
        let resultDate = new Date(result[0].date)
        let resultDateConcat = month[resultDate.getMonth()]
        // let resultDateConcat = resultDate.getFullYear() + "-" + month[resultDate.getMonth()]
        
        obj[resultDateConcat] = result
        
        if (date.filter(d => JSON.stringify(d) == JSON.stringify(obj)).length == 0) {
            date.push(obj)
        }
        
    })}
    {
        date.forEach((d)=>{
            let obj = {}
            for (const [key, value] of Object.entries(d)) {
                for (const [key2, value2] of Object.entries(value)) {
                    
                    if (value2.toggle_status == 0){
                        sadCounter += value2.interval
                    }else{
                        happyCounter += value2.interval
                    }
                }
                obj[key] = {
                    sad: Math.round(sadCounter/60),
                    happy: Math.round(happyCounter/60)
                }

                sadCounter = 0
                happyCounter = 0

                if (modifDate.filter(d => JSON.stringify(d) == JSON.stringify(obj)).length == 0) {
                    modifDate.push(obj)
                }
            }
        })
        
        
        
    }
    {modifDate && modifDate.map((item)=>{    
        for (var key in item) {
            finalDate.push({
                month: key,
                value: item[key]
            })
        }
    })}

    const cardStyle = {
        borderRadius: 16,
        marginTop:32,
        marginRight: 20,
        marginLeft:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        height:76,
        alignItems:'center'
    }
    const detailStyle ={
        alignItems:'center',
        paddingRight:'32px'
    }
    

  return (
    
    <div>
        <Row className='text-center'>
        </Row>

        <AppBar elevation={0} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor:'#F5F5F5',
            color:'#218E8A',
            alignItems:'center',
            justifyContent:'center',
            height:76,
            borderBottom:'1px solid rgba(0, 0, 0, 0.1)' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Stats
          </Typography>
        </Toolbar>
      </AppBar>


        <div style={{marginTop:108}}>
            
            {finalDate && finalDate.map((e)=>{
                i++
                return(
                    
                        <div style={cardStyle} key={i}>

                            
                            <Typography variant='body1' sx={{color:'#1E8582',textTransform: 'none', paddingLeft:'16px'}}> {e.month}</Typography>
                            <Row style={detailStyle}>
                  
                                <Col>
                                    <div style={{display:'flex', justifyContent:'space-between'}}>
                                        <Typography variant='subtitle2'
                                        sx={{color:'#340546',textTransform: 'none',paddingRight:'7px'}}>
                                            {e.value.sad < 60 ? (e.value.sad + " Minutes") : (Math.round(e.value.sad/60) + "% ")}
                
                                        </Typography>
                                        <SvgIcon component={sadEclipse} inheritViewBox/>
                                        
                                    </div>
                                </Col>

                                <Col>
                                    <div style={{display:'flex', justifyContent:'space-between'}}>
                                        <Typography variant='subtitle2'
                                         sx={{color:'#F76E09', textTransform: 'none', paddingRight:'7px'}}>
                                            {e.value.happy < 60 ? (e.value.happy + " Minutes") : (Math.round(e.value.happy/60) + "% ")}
                                            
                                        </Typography>
                                        <SvgIcon component={happyEclipse}inheritViewBox/>
                                        
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )
                })}
        </div>
        <BottomNav />
    </div>
  )
}

export default StatsScreen



