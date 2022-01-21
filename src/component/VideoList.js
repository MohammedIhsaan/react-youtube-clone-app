import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../App'
import { Medium, Medium1, Mobile, Tablet } from '../reponsive'
import KeywordBar from './KeywordBar'

const Container = styled.div`
overflow-y: scroll;
flex:18;
background-color: #181818;
height: 100vh;
width:${props=>props.type==='halfSideBar'? '91%': '93%'};
${Medium({
    width: props=>props.type==='halfSideBar'? '86%': '90%'

})}
`
const Wrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
width:${props=>props.type==='halfSideBar'? '95%': '95%'};
padding-top: 30px;
padding-left: 30px;



`
const Wrapper = styled.div`
/* padding-bottom: 20px; */
/* margin: 5px; */
margin-bottom: 10px;
border: 1px solid white;
width: 22%;
${Medium({
    width:'30%',
})}
${Medium1({
    width:'40%',
})}
${Tablet({
    width:'90%',
})}
/* ${Mobile({
    width:'90%',
})} */

`
const Thumbnail = styled.div`
cursor: pointer;
/* width: 10%; */
/* background-image: url('https://i.ytimg.com/an_webp/l9qr3EuLE_8/mqdefault_6s.webp?du=3000&sqp=CI3zmI8G&rs=AOn4CLDPeoncPj7Amo-oZ7x1gwY1Y225SA'); */
/* object-fit: cover; */
`

const Image = styled.div`
border: 1px solid blue;
/* width:${props=>props.type==='halfSideBar'? '230px': '280px'};
height:${props=>props.type==='halfSideBar'? '140px': '150px'}; */

width: 100%;
height: 150px;
/* height: 200px; */
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
    const {value}=useContext(AppContext)
    console.log('value ......',value)
    return (
        <Container type={value}>
            <KeywordBar />
            <Wrap type={value}>
                {[1,2,3,4,5,1,1,1,1,11,1,1,1,11,1,11,1,11,1].map((e,i)=>{
                   return(
                        <Wrapper key={i}>
                   <Thumbnail>
                       <Image/>
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
