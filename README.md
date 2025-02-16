## Project Summary

### 📅Aug 30, 2024
- **DB 설계, API**
- 프론트 달력, Modal, 테이블, 버튼 CSS, input 작업
- TailwindCSS가 적용되지 않아 새로 프로젝트 생성 (원인 불명)

### 📅 Sep 02, 2024
- **달력 라이브러리 사용**
- 백엔드에서 일정 색상을 배열로 지정하여 순차적으로 처리 (목업 처리 후 API 적용 예정)
- 검색 기능: event title로 검색 완료 (백엔드 연결 시 변수명 변경 필요)
- 일정 클릭 시 모달 띄우기, 모달에 정보 표시

### 📅 Sep 03, 2024
- **Front**: 달력 모달 띄우기, 공급업체별로 테이블 나눠서 표시
- **Back**: 카테고리 목록 가져오기 완료 (DTO 생성 후 이름만 전달)
- **DB**: 회사 측 범위 맞추지 못해 주요 기능 구현 후 시간 여유 있으면 확충 예정. 회원 DB 연결하지 않음.

### 📅 Sep 04, 2024
- **Front**: DB와 인수명 바껴서 수정, 모달 크기 및 내용 수정

### 📅 Sep 05, 2024
- **Front**: schedule 서버와 연결 성공 (CORS 문제 해결)
- 발주 스케줄링 시작, login CORS 문제 해결 (proxy 추가)
- **Back**: 선박에서 구매요청서를 해운선사 담당자에게 보여주고, 카테고리 분류 후 주문하게 하는 페이지 추가 구상
- **기타**: 기술적 문제 해결 위해 교수님 면담

### 📅 Sep 06, 2024
- **Front**: npm 라이브러리 설치 후 적용 실패, 삭제 후 다른 라이브러리 사용
- 설계 진행
- **자세한 작업 없음**

### 📅 Sep 07, 2024
- **CSS**: mui CSS 수정
- **달력**: muicss 적용 방법을 깨달음
- **달력 문제**: 달력에 애먹었으나 계속해서 공부 필요

### 📅 Sep 09, 2024
- **Front**: 
  - daypicker 추가 및 날짜 설정 관련 작업 완료
  - 테이블 열마다 체크박스 추가
  - 행 가격 합계 표시
  - 리드타임 표시 및 삭제 알림 기능 추가
  - 선택된 행 리드타임 표시 및 색상 처리
  - 카드 가격 합계 표시

### 📅 Sep 10, 2024
- **Front**: 
  - daypicker 추가 완료
  - 리드타임 계산 완료
  - 체크박스 추가, 가격 합계 표시 완료

### 📅 Sep 11, 2024
- **Front**:
  - 행 선택 및 가격 합계 표시 완료
  - 리드타임 중 가장 긴 날 표시, 빨간색 처리 완료
  - 삭제 알림 및 선택한 행 삭제 처리 완료
  - 구매신청 버튼 클릭 시 백엔드와 연동 예정

### 📅 Sep 12, 2024
- **Front**: 
  - 삭제 알림 및 체크박스 상태 수정 완료
  - 날짜 저장 및 연동 문제 해결

### 📅 Sep 05, 2024
- **Back**:  
  - Spring Boot + JWT + Spring Security 설정 완료  
  - 서버 인증 및 보안 구조 구성  

### 📅 Sep 09, 2024
- **Front**:  
  - MUI(Material UI) 적용  
  - CSS 직접 정의 유지 결정 (임의 제거 X)  

### 📅 Sep 10, 2024
- **Front**:  
  - MUI v6 + MUI X Date Pickers v7.16.0 사용 결정  
  - `dayjs`를 활용하여 날짜 선택 기능 적용  
  - `BasicDatePicker` 날짜 표시 오류 수정 진행  
- **Logic**:  
  - `Addbestdate` 함수에서 날짜 계산 로직 추가  
  - `DatePicker`에서 Accept 버튼 클릭 시 값 받도록 처리  

### 📅 Sep 11, 2024
- **Front**:  
  - 카드별 `username` 기준 가격 합계 계산 기능 추가  
  - 통화 단위별 총합 계산 기능 추가  
- **Logic**:  
  - 체크된 항목 중 가장 긴 `leadtime` 계산 함수 `getLongestCheckedLeadTime` 구현  

### 📅 Sep 12, 2024
- **Front**:  
  - Modal UI 수정 (문구 및 버튼 위치 변경)  
- **Logic**:  
  - `handleDelete` 함수 개선 (체크된 `itemid` 배열로 서버 전송)  

