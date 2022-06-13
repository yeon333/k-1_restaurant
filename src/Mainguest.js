import React, { useEffect, useState } from "react";
import styled from "styled-components";
import './App.css';
import { authService } from "./firebase";
import axios from 'axios';
import usericon from './img/user.png';
import { useNavigate } from "react-router-dom";
import Modal from './modal.js';
import appleicon from './img/apple.png';
import googleicon from './img/googleplay.png';
/////
import { Link } from "react-router-dom";
const Body = styled.div`

`;

const Cont = styled.div`
  height: 100% ;
  
`;
const SearchBar = styled.input.attrs({
  type: "text",
  placeholder: "식당/의원명/카테고리를 입력하세요",
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
  type: "submit",
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
const List = styled.li`
cursor: pointer;
`;

const Default = styled.span`
font-family: 'Indie Flower', cursive;
font-family: 'Rubik Puddles', cursive;
font-family: 'Send Flowers', cursive;
color: orange;
font-size: 25px;
`
const SearchContainer = styled.form`
float:left;
width: 55%;
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
const Recommend = styled.div`
margin-left : auto;
margin-right: 5%;
justify-content: center;
display: flex;
align-items: center;
font-weight: 600;
font-size: 20px;
cursor: pointer;
`;

const Define=styled.div`
display: flex;
align-items : center;
margin-right: 5%;
font-weight: 600;
font-size: 20px;

color:white;

cursor: pointer;
white-space: nowrap;
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

const Footer = styled.div`
position: fixed; /* 이 부분을 고정 */
bottom: 0; /* 하단에 여백 없이 */
position : absolute;
left : 40%;
justify-content: center;
width 100%;
`;
const Imgapple = styled.img.attrs((props) => ({
  src: appleicon,
  size:  "130px",
}))`
width: 150px;
height: 110px;
margin: 30px 10px;

`;

const Imggoogleplay = styled.img.attrs((props) => ({
  src: googleicon,
  size:  "130px",
}))`
width: 180px;
height: 170px;
margin: 0 auto;
margin-left: 5%;
`;
var geocoder;
var kakao;
var map;
function Mainguest({ user }) {
  //search 
  console.log("main request");
  const [inputText, setInputText] = useState("");
  const [show, setShow] = useState(false);
  const [result, setResult] = useState("");
  const [flag, setFlag] = useState(1);
  const navigate = useNavigate();
  const onDefine = (e) =>{
    navigate("/about");
  }
  const currentInf = (e) => {
    console.log(e.currentTarget.innerText);
    navigate("/restinfo", {state:{id:1,name:`${e.currentTarget.innerText}`}});
    ;
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

  const showStoreInMap = (address, storeName) => {
    geocoder.addressSearch(address, function (result, status) {
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
          content: `<div style="width:150px;text-align:center;padding:6px 0;">${storeName}</div>`
        });
        infowindow.open(map, marker);
        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });

  }
  const Data = ({ data }) => {
    return (
      <List>
        <b onClick={currentInf}>{data.storeName} </b>
        <span>  - {data.foodCf}</span>

      </List>

    );

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
    const my_script = new_script("https://dapi.kakao.com/v2/maps/sdk.js?appkey=03dc1cd16b2238b4463dfbefae251aa9&libraries=services");
    kakao = window['kakao'];
    //스크립트 읽기 완료 후 카카오맵 설정
    my_script.then((x) => {
      kakao.maps.load(() => {
        var mapContainer = document.getElementById('map'); // 지도를 표시할 div 
        var mapOption = {
          center: new kakao.maps.LatLng(37.550701, 127.000667), // 지도의 중심좌표
          level: 8 // 지도의 확대 레벨
        };

        // 지도를 생성합니다    
        map = new kakao.maps.Map(mapContainer, mapOption);
        geocoder = new kakao.maps.services.Geocoder();
      });
    });
  }, [flag]);

  const onLogOutClick = () => authService.signOut();
  const onSearch = (e) => {
    setFlag(flag*-1);
    setShow(true);
    e.preventDefault();
    axios({
      url: 'http://localhost:8080/stores',
      method: 'GET',
      params: { keyword: inputText },
    }).then((res) => {
//      console.log(res.data);
      setResult(res.data);
      
      res.data.forEach(d => {
        console.log('d', d);
        showStoreInMap(d.address, d.storeName);
      })
    })
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  /// modal end 
  return (
    <Body>
      <OrageNav>
        <SearchContainer onSubmit={e => onSearch(e)}>
          <Title>K-1 chelin </Title>
          <SearchBar value={inputText} onChange={onChangeSearch}></SearchBar>
          <Search>검색</Search>

        </SearchContainer>
        <Recommend onClick={openModal}>오늘의추천</Recommend>
        <Modal open={modalOpen} close={closeModal} header="오늘은 뭐 먹을까?"></Modal>
        

       
        <Define onClick={onDefine}>K-1 슐랭이란</Define>
        

        <UserInf>{user.email}</UserInf>
        <Logout onClick={onLogOutClick}>로그아웃</Logout>
      </OrageNav>


      <Cont>

        {show ? <Result><Default> Store List</Default>
          {result && result.map(data => (
            <Data data={data} />
          ))} </Result> : <Result><Default> Store List</Default></Result>

        }


        <div id="map" className="map" />
      
      </Cont>
      <Footer>
      <Imgapple></Imgapple>
      <Imggoogleplay></Imggoogleplay>  
      </Footer>
    </Body>
  )
}
export default Mainguest;