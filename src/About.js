import React, { useEffect, useState } from "react";
import styled from "styled-components";
import './App.css';
import { authService } from "./firebase";
import Modal from './modal.js';

///
import { Link } from "react-router-dom";



const Body = styled.div`

`;


const Cont = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  margin-top: 30px;
  
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

const OrageNav = styled.div`
background: orange;
width: 100%;
display: flex;
color: white;
padding: 20px;

`;
const Recommend=styled.button`
margin-left : auto;
margin-right: 2%;
justify-content: center;
display: flex;
align-items: center;
font-weight: 600;
font-size: 20px;
background: orange;
color:white;
border:0px;
cursor: pointer;
`;

const Define=styled.div`
display: flex;
align-items : center;
margin-right: 2%;
font-weight: 600;
font-size: 20px;
background: orange;
  color:white;
  border:0px;
  cursor: pointer;
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

const Board=styled.div`
 
  display: block;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: auto;
    `;
const Gray=styled.div`
  padding:1em;
  background:#e0e0eb;
  font-size:20px;
  margin-bottom:40px;
  margin-top:40px;

`;
const Worker=styled.div`
  margin-top:10px;
  display:flex;

`;
const Profile=styled.div`
  display:flex;
  margin-right:20px;
`;
const Figure=styled.div`
  display:inline;
  float:left;
`;
const Name=styled.div`
  margin-left:10px;
  display:inline;
`;
const Work=styled.div`
  display:inline;
`;
function About({user},props){

        //modal 
        const [modalOpen, setModalOpen] = useState(false);

        const openModal = () => {
          setModalOpen(true);
        };
        const closeModal = () => {
          setModalOpen(false);
        };
        /// modal end 
        
      const onLogOutClick = () => authService.signOut();
      return(
      <Body>
        <OrageNav>
          <SearchContainer>
            <Link to="/mainguest">
              <Title>K-1 chelin </Title>
            </Link>
          </SearchContainer>
         
          <UserInf>{user.email}님</UserInf>
          <Logout onClick={onLogOutClick}>로그아웃</Logout>
        </OrageNav>
        
        
        <Cont>
            <img src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__480.jpg"   />
           

        </Cont>
        <Board>
          <Gray>
            k-1 슐랭이란 현재 일반인들에게 유명세를 타고 있는 맛집들은 현존하는 웹 서비스들을 통해 쉽게 찾아볼 수 있습니다. 
            <br/>하지만 국회의원들이 어떠한 음식을 먹는지, 어떤 분위기를 지닌 식당을 가는지에 대해 알고 있는 시민들은 거의 없다고 봐도 무방합니다.
            <br/> 본 웹사이트는 국회의원들의 정치자금 데이터를 통해 국회의원들의 회식, 간담회 지출내역을 파악하여 국회의원들이 자주 다니는 식당을
             파악합니다. <br/>일반 시민들도 회사나 여타 조직내에서 이루어지는 회식, 간담회, 혹은 거래처와의 미팅하는 상황에서 어울리는 식당을 
             선택해야 하는 경우가 존재합니다. <br/>이러한 상황에서 웹사이트는 해당 부분에서 유용한 정보를 제공할 수 있습니다.
          </Gray>
          <b> k-1 슐랭 project with </b>
          <Worker>
            <Profile>
              <Figure><img src="https://images.emojiterra.com/google/android-nougat/512px/1f468-1f4bb.png" width="32" height="32" alt=""/></Figure>
              <Name>김서연</Name>
              <Work>
              <p>60172139 팀장</p>
              <p>기획, 데이터수집, 코딩</p>
              </Work>
            </Profile>
            <Profile>
              <Figure><img src="https://emojigraph.org/media/facebook/man-technologist_1f468-200d-1f4bb.png" width="32" height="32" alt=""/></Figure>
              <Name>박성민</Name>
              <Work>
              <p>60162121 팀원</p>
              <p>기획,디자인, 코딩</p>
              </Work>
            </Profile>
            <Profile>
              <Figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjIb1eR3rWkhJW9luZ0zx0R9HYDzTlKJq58wt2GWIHD6Bb6v95KcBFRChqefQ8HQMABW8&usqp=CAU" width="32" height="32" alt=""/></Figure>
              <Name>오희권</Name>
              <Work>
              <p>60172172 팀원</p>
              <p>기획, 데이터필터링, 코딩</p>
              </Work>
            </Profile>
          </Worker>
        </Board>
        
  
      </Body>
      )
}

export default About;