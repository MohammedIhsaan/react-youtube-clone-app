import React , {useState} from 'react'
import styled from 'styled-components'
import youtubeImg from '../images/youtube1.png'
import myImg from '../images/ihsaan.jpeg'
import { AiOutlineMenu,AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { BiVideoPlus } from 'react-icons/bi';
import { MdApps,MdOutlineNotificationsNone } from 'react-icons/md';
import { Medium, Mobile, Tablet } from '../reponsive';


const Container = styled.div`
background-color: #212121;
color: white;
display: flex;
height: 50px;
align-items: center;
justify-content: space-between;
${Mobile({
    height:'30px',
    justifyContent:'center'
})}

`
const LeftContainer = styled.div`
flex: 1;
display: flex;
align-items: center;
padding-left:20px;
padding-right: 20px;
${Mobile({
    padding:'0',
})}
`
const Humberger= styled.div`
cursor: pointer;
${Mobile({
    display:'none'
})}
`


const YoutubeIcon= styled.div`
display: flex;
align-items: center;
padding-left:20px;

${Mobile({
    paddingLeft:'5px'
})}
`

const Icon = styled.img`
height: 4vh;
${Mobile({
    height:'10px'
})}
`
const Logo = styled.div`
font-size: 24px;

${Mobile({
    fontSize:'12px'
})}
`
const MiddleContainer = styled.div`
flex: 3;
color: lightgray;
width: 10px;
display: flex;
align-items: center;
${Mobile({
    flex:'0.5'
})}
`

const SearchBox = styled.div`
background-color: #3d3d3d;
display: flex;
align-items: center;
height: 38px;
padding: 0 10px;
margin-right: 20px;
font-size: 24px;
${Mobile({
    fontSize:'12px',
    height:'22px',
    backgroundColor:'inherit'
})}

`
const Circle = styled.div`
font-size: 20px;
width: 35px;
height: 35px;
border-radius: 50%;
background-color: red;
display: flex;
align-items: center;
justify-content: center;
${Mobile({
    display:'none'
})}
`
const Input = styled.input`
font-size: 18px;
height: 35px;
border: none;
background-color: #181818;
width:70%;
color: white;
padding-left: 15px;
${Medium({
    width:'50%'
})}
${Tablet({
    display:'none'
})}

`
const RightContainer = styled.div`
flex: 1;

`
const UserIcons = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const IconWrapper = styled.div`
flex: 3;
display: flex;
align-items: flex-end;
/* float: right; */
justify-content: space-around;
${Mobile({
    display:'none'
})}
`
const Avatar = styled.div`
flex: 1;

`

const Image = styled.img`
width: 35px;
height: 35px;
border-radius: 50%;
`

export default function NavBar({handleValue}  ) {
    
    const handleClick = ()=>{
        handleValue()
    }

    return (
        <Container>
            <LeftContainer>
                <Humberger onClick={handleClick}><AiOutlineMenu/></Humberger>
                <YoutubeIcon>
                <Icon src={youtubeImg}/>             
                <Logo>
                YouTube 
                </Logo>
                </YoutubeIcon>
                </LeftContainer>
            <MiddleContainer>
                <Input  placeholder='Search' />
                <SearchBox>
                <AiOutlineSearch />
                </SearchBox>
                <Circle>

                <BsFillMicFill/>
                </Circle>
            </MiddleContainer>
            <RightContainer>
                <UserIcons>
                    <IconWrapper>
                    <BiVideoPlus style={{fontSize:'25px'}}/>
                    <MdApps style={{fontSize:'25px'}}/>
                    <MdOutlineNotificationsNone style={{fontSize:'25px'}}/>
                    </IconWrapper>
                    <Avatar>

                    <Image src={myImg}/>
                    </Avatar>
                </UserIcons>
            </RightContainer>
        </Container>
    )
}
