## DAILAB 홈페이지 입니다.

### [dailab.github.io](https://bytecell.github.io/dailab.github.io/)

# 1. html 파일 소개
* index: 인사, 소개, 관심 연구 분야, 과제 목록

* member

    * professor: 교수님 소개
    * student: Ph.D., M.S., Intern 소개
    * Alumni: DAI Lab 졸업자 소개

* publication: 논문, 수상, 특허, ACK 목록

    * present: 2021.09.01 ~ present
    * past: 2017.01.01 ~ 2021.08.31

* news: DAI Lab 이슈 목록 - 워크숍, 학술대회 참석, 수상 등

* contact: 랩장 이메일, 연구실 주소


# 2. nav 바 수정 

메뉴 코드는 전체 html 파일에 각각 추가해야 한다. publication과 people 폴더의 경로를 적을 때는 주의한다.  
로컬에서는 '/index.html'을 불러오면 해당 폴더(home)의 index 파일이 잘 실행되지만, github.io 창에서는 경로가 'https://bytecell.github.io/index.html' 로 되기 때문에 실행이 안된다.
index.html 파일은 bytecell.github.io에 있는 것이 아니라 'bytecell.github.io/dailab.github.io' 에 있기 때문이다.   
따라서 경로 앞에 '/' 절대 경로가 아닌 './' 현재폴더 경로를 적어주어야 한다. 같은 이유로 '../', '../../'로 써야 한다.

## 2.1. 기본 메뉴 추가하는 과정


<details>
  <summary>펼치기</summary>  


* 주 메뉴 추가하는 과정 (예: News 옆에 하나 추가하기)  
  
  
  ---
  * 기본 nav 바에 추가 (예: plus.html)
    * plus.html을 만든다.

    * 만들고자 하는 위치에 다음과 같은 메뉴 코드를 추가한다.
       ``` html
       <li class="dropdown"><a href="./plus.html" data-target="plus">Plus</a></li>
       ```
    * 결과
       
       <img src="https://github.com/user-attachments/assets/f3be63d5-7343-4e7d-a297-b46d75c54c53" width=1000px;>
       <img src="https://github.com/user-attachments/assets/0f299284-1595-47cc-8621-4ab1077d4d81" width=1000px;>
       
    * 주의: 메뉴가 늘어났으므로 화면을 가로로 줄였을 때 nav바가 깨질 수 있다. 그럼 css - nav 클래스의 margin-right를 아래 주석과 같이 적절하게 조정하면 된다.
      
       <img src ="https://github.com/user-attachments/assets/f46a38f7-5087-405a-87c3-6df2443d694d" width=500px>


       ``` css
       .nav {
           margin-right: 15vw; /*  15vw -> 10vw */
       }
       ```

    * 수정 결과
      
       <img src="https://github.com/user-attachments/assets/03adc951-a148-491f-9648-b45a0cf60c1e" width= 500px>
    
  
---
  
  * media nav 바에 추가 (예: plus.html)
     * plus.html을 만든다.
       
     * 만들고자 하는 위치에 다음과 같은 메뉴 코드를 추가한다.
       ```html
       <li><a href="./plus.html" data-target="plus">Plus</a></li>
       ```
     * 결과
     
      <img src ="https://github.com/user-attachments/assets/97819168-115d-4b17-a1a6-ecd13aeae2b0" width=400px>
      <img src ="https://github.com/user-attachments/assets/8b972a82-066e-4369-94f0-56371e17ef48" width=400px>

</details>



## 2.2. 드롭다운 메뉴 추가하는 과정

<details>
  <summary>펼치기</summary>  


