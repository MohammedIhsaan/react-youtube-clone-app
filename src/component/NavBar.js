import React , {useContext, useState} from 'react'
import styled from 'styled-components'
import youtubeImg from '../images/youtube1.png'
import myImg from '../images/ihsaan.jpeg'
import { AiOutlineMenu,AiOutlineSearch,AiOutlineArrowLeft } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { BiVideoPlus } from 'react-icons/bi';
import { MdApps,MdOutlineNotificationsNone } from 'react-icons/md';
import { Medium, Medium1, Mobile, SmallMobile, Tablet, Tablet1 } from '../reponsive';
import { AppContext } from '../App';


const Container = styled.div`
background-color: #212121;
color: white;
display: flex;
height: 50px;
align-items: center;
justify-content: space-between;
${Mobile({
    height:'40px',
    justifyContent:'center'
})}


`
const LeftContainer = styled.div`
flex: 1;
display: ${props=>props.type==='view'?'none':'flex'};
align-items: center;
padding-left:20px;
padding-right: 20px;
${Mobile({
    padding:'0',
    flex:'8'
})}
${SmallMobile({
    padding:'0',
    flex:'4'
})}

`
const Humberger= styled.div`
padding-left: 15px;
cursor: pointer;
font-size: 24px;
${Mobile({
    display:'none'
})}
`


const YoutubeIcon= styled.div`
display: flex;
align-items: center;
padding-left:30px;

${Mobile({
    paddingLeft:'5px'
})}
`

const Icon = styled.img`
height: 24px;
${Mobile({
    height:'15px'
})}
`
const Logo = styled.div`
font-size: 24px;

${Mobile({
    fontSize:'19px'
})}
`
const MiddleContainer = styled.div`
flex: 3;
color: lightgray;
width: 10px;
display: flex;
align-items: center;
${Medium1({
    flex:'2'
})}
${Tablet1({
    flex:'1'
})}


`
const Arrow = styled.div`
display: none;
padding-left: 8px;
padding-right: 8px;
${Mobile({
    display: props=>props.type==='view'? 'flex':'none',
    fontSize:'20px',
})}
color: white;
`
const SearchBox = styled.div`
background-color: #3d3d3d;
display: flex;
align-items: center;
height: 38px;
padding: 0 10px;
margin-right: 60px;
font-size: 24px;
${Mobile({
    fontSize:'21px',
    height:'26px',
    backgroundColor:'inherit',
    marginRight: props=>props.type==='view' || '20px',
})}
${Medium1({ 
    marginRight:  '5px',
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
    display: 'none',
})}
`
const Input = styled.input`
font-size: 18px;
height: 35px;
border: none;
background-color: #181818;
width:70%;
color: white;
${Medium({
    width:'50%'
})}
${Tablet({
    display:'none'
})}
${Mobile({
    display: props=> props.type==='hide'? 'none' :'flex',
    width: '100%',
    height: '35px',
})}

`
const RightContainer = styled.div`
flex: 1;
display: ${props=>props.type==='view' &&'none'};

`
const UserIcons = styled.div`
display: flex;
align-items: center;
`
const IconWrapper = styled.div`
font-size: 24px;
flex: 2;
display: flex;
`
const IconWrap= styled.div`
margin-left: 30px;
${Tablet({
    marginLeft:'10px'
})}
${Tablet1({
    display:'none'
})}

`

const Avatar = styled.div`
flex: 1;
padding-left: 20px;
${Mobile({
    display:'flex',
alignItems: 'center',
marginRight:'20px'
})}

`

const Image = styled.img`
width: 35px;
height: 35px;
border-radius: 50%;
${Mobile({
    width:'24px',
    height:'24px',
})}
`

export default function NavBar( ) {
    const [inputDiv, setinputDiv] = useState('hide')
    const {handleValue} = useContext(AppContext)
    const handleClick = ()=>{
        handleValue()
    }
    const handleInput = ()=>{
        if(window.innerWidth<420){
            setinputDiv('view')
        }
    }
    const hideInput = ()=>{
        setinputDiv('hide')
    }
    return (
        <Container>
            <LeftContainer type={inputDiv}>
                <Humberger onClick={handleClick}><AiOutlineMenu/></Humberger>
                <YoutubeIcon>
                <Icon src={youtubeImg}/>             
                <Logo>
                YouTube 
                </Logo>
                </YoutubeIcon>
                </LeftContainer>
            <MiddleContainer type={inputDiv}>
                <Arrow type={inputDiv}>
                    <AiOutlineArrowLeft onClick={hideInput}/>
                </Arrow>
                <Input type={inputDiv}  placeholder='Search' />
                <SearchBox>
                <AiOutlineSearch onClick={handleInput}  />
                </SearchBox>
                <Circle>

                <BsFillMicFill/>
                </Circle>
            </MiddleContainer>
            <RightContainer type={inputDiv}>
                <UserIcons>
                    <IconWrapper>
                        <IconWrap>
                            
                    <BiVideoPlus />
                        </IconWrap>
                        <IconWrap>
                    <MdApps />

                        </IconWrap>
                        <IconWrap>
                    <MdOutlineNotificationsNone />

                        </IconWrap>
                    </IconWrapper>
                    <Avatar>

                    <Image src={myImg}/>
                    </Avatar>
                </UserIcons>
            </RightContainer>
        </Container>
    )
}
