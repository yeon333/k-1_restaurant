import React, {useState} from "react";
import styled, {css} from 'styled-components';


import ResImage from './img/restaurant_img1.jpg';
import UserStar from './UserStar.css';


const Title = styled.span`
//background-color: aliceblue;
float:left;
color: aliceblue;
font-family: 'Indie Flower', cursive;
font-family: 'Rubik Puddles', cursive;
font-family: 'Send Flowers', cursive;
font-size: 40px;
margin-top: 5px;
margin-left: 10px;
margin-right:10px;
margin-bottom:5px;
`;
const SearchContainer = styled.div`
float:left;
width: 98%;
margin-left: 20px;
background-color: #FFAD14;
border-bottom: 1px solid #E0E0E0;
margin-bottom: 20px;
border: 0;
`;
const Name = styled.span`
  color: black;
  font-size: 36px;
  font-weight: 500;
  width: 98%;
  height: 32px;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 50px;
`;
const Line = styled.div`
width: 98%;
height: 1%;
border: 1px solid #E0E0E0;
margin-left: 20px;
margin-bottom: 10px;
`;
const Image = styled.div`
  background-image: url(${ResImage});
  width: 98%;
  //width: 710px;
  height: 160px;
  margin-left: 20px;
`;
const Address = styled.span`
  padding: 5px;
  border: 2px solid #aaa;
  color: #999;
  font-size: 14px;
  width: 98%;
  height: 24px;
  border: 0;
  margin-left: 20px;
`;
const AddInfo = styled.span`
  padding: 5px;
  border: 2px solid #aaa;
  font-size: 14px;
  width: 80px;
  height: 24px;
  border: 0;
  margin-left: 96px;
  border-bottom: 1px solid #E0E0E0;
`;
const Sort = styled.span`
  padding: 5px;
  border: 2px solid #aaa;
  color: #999;
  font-size: 14px;
  width: 80px;
  height: 24px;
  border: 0;
  margin-left: 20px;
`;
const SortInfo = styled.span`
  padding: 5px;
  border: 2px solid #aaa;
  font-size: 14px;
  width: 80px;
  height: 24px;
  border: 0;
  margin-left: 65px;
  border-bottom: 1px solid #E0E0E0;
`;
const TelNum = styled.span`
  padding: 5px;
  border: 2px solid #aaa;
  color: #999;
  font-size: 14px;
  width: 80px;
  height: 24px;
  border: 0;
  margin-left: 20px;
`;
const TelNumInfo = styled.span`
  padding: 5px;
  border: 2px solid #aaa;
  font-size: 14px;
  width: 80px;
  height: 24px;
  border: 0;
  margin-left: 69px;
  border-bottom: 1px solid #E0E0E0;
`;
const Menu = styled.span`
  padding: 5px;
  border: 2px solid #aaa;
  color: #999;
  font-size: 14px;
  width: 80px;
  height: 72px;
  border: 0;
  margin-left: 20px;
`;
const MenuInfo = styled.span`
  padding: 5px;
  border: 2px solid #aaa;
  font-size: 14px;
  width: 80px;
  height: 72px;
  border: 0;
  margin-left: 96px;
`;
const Euione = styled.span`
  padding: 5px;
  border: 2px solid #aaa;
  color: #4BAD9A;
  font-size: 14px;
  width: 80px;
  height: 24px;
  border: 0;
  margin-left: 20px;
`;
const EoInfo = styled.span`
  padding: 5px;
  border: 2px solid #aaa;
  font-size: 14px;
  width: 80px;
  height: 24px;
  border: 0;
  margin-left: 69px;
  border-bottom: 1px solid #E0E0E0;
`;
const EuioneArea = styled.span`
  padding: 5px;
  border: 2px solid #aaa;
  color: #4BAD9A;
  font-size: 14px;
  width: 80px;
  height: 48px;
  border: 0;
  margin-left: 20px;
`;
const EoAInfo = styled.span`
  padding: 5px;
  border: 2px solid #aaa;
  font-size: 14px;
  width: 80px;
  height: 24px;
  border: 0;
  margin-left: 83px;
  border-bottom: 1px solid #E0E0E0;
`;
const ScoreInfo = styled.span`
  padding: 5px;
  border:  2px solid #aaa;
  color: orange;
  font-size: 32px;
  width: 80px;
  height: 24px;
  border: 0;
  margin-left: 85px;
`;
const ReviewButton = styled.button`
  display: block;
  float:left;
  padding: 6px 10px;
  font-size: 32px;
  font-weight: 500;
  border-radius: 3px;
  background-color: transparent;
  border: 0;
  margin-left: 20px;
  margin-right: 50px;
	&:hover {
    background-color: teal;
  }
`;
const ReviewSpace = styled.input.attrs({
  type:"text",
  placeholder: "리뷰를 입력해주세요.(최대 50자)",
})`
  width: 98%;
  height: 200px;
  background-color: transparent;
  //border:0;
  font-size: 16px;
  color: black;
  margin-left: 20px;
`;
const EnterReview = styled.button`
  display: block;
  padding: 6px 10px;
 // color: #fff;
 // font-size: 18px;
 // background-color: 
 // border: 0;
  float: right;
  margin-right: 4%;
`;
const ReviewAlert = ({onClick}) => {
  alert("감사합니다. 리뷰가 등록되었습니다.");
}
function RestInfo() {
  return (
    
		<div>
      <SearchContainer>
          <Title as="a" href="https://www.google.com" style={{ textDecoration: 'none' }}>K-1 chelin </Title>
         
      </SearchContainer>
       
      <p><Name>식당 이름(참조)</Name><ScoreInfo>평점(참조)</ScoreInfo></p>
      <p><Image/></p>
      <p><Address>주소</Address><AddInfo>식당주소(참조)</AddInfo></p>
      <p><Sort>식당 종류</Sort><SortInfo>참조</SortInfo></p>
      <p><TelNum>전화번호</TelNum><TelNumInfo>참조</TelNumInfo></p>
      <p><Menu>메뉴</Menu><MenuInfo>해당 기능은 추후에 추가될 예정입니다.</MenuInfo></p>
      <br/><br/><p><Euione>국회의원</Euione><EoInfo>참조</EoInfo></p>
      <p><EuioneArea>지역명</EuioneArea><EoAInfo>참조</EoAInfo></p>
      <p><Line></Line></p>
      <p><Line></Line></p>
      <p><ReviewButton onCreate = {
        <div>
         <p><ReviewSpace></ReviewSpace></p>
         <p><EnterReview onClick = {ReviewAlert}>등록</EnterReview></p>
        </div>}>나만의 리뷰</ReviewButton></p>
        <div class="star-rating space-x-4 mx-auto">
	        <input type="radio" id="5-stars" name="rating" value="5" v-model="ratings"/>
	        <label for="5-stars" class="star pr-4">★</label>
	        <input type="radio" id="4-stars" name="rating" value="4" v-model="ratings"/>
	        <label for="4-stars" class="star">★</label>
	        <input type="radio" id="3-stars" name="rating" value="3" v-model="ratings"/>
	        <label for="3-stars" class="star">★</label>
	        <input type="radio" id="2-stars" name="rating" value="2" v-model="ratings"/>
	        <label for="2-stars" class="star">★</label>
	        <input type="radio" id="1-star" name="rating" value="1" v-model="ratings" />
	        <label for="1-star" class="star">★</label>
        </div>
      <p><ReviewSpace></ReviewSpace></p>
      <p><EnterReview onClick = {ReviewAlert}>등록</EnterReview></p>
    </div>
  );
}
 
export default RestInfo;