* 주 메뉴와 부 메뉴 추가하는 과정
  
  ---
  * 기본 nav 바에 추가
    * one.html, two.html을 만든다. - 드롭다운 메뉴들
      
    * 만들고자 하는 위치에 다음과 같은 메뉴 코드를 추가한다.
       ```html
       <li class="dropdown">
          <a href="#">Plus <i class="fas fa-caret-down"></i></a>
          <div class="dropdown-content">  <!-- 드롭다운 메뉴들 이름이 길면 content1, 짧으면 content 사용 -->
               <!-- 아래 부 메뉴들 나열 - 추가하고 싶을 때는 그냥 쭉 나열하기 -->
              <a class="dropdown-item" href="./one.html" data-target="one">one</a>
              <a class="dropdown-item" href="./two.html" data-target="two">two</a>
          </div>
       </li>
       ```
       
    * 결과
   
      <img src ="https://github.com/user-attachments/assets/80c6a172-c2bb-4a01-8044-68ac508350eb" width=500px>
      <img src ="https://github.com/user-attachments/assets/40def3e6-6e83-44cf-a426-851633811cf3" width=600px>


    * 주의: 메뉴가 늘어났으므로 화면을 가로로 줄였을 때 nav바가 깨질 수 있다. 그럼 css - nav 클래스의 margin-right를 아래 주석과 같이 적절하게 조정하면 된다.
      
       <img src ="https://github.com/user-attachments/assets/f46a38f7-5087-405a-87c3-6df2443d694d" width=500px>


       ``` css
       .nav {
           margin-right: 15vw; /*  15vw -> 10vw */
       }
       ```

    * 수정 결과
      
       <img src="https://github.com/user-attachments/assets/03adc951-a148-491f-9648-b45a0cf60c1e" width= 500px>

---

  * media nav 바에 추가 (예: plus.html)
    * one.html, two.html을 만든다. - 드롭다운 메뉴들
      
    * 만들고자 하는 위치에 다음과 같은 메뉴 코드를 추가한다.
       ```html
       <li class="dropdown">
          <a href="#">Plus <i class="fas fa-caret-down"></i></a>
          <div class="dropdown-content">  <!-- 드롭다운 메뉴들 이름이 길면 content1, 짧으면 content 사용 -->
               <!-- 아래 부 메뉴들 나열 - 추가하고 싶을 때는 그냥 쭉 나열하기 -->
              <a class="dropdown-item" href="./one.html" data-target="one">one</a>
              <a class="dropdown-item" href="./two.html" data-target="two">two</a>
          </div>
       </li>
       ```
       
    * 결과
      
      <img src="https://github.com/user-attachments/assets/c0ad1c8b-d024-4dab-bccb-09ff78f81103" width= 400px>
      <img src="https://github.com/user-attachments/assets/21f5ddea-b5fb-4de4-81ff-7a5764985632" width= 400px>

</details>

## 2.3. 메뉴 수정 또는 삭제하는 과정

<details>
  <summary>펼치기</summary>  

* 기존의 주/부메뉴의 제목을 수정하거나 삭제하는 과정

  * 수정  

    * News 대신 Hot Issue로 바꾸고 싶을 때는 아래 코드처럼 </a> 앞 문구를 바꾸면 된다.
        ``` html
        <li class="dropdown"><a href="./news.html" data-target="news">News</a></li>
        <li class="dropdown"><a href="./news.html" data-target="news">Hot Issue</a></li>
        ```

    * 결과
  
      <img src="https://github.com/user-attachments/assets/2093045f-7a2d-41ea-aef7-e32911ce2a00" width= 600px>

    ---
    
  * 삭제  

    * 위 사진에서 Hot Issue를 삭제하려면 아래 코드처럼 수정하면 된다.
        ``` html
        <li class="dropdown"><a href="./news.html" data-target="news">News</a></li>
        ```

    * 결과
  
      <img src="https://github.com/user-attachments/assets/18a3794a-d6f1-4989-beda-0f9d4ef0b187" width= 600px>

</details>

## 2.4. Footer 메뉴 추가하는 방법

<details>
  <summary>펼치기</summary>  

* plus.html 만들기
* footer class에 코드 추가
  
  경로 설정에 주의
  ``` css
  <a href="./plus.html" class="menu-item">Plus</a>
  ```
  
* 결과
  
  <img src="https://github.com/user-attachments/assets/7d69c13b-d292-41a8-afe3-2b7a02b3fbed" width= 600px>


</details>



# 3. 문서 내용 수정하는 과정 

## 3.1. Student, Alumni 멤버 추가

<details>
  <summary>펼치기</summary>  

* /assets/member/miso.jpg 저장하기
* member-imgs class에 코드 추가
    
  경로 설정에 주의
  아래 코드를 Student 또는 Alumni 파일에 복붙하면 된다.
  ``` html
  <div class="img">
      <img src="../assets/member/miso.jpg" alt="miso">
      <p>Mi-So</p>
      <p class="sub-text">Undergraduate researcher (2024. 8~)<br><br>Language models<br>Web Programming</p>
  </div>
  ```
  
* 결과
  
  <img src="https://github.com/user-attachments/assets/44d538c8-6166-4346-8919-a10d3603c809" width= 600px>

</details>



## 3.2. Publication 논문 추가

