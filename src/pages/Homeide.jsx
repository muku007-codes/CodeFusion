import React from 'react' 
import {AppBar, Toolbar,} from '@mui/material';
import styled from '@emotion/styled';
import Code from './code.jsx';
import Result from './Result.jsx';

const Container = styled(AppBar)`
  background-color: black;
  height: 8vh;
`
const Homeide = () => {
  return (
    <>
    <Container position='static'>
      <Toolbar> 
        <div className='logo1' style={{fontSize: 30}}>CodeFusion</div>
      </Toolbar>
    </Container>
    <Code/>
    <Result />
    </>
  )
}
export default Homeide;