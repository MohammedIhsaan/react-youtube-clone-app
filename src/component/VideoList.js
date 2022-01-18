import React from 'react'
import styled from 'styled-components'
import KeywordBar from './KeywordBar'

const Container = styled.div`
flex:5;
background-color: #181818;
height: 100vh;
width: 94%;
`
const Wrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
width: 93%;
`
const Wrapper = styled.div`
padding: 25px 0px 0px 30px;
width: 20%;
`
const Thumbnail = styled.div`
cursor: pointer;
`
const Image = styled.img`
width: 320px;
height: 200px;
`
const Span = styled.span`

`
const Details = styled.div`
cursor: pointer;
`
const ChannelIcon = styled.div``
const VideoDtails = styled.div``
const Title = styled.div``
const ChannelName = styled.div``
const Views = styled.div``

export default function VideoList() {
    return (
        <Container>
            <KeywordBar/>
            <Wrap>
                {[1,2,3,4,5,1,1,1,1,11,1,1,1,11,1,11,1,11,1].map((e,i)=>{
                   return(
                        <Wrapper key={i}>
                   <Thumbnail>
                       <Image src='https://i.ytimg.com/an_webp/l9qr3EuLE_8/mqdefault_6s.webp?du=3000&sqp=CI3zmI8G&rs=AOn4CLDPeoncPj7Amo-oZ7x1gwY1Y225SA'/>
                       <Span>5min</Span>
                   </Thumbnail>
                   <Details>
                       <ChannelIcon>Icon</ChannelIcon>
                       <VideoDtails>
                           <Title>youtube clone app tutorial</Title>
                           <ChannelName>Ihsaan.Dev</ChannelName>
                           <Views>26k views : 18 hours ago</Views>
   
                       </VideoDtails>
                   </Details>
               </Wrapper>

                )
                })
                }

            
            </Wrap>
        </Container>
    )
}
