import React from 'react'
import styled from 'styled-components'
import KeywordBar from './KeywordBar'

const Container = styled.div`
flex:5;
background-color: #181818;
height: 100vh;
width: 100%;

`

export default function VideoList() {
    return (
        <Container>
            <KeywordBar/>
            from video
        </Container>
    )
}