<details>
  <summary>펼치기</summary>  

present와 past는 html 구조가 같고, 논문 입력 방식은 아래와 같다.

> ##### 문장 구조
>
> * 학술 논문 등급 or 학회 유형
> * 저자 정보
> * 제목
> * 게재된 저널 정보
> * 게재 날짜. : 만약 게재되지 않았다면 일월 제외하고 [저널 정보, _2024 (accepted)_]
> * 연구 지원 정보(ACK)
> * 해당 SCI 논문으로 졸업할(졸업한) 대학원생 이름
>
> EX)
> ``` html
> <li><p>[학술 논문 등급 or 학회 유형]</p> 저자 정보, "제목" 게재된 저널 정보, 게재 날짜. [연구 지원 정보(ACK)]</li>
> ```
>

* 추가하고자 하는 파트의 media-body 클래스에 코드 추가
* 아래 코드를 present 또는 past 파일에 복붙하면 된다.

  ``` html
  <li><p>[국제탐정대회]</p> Do-Il, Mi-Ran Nam and Young-Seob Jeong, "Dangerous Love: Exploring the Romance at Crime Scenes of Do-Il Nam and Mi-Ran" Biomolecules, Vol. 11(12), Issue 1750, pp.1-15, November 24, 2024. [ACK: None]</li>
  ```
  
* 결과
  
  <img src="https://github.com/user-attachments/assets/411fa5cb-2ee5-4641-9b7a-217831befb43" width= 600px>

</details>


## 3.3. News 소식 추가

<details>
  <summary>펼치기</summary>  

3.3.1은 title클래스로 시작하고, 3.3.2는 post 클래스로 시작한다.

### 3.3.1. 사진이 없을 때

> ##### 문장 구조
>
> * News 분류
> * 연도와 대회명 + 제목 + 팀명
> * (장소, 날짜)
>
> EX)
> ``` html
> <div class="title"><li><p>[News 분류]</p> 연도와 대회명 + 제목 + 팀명 (장소, 날짜) </li></div>
> ```  
>  


    

* 추가하고자 하는 연도의 news 클래스에 아래 코드 추가

  ``` html
  <div class="title"><li><p>[대상]</p> 2023 DAI 소프트웨어 경진대회, 팀명: dailab egg (충북대학교 E8-1, October 26, 2024)</li></div>
  ```
  
* 결과
  
  <img src="https://github.com/user-attachments/assets/bbb4b89b-fbf0-46e1-898a-469f71d82189" width= 600px>




### 3.3.2. 사진이 있을 때

사진이 있을 때는 문장을 클릭하면 사진이 슬라이드 된다.

> ##### 문장 구조
>
> * News 분류
> * 연도와 대회명 + 제목 + 팀명
> * (장소, 날짜)
> * 이미지 표시 아이콘
>
> EX)
> ``` html
> <div class="post">
>     <div class="title">
>         <li>
>             <p>[News 분류]</p> 연도와 대회명 + 제목 + 팀명 (장소, 날짜) 
>             <span class="fa-solid fa-images"></span>
>         </li>
>     </div>
>     <div class="content">
>         <img src="사진 경로" alt="사진 명칭">
>         <img src="사진 경로" alt="사진 명칭">
>     </div>
>  </div>
> ```  
>  



        

* 추가할 사진을 ./asset/news에 저장
* 추가하고자 하는 연도의 news 클래스에 아래 코드 추가


  ``` html
  <div class="post">
     <div class="title">
         <li>
             <p>[대상]</p> 2023 DAI 소프트웨어 경진대회, 팀명: dailab egg (충북대학교 E8-1, October 26, 2024)
             <span class="fa-solid fa-images"></span>
         </li>
     </div>
     <div class="content">
         <img src="./assets/news/사진1.jpg" alt="EMNLP_2023_1">
         <img src="./assets/news/사진2.jpg" alt="EMNLP_2023_2">
     </div>
  </div>
  ```
  
* 결과
  
  <img src="https://github.com/user-attachments/assets/2a8c9760-62a3-4d96-afac-39461a01a331" width= 600px>

</details>



# 4. 디자인 코드 설명

## 4.1. 스크롤 디자인 설명

<details>
  <summary>펼치기</summary>  

* style.css 파일의 9번 줄 이후 수정
* 스크롤바 css를 그림으로 나타내면 아래 사진과 같다.

  <img src="https://github.com/user-attachments/assets/69745c96-8096-4e2f-b8e3-555cde7b6900" width= 600px>


