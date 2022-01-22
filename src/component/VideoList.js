import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../App'
import { Medium, Medium1, Mobile, Tablet } from '../reponsive'
import KeywordBar from './KeywordBar'
import myImg from '../images/ihsaan.jpeg'


const Container = styled.div`
color: white;
overflow-y: scroll;
flex:18;
background-color: #181818;
height: 100vh;
width:${props=>props.type==='halfSideBar'? '91%': '93%'};
${Medium({
    width: props=>props.type==='halfSideBar'? '86%': '90%'

})};
${Mobile({
    width: '100%',

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

${Mobile({
    paddingLeft: '0px',
    width: '100%',
    height: '100vh',
})}

`
const Wrapper = styled.div`
margin-bottom: 10px;
border: 1px solid white;
width: 24%;
${Medium({
    width:'32%',
})}
${Medium1({
    width:'48%',
})}
${Tablet({
    width:'90%',
})}
${Mobile({
    width:'100%',
})}

`
const Thumbnail = styled.div`
cursor: pointer;
position: relative;
border: 1px solid blue;
`

const Image = styled.img`
width: 100%;
height: 150px;
z-index: 1;

${Mobile({
    width: '100%',
height: '200px',

})}
`
const Span = styled.span`
position: absolute;
bottom: 20px;
right: 20px;
z-index: 3;
background-color: black;
width: 50px;
`
const Details = styled.div`
cursor: pointer;
display: flex;
`
const ChannelIcon = styled.div`
flex: 1;
display: flex;
padding: 10px;
`
const ChannelImage = styled.img`
width: 35px;
height: 35px;
border-radius: 50%;
`
const VideoDtails = styled.div`
display: flex;
flex: 8;
flex-direction: column;
padding-top: 8px;
`
const TitleDiv = styled.div`
font-size: 16px;
padding-bottom: 3px;
height: 38px;
width: 100%;
overflow: hidden;
`
const Title = styled.div``
const ChannelName = styled.div`
padding-right: 5px;
`
const ChannelDiv = styled.div`
color: lightgrey;
display: flex;
font-weight: 100;
`
const Views = styled.div``

export default function VideoList() {
    const {value,data2}=useContext(AppContext)
    console.log('data2 ......',data2.items)
    return (
        <Container type={value}>
            <KeywordBar />
            <Wrap type={value}>
                {data2.items.map((e,i)=>{
                   return(
                        <Wrapper key={i}>
                   <Thumbnail>
                       <Image src={e.snippet.thumbnails.high.url}>
                       </Image>
                       <Span>5min</Span>
                   </Thumbnail>
                   <Details>
                       <ChannelIcon><ChannelImage src={myImg}/></ChannelIcon>
                       <VideoDtails>
                           <TitleDiv>
                           <Title>{e.snippet.title}</Title>
                           </TitleDiv>
                           <ChannelDiv>
                           <ChannelName>{e.snippet.channelTitle}</ChannelName>
                           <Views> • 26k views • 18 hours ago</Views>
                           </ChannelDiv>
   
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
