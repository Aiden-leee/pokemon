# Pokemon-demo



<img src="https://user-images.githubusercontent.com/52125590/234763261-5561acf7-51fb-4d08-88d3-d364bc7f710e.png" />


1. `npm install`
2. `npm start`

demo: [pokemon](https://pokemon-demo-96dd9.firebaseapp.com/)


## Introduce

PokeApi 를 활용하여 포켓몬 1세대 목록 150마리를 불러오고,
구글 로그인을 하여 catch 페이지에서 포켓몬과 배틀을 합니다.<br />
배틀은 랜덤 주사위로 진행 되며, 승리 할 경우 포켓몬을 잡을 수 있습니다.
후에 나의 포켓몬 목록에서 확인할 수 있습니다.


### Main Pokemon List Route
포켓몬 150마리를 볼수 있는 페이지이며, 검색을 통해 포켓몬을 검색할 수 도 있습니다.<br />
클릭 시 모달을 통해 포켓몬 정보를 확인 할 수 있습니다.

### Pokemon Battle Route
배틀 스크린을 통해 랜덤으로 마주치는 포켓몬과 배틀을 합니다.<br />
배틀은 주사위로 진행되고 같거나 숫자가 낮을 경우 패배하고, 높으면 승리 하여 
`Get Pokemon` 버튼을 통해 포켓몬을 잡습니다.

### My Pokemon Route
배틀을 통해 잡은 포켓몬을 볼수 있는 페이지 입니다. <br />
클릭 시 모달을 통해 정보를 볼 수 있으며, 우측 상단에 쓰레기통 아이콘을 눌러 삭제 할 수도 있습니다.

### MyPage Route
로그인을 했다면, 헤더에 우측 상단에 로그인 이미지 아이콘을 눌러 MyPage 에 접근이 가능합니다.<br />
바로 그 옆 피카츄 아이콘은 로그아웃 버튼입니다.
MyPage 에서 회원탈퇴 및 자신의 정보를 확인 할 수 있습니다.



## Skills
Pokemon-demo 에 제작할 때 사용된 스펙입니다.<br />
React, Redux-toolkit, firebase realtime database, css module


