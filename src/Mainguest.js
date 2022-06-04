import React, { useEffect, useState } from "react";
import styled from "styled-components";
import './App.css';
import { authService } from "./firebase";
import usericon from './img/user.png';

const Body = styled.div`

`;

const Cont = styled.div`
  height: 100% ;
  
`;
const SearchBar = styled.input.attrs({
  type:"text",
  placeholder: "식당/지역",
})`
  width: 40%;
  float:left;
  padding:10px 10px 10px;
 // background-color: transparent;
  border: none;
  border-bottom: 1px solid #999;
  font-size: 18px;
  color: black;
  outline: none;
  margin-top: 10px;
  margin-left: 10px;
  margin-right:10px;
  `;
const Search = styled.button`
background-color: orange;
color: aliceblue;
border-color: aliceblue;
font-size: 30px;
//margin-top: 10px;
//margin-bottom:5px;
`;

const Title = styled.span`
//background-color: aliceblue;
float:left;
color: white;
font-family: 'Indie Flower', cursive;
font-family: 'Rubik Puddles', cursive;
font-family: 'Send Flowers', cursive;
font-size: 40px;
`;

const SearchContainer = styled.div`
float:left;
width: 60%;
`;
const Result = styled.div`
width: 35%;
height: 400px ;
align-items: center;
justify-content: center;
margin-left: 3%;
margin-right: 30px;
margin-top: 30px;
text-align: center;
border-style: solid;
border-width: medium;
border-color: #D8D8D8;
float: left;

`;

const OrageNav = styled.div`
background: orange;
width: 100%;
display: flex;
color: white;
padding: 20px;

`;
const Recommend=styled.div`
margin-left : auto;
margin-right: 2%;
justify-content: center;
display: flex;
align-items: center;
font-weight: 600;
font-size: 20px;
`;

const Define=styled.div`
display: flex;
align-items : center;
margin-right: 2%;
font-weight: 600;
font-size: 20px;
`;


const UserInf = styled.button`
margin-left : auto;
background: white;
  border: 9px solid white;
  border-radius: 11px;
  color: orange;
  cursor: pointer;
  margin-right: 2%;
`;
const Logout = styled.button`

background: white;
  border: 9px solid white;
  border-radius: 11px;
  color: orange;
  cursor: pointer;
  margin-right: 2%;
`;

function Mainguest({user}){
  //search 
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  
    const new_script = src => { 
        return new Promise((resolve, reject) => { 
          const script = document.createElement('script'); 
          script.src = src; 
          script.addEventListener('load', () => { 
            resolve(); 
          }); 
          script.addEventListener('error', e => { 
            reject(e); 
          }); 
          document.head.appendChild(script); 
        }); 
      };//스크립트 파일 읽어오기
      
      useEffect(() => { 
        //카카오맵 스크립트 읽어오기
        const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=03dc1cd16b2238b4463dfbefae251aa9');
        
        //스크립트 읽기 완료 후 카카오맵 설정
        my_script.then(() => { 
          console.log('script loaded!!!');  
          const kakao = window['kakao']; 
          kakao.maps.load(() => {
            const mapContainer = document.getElementById('map');
            const options = { 
              center: new kakao.maps.LatLng(37.56000302825312, 126.97540593203321), //좌표설정
              level: 3 
            }; 
            const map = new kakao.maps.Map(mapContainer, options); //맵생성
            //마커설정
            const markerPosition = new kakao.maps.LatLng(37.56000302825312, 126.97540593203321); 
            const marker = new kakao.maps.Marker({ 
              position: markerPosition
            }); 
            marker.setMap(map); 
          });   
        }); 
      }, []);

      const onLogOutClick = () => authService.signOut();
      return(
      <Body>
        <OrageNav>
          <SearchContainer>
            <Title>K-1 chelin </Title>
            <SearchBar></SearchBar>
            
          </SearchContainer>
          <Recommend>오늘의 추천</Recommend>
          <Define>K-1 슐랭이란</Define> 
       
          <UserInf>{user.email}님</UserInf>
          <Logout onClick={onLogOutClick}>로그아웃</Logout>
        </OrageNav>
        
        
        <Cont>
        <Result>검색결과</Result>
        <div id="map" className="map"/>
        
        </Cont>
        
  
      </Body>
      )
}
export default Mainguest;