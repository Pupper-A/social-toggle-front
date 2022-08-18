import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Row, Col} from 'react-bootstrap';


const StatsScreen1 = () => {
    const style = {
        margin: 40
    }
    const statStyle = {
        borderRadius: 50,
        marginTop:50,
        marginRight: 20,
        marginLeft:20,
        display:'flex',
        justifyContent:'center'
    }

    const cardStyle = {
        borderRadius: 16,
        marginTop:32,
        marginRight: 20,
        marginLeft:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'white',
        height:76,
        alignItems:'center'
    }
    const detailStyle ={
        alignItems:'center'

    }

  return (
    <div>
        <Row className='text-center'>
        </Row>

        <div style={statStyle}>
            <Typography variant='h1' sx={{color:'#1E8582', fontWeight:500, fontSize:'20px',textTransform: 'none'}}> Stats</Typography>
        </div>

        <div style={{marginTop:50}}>
            <div style={cardStyle}>
                <Typography variant='body' sx={{color:'#1E8582', fontWeight:600, fontSize:'20px',textTransform: 'none'}}> July</Typography>
                <Row style={detailStyle}>
                    <Col> 
                        <Row>
                            <Typography>70%</Typography> 
                            <img src='' />
                        </Row>
                        
                    </Col>
                    <Col>
                        <Row>
                            <Typography>30%</Typography> 
                            <img src='' />
                        </Row>
                    </Col>
                </Row>
            </div>

            <div style={cardStyle}>
                <Typography variant='body' sx={{color:'#1E8582', fontWeight:600, fontSize:'20px',textTransform: 'none'}}> July</Typography>
                <Row style={detailStyle}>
                    <Col> 
                        <Row>
                            <Typography>70%</Typography> 
                            <img src='' />
                        </Row>
                        
                    </Col>
                    <Col>
                        <Row>
                            <Typography>30%</Typography> 
                            <img src='' />
                        </Row>
                    </Col>
                </Row>
            </div>

            <div style={cardStyle}>
                <Typography variant='body' sx={{color:'#1E8582', fontWeight:600, fontSize:'20px',textTransform: 'none'}}> July</Typography>
                <Row style={detailStyle}>
                    <Col> 
                        <Row>
                            <Typography>70%</Typography> 
                            <img src='' />
                        </Row>
                        
                    </Col>
                    <Col>
                        <Row>
                            <Typography>30%</Typography> 
                            <img src='' />
                        </Row>
                    </Col>
                </Row>
            </div>

        </div>
        
    </div>
  )
}

export default StatsScreen1



//not saved to github