* 스크롤바 background 스타일

  linear-gradient(to bottom,  ,  ,  ,  )는 위에서 밑으로 색상 그라데이션을 주는 코드이다. 아래 코드는 0 ~ 20은 짙은 남색, 20 ~ 100은 흰색을 보여준다. 이렇게 한 이유는 nav바 색상(남색)과 그 아래 흰색 background가 스크롤바 색상과 이어지게 하기 위해서이다.
  
  만약 background: linear-gradient(to bottom, #6a11cb 0%, #2575fc 50%, #6a11cb 100%); 이렇게 하면 보라색 (#6a11cb)에서 시작하여 파란색 (#2575fc)으로 변화하고, 다시 보라색으로 변화하는 디자인이 된다. 그라데이션.
  
  ``` html
   body::-webkit-scrollbar{
       width: 15px;
       background: linear-gradient(to bottom, #1b2021 0%, #1b2021 20%, #fff 20%, #fff 100%);
   }
  ```

* 스크롤바 thumb 스타일
  
  - border-radius: 꼭짓점의 둥근 정도
  - box-shadow: thumb를 감싸는 모양의 그라데이션과 그 색상   
  
  ``` html
   body::-webkit-scrollbar-thumb{
       background-color: #89afa3;
       border-radius: 10px;
       box-shadow: inset 0px 0px 7px #c7e3da;
   }
  ```
  
* 스크롤바 track 스타일

  clamp로 한 이유는 nav바의 height가 clamp(50px, 10vh, 60px)이기 때문이다. 위에서 linear-gradient를 사용한 것과 동일한 이유로 clamp(50px, 10vh, 60px)까지만 짙은 남색을 적용해서 nav바와 스크롤바가 시각적으로 이어지게 만들었다.


  ``` html
   body::-webkit-scrollbar-track{
       background: linear-gradient(to bottom, #1b2021 0%, #1b2021 clamp(50px, 10vh, 60px), #dfdfdf clamp(50px, 10vh, 60px), #dfdfdf 100%);
       border-radius: 10px;
   }
  ```
  
* 결과
  
  <img src="https://github.com/user-attachments/assets/9702d796-cea2-4aac-87c3-c4b4437c22e0" width= 600px>


</details>


## 4.2. nav바 색상 변경

<details>
  <summary>펼치기</summary>  

- style.css의 37번줄 .menu의 background:의 색상을 바꾼다.

  <img src="https://github.com/user-attachments/assets/bfaddeb6-444b-4955-b0f5-294881941c77" width= 600px>

- 13번줄 body::-webkit-scrollbar의 0%, 20% 색상 두 개를 바꾼다.

  ```css
   background: linear-gradient(to bottom, #1b2021 0%, #1b2021 20%, #fff 20%, #fff 100%);
   /* 바꾸면 */
   background: linear-gradient(to bottom, #83b5be 0%, #83b5be 20%, #fff 20%, #fff 100%);
  ```

  <img src="https://github.com/user-attachments/assets/5eb2c4da-a2ca-4a12-a62a-74b3af901b70" width= 600px>

- 24번줄 body::-webkit-scrollbar-track의 0%, 20% 색상 두 개를 바꾼다.
  
  ```css
   background: linear-gradient(to bottom, #1b2021 0%, #1b2021 clamp(50px, 10vh, 60px), #dfdfdf clamp(50px, 10vh, 60px), #dfdfdf 100%);
   /* 바꾸면 */
   background: linear-gradient(to bottom, #83b5be 0%, #83b5be clamp(50px, 10vh, 60px), #dfdfdf clamp(50px, 10vh, 60px), #dfdfdf 100%);
  ```
  
  <img src="https://github.com/user-attachments/assets/7ee658ad-4626-474e-90a1-feb7b7287a45" width= 600px>

  </details>

## 4.3. 배경 화면 색상 변경

<details>
  <summary>펼치기</summary>  

- style.css의 9번줄 body의 background-color:를 원하는 색상으로 바꾼다.

  ```css
   background-color: #a8b9db;
  ```

  <img src="https://github.com/user-attachments/assets/c328a1bf-c91c-49fe-ad9f-16c6ec6c125d" width= 600px>

  </details>


이해 안되는 부분 있으면 아래 이메일로 연락 부탁드립니다.  
컴퓨터공학과 이채운: redmond0412@gmail.com
# dlcodns.github.io
