import React, { useEffect, useState } from "react";
import styled from "styled-components";
import './App.css';
import { authService } from "./firebase";
import axios from'axios';
import usericon from './img/user.png';

const Body = styled.div`

`;

const Cont = styled.div`
  height: 100% ;
  
`;
const SearchBar = styled.input.attrs({
  type:"text",
  placeholder: "식당/지역/의원명을 입력하세요",
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
const Search = styled.button.attrs({
  type:"submit",
})`
background-color: orange;
color: aliceblue;
border-color: aliceblue;
font-size: 25px;
type: submit;
float:left;
margin-top: 10px;
margin-bottom:5px;
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

const SearchContainer = styled.form`
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
  const[result,setResult] = useState("");
  console.log("hi",result);
  

  const currentInf = (e) =>{
    console.log(e.currentTarget.innerText);
  }
  const onChangeSearch = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  
  const Data = ({data})=>{
    return(
      <li>
        <b onClick={currentInf}>{data.storeName} </b>
      </li>
    )
  }
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

            var geocoder = new kakao.maps.services.Geocoder();
            console.log('pakr');
// 주소로 좌표를 검색합니다
            geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', function(result, status) {
              
    // 정상적으로 검색이 완료됐으면 
              if (status === kakao.maps.services.Status.OK) {
               
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                  map: map,
                  position: coords
                });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new kakao.maps.InfoWindow({
                  content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
                });
                infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
              } 
            });    
            /*const markerPosition = new kakao.maps.LatLng(37.56000302825312, 126.97540593203321); 
            const marker = new kakao.maps.Marker({ 
              position: markerPosition
            }); 
            marker.setMap(map);*/ 
          });   
        }); 
      }, []);

      const onLogOutClick = () => authService.signOut();
      const onSearch = (e) =>{
        e.preventDefault();
        axios({
          url: 'http://localhost:8080/stores',
          method: 'GET',
          params: {keyword:  inputText},
          }).then((res) => {
          console.log(res.data);
          setResult(res.data);
        })
      };
      return(
      <Body>
        <OrageNav>
          <SearchContainer onSubmit={e => onSearch(e)}>
            <Title>K-1 chelin </Title>
            <SearchBar value = {inputText} onChange={onChangeSearch}></SearchBar>
            <Search>검색</Search>
            
          </SearchContainer>
          <Recommend>오늘의 추천</Recommend>
          <Define>K-1 슐랭이란</Define> 
       
          <UserInf>{user.email}님</UserInf>
          <Logout onClick={onLogOutClick}>로그아웃</Logout>
        </OrageNav>
        
        
        <Cont>
        <Result>
          
          {result.map(data => (
            <Data data ={data}/>
            ))}
          
        </Result>
        <div id="map" className="map"/>
        
        </Cont>
        
  
      </Body>
      )
}
export default Mainguest;