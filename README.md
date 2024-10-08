
## 💡 프로젝트 : 선박, 육상, 공급업체간 기부속/선용품 공급망 관리 시스템
```
해운선사, 선박(구매자), 공급업체(판매자) 간의 역할에 맞춰 시스템을 구축하여
기부속 및 선용품의 판매, 주문, 공급 과정을 원활하게 관리하고자 함.
```
### (+) 선용품 카테고리 분류 및 리드타임 예측 서비스
```
선용품 등록 시 -> 추천 카테고리 분류를 통한 등록
선용품을 너무 일찍 발주할 경우 -> 불필요한 보관비용이 발생
선용품을 너무 늦게 발주할 경우 -> 선박 운영에 차질이 발생할 수 있음
다양한 선용품의 리드타임을 예측하여 최적의 발주 시점을 찾아 보관 및 운영에 드는 비용을 최소화하고자 함.
```
## 📈 개발 기간
- 2024.08.26 - 2024.10.02.
  
## 🔧 개발 환경
- Java: 17.0.10
- JDK: 17.0.10
- React: 18.2.0
- IDE: STS4
- Framework: Spring Boot 2
- Database: MySQL 8.0.37
- Machine learning / Deep Learning : BERT, BertTransformer, XGBClassifier , Lightbgmregressor
  
## 📌 모델 사용 주요 기능
#### 1. 새 상품 등록시 카테고리 분류 추천
- 모델: BERT 임베딩 / BertTransformer / XGBClassifier
- 기능: 사용자가 입력한 선용품 정보를 바탕으로 카테고리1, 2 분류.
- 기술: 텍스트는 BERT 임베딩을 활용하여 선용품의 텍스트 데이터를 분석하고, BertTransformer 최종 분류.
- 성과 목표: F1 스코어 85% 이상 달성.
#### 2. 리드타임에 따른 발주 날짜 추천
- 모델: Word2Vec 임베딩 / LightGBMregressor
- 기능: 예상 리드타임을 바탕으로 품목별 리드타임과 최적의 발주 날짜를 추천.
- 기술: 텍스트는 BERT 임베딩, 수치형 피처는 인코딩 및 정규화를 통해 회귀 모델을 사용.
- 성과 목표: RMSE 및 MAE 10 이하.


  
  
## 📋 웹 서비스 기능
- 1. 발주 현황 조회 및 입력
- 발주 현황 조회와 발주 입력을 통해 선용품의 현재 상태를 확인하고, 추가 발주를 관리.
- 2. 선용품 선택 및 리드타임 예측
- 사용자가 카테고리를 선택하여 선용품 리스트를 조회하고, 예상 리드타임을 확인.
- 3. 장바구니 및 재고 관리
- 예상 리드타임을 기준으로 통합 리드타임을 제공하며, 과거 리드타임 추이와 대체 품목을 추천.
  
 
|Home|검색|병원 리스트|병원 정보|
|---|---|---|---|
|![image](https://github.com/user-attachments/assets/9b9edf92-73c9-4a6b-b944-daa79babfd22)|![image](https://github.com/user-attachments/assets/7946195f-34f4-4349-ae17-09cc8a6caf22)|![image](https://github.com/user-attachments/assets/d7277665-9476-4182-8f4c-a78d07f37adf)|![image](https://github.com/user-attachments/assets/70c3a9a8-3d26-43ec-b0c9-edf7c2e23b54)|
|버튼 클릭 Link 연결|사용자 선택|선택에 따른 병원 리스트|세부정보, 지도, 찜하기|

|건강백과사전|커뮤니티 게시판|QnA 게시판|마이페이지|
|---|---|---|---|
|![image](https://github.com/user-attachments/assets/cbf8d215-d725-4f92-8f04-34539fa54293)|![image](https://github.com/user-attachments/assets/00504f82-c2c2-4a2b-8202-9f5f47f82fdc)|![image](https://github.com/user-attachments/assets/371ea399-2494-48f8-8f50-12a76e5eb999)|![image](https://github.com/user-attachments/assets/e6c4485e-8dd4-4aae-bc41-6d85399ea0b8)|
|건강 정보 출력|게시글 CRUD 및 댓글 작성|관리자 권한 답변 작성|개인정보 및 찜한 병원(해제) 작성글|


[![Watch the video](https://img.youtube.com/vi/ccOyTW125Is/maxresdefault.jpg)]([https://www.youtube.com/watch?v=drF5rMgZzB0])
https://youtu.be/drF5rMgZzB0 사실 이겁니다. 
SMARTSHIP 시연 영상입니다.




## 📊 데이터 분석
### 모델 선택 및 학습
#### 카테고리 분류
- BERT 임베딩: 'Machinery, Assembly, 청구품목, Part No.1' 결합하여 임베딩 생성.
- BertTransformer : 텍스트 데이터와 수치형 데이터를 결합하여 최적의 카테고리 분류 모델 생성.
#### 리드타임 예측
- Word2Vec 임베딩 및 리드타임 기반 추가 피처 생성, 창고입고일 기반 추가 피처 생성.
- lgbmregressor : 
#### 성능 평가 및 튜닝
- 성능 평가: K-폴드 교차 검증으로 모델의 일반화 능력 평가 및 RMSE, MAE 회귀 지표로 평가.
- 튜닝: 학습률, 뉴런 수, 레이어 수, 배치 크기 등 하이퍼파라미터 조정, Dropout, L2 정규화로 과적합 방지.
  