### 📅 Sep 13, 2024
- **Front**:  
  - 버튼 클릭 시 해당 행의 `itemid` 가져오는 기능 구현  

### 📅 Sep 15, 2024
- **Front**:  
  - 테이블 전체 선택 & 개별 체크박스 독립 작동 구현  
  - 행 클릭과 체크박스 클릭 동작 분리  

### 📅 Sep 19, 2024
- **Front**:  
  - `orderId`별 데이터 분류 및 선택 시 상세 정보 표시 기능 추가  

### 📅 Sep 20, 2024
- **Front**:  
  - 카드 클릭 시 `orderId` 기반 API 호출 후 페이지 이동 기능 구현  
  - `PurchaseRequest` 페이지에서 특정 `orderId` 페이지로 직접 이동 처리  
  - 카드 확장 아이콘 클릭 시 페이지 이동 방지 기능 추가  

### 📅 Sep 23, 2024
- **Front**:  
  - DataGrid에서 버튼 포함된 열 렌더링 기능 추가  
  - 네비게이션 메뉴 확장 & 축소 기능 구현  
- **Logic**:  
  - 메인 페이지에서 로컬 스토리지의 사용자 `alias` 값 표시  

### 📅 Sep 24, 2024
- **Front**:  
  - DataGrid의 내장 체크박스 사용 결정  
  - 체크박스 클릭 시에만 선택되도록 설정  
  - 행 클릭 시 `itemid`만 추출하여 별도 처리  
- **Logic**:  
  - DataGrid 행의 ID로 `itemid` 사용 확정  

### 📅 Sep 25, 2024
- **Front**:  
  - 공급자 선택 시 해당 `itemid`를 가져오는 기능 구현  
- **Back**:  
  - 공급자 목록을 가져오는 API 없음 (대체 방법 검토 중)  
- **Logic**:  
  - 주문 상세 데이터 중 특정 키 값에 맞춰 배열 재구성 기능 추가  

### 📅 Sep 26, 2024
- **Front**:  
  - DataGrid에서 공급자 변경 시 `input` 값 초기화되는 문제 해결  
- **Logic**:  
  - 행 선택 시 `rowId` 대신 공급자별 `itemid` 전송하도록 변경  
  - 수량 변경 시 `amount` 및 `totalAmount` 자동 업데이트 기능 추가  

### 📅 Sep 27, 2024
- **Front**:  
  - 수량 조절 시 `amount` 값 업데이트 기능 구현  
- **Logic**:  
  - 선택된 행의 `amount` 값을 화폐 단위별 합계로 계산하는 함수 추가  
  - 공급자별로 다른 수량만 화면에 표시하는 기능 적용  
  - 수량 변경 시 `formatPrice` 적용하여 화폐 단위 유지  

### 📅 Sep 29, 2024
- **Front**:  
  - 모달이 열린 상태에서도 카드 확장이 자연스럽게 이루어지도록 개선  
  - React FullCalendar 사용하여 일정 관리 기능 추가  
- **Style**:  
  - 이벤트 앞에 점을 표시하는 CSS 적용  

### 📅 Oct 02, 2024
- **Logic**:  
  - 날짜별 `leadtime` 데이터 전처리 로직 구현  
  - 날짜 순서에 따라 아이템 `leadtime` 값 표시  
  - 선택 날짜 이후 값은 `null` 처리  

### 📅 Oct 04, 2024
- **Front**:  
  - `orderDetails` 배열을 특정 키 값 기준으로 재구성  
  - 주문의 첫 번째 상세 항목만 표시하는 기능 추가  

### 📅 Oct 07, 2024
- **Front**:  
  - 로그인 후 역할별 첫 화면을 다르게 설정하는 기능 추가  
- **Logic**:  
  - `itemId`를 데이터 구조에서 활용하는 것 확인  

### 📅 Oct 10, 2024
- **Front**:  
  - 체크박스 문제 해결  
  - 날짜 관련 버그 수정  
  - 추천 상품 목록 UI & 기능 추가  

### 📅 Oct 11, 2024
- **Front**:  
  - 구매 신청 기능 추가  
  - 주문 목록 페이지 UI 구현 완료  
- **Logic**:  
  - 기타 기능 개선 (비활성 항목 처리, 총 주문 금액 표시 등)  

### 📅 Oct 12, 2024
- **Back**:  
  - 구매 요청 목록 페이지 백엔드 연결  
- **Front**:  
  - 구매 요청 상세 페이지 기능 구현  
  - 스케줄 수정 및 화면 설계 맞춤 작업  
- **Logic**:  
  - 추가 기능 개선 및 검토  
