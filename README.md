
## 💡 선박, 육상, 공급업체간 기부속/선용품 공급망 관리 시스템
- **목표:** 해운선사, 선박(구매자), 공급업체(판매자) 간의 역할에 맞춘 시스템을 구축하여 기부속 및 선용품의 판매, 주문, 공급 과정을 원활하게 관리.

### (+) 선용품 카테고리 분류 및 리드타임 예측 서비스
-선용품 등록 시 -> 추천 카테고리 분류를 통한 등록
-선용품을 너무 일찍 발주할 경우 -> 불필요한 보관비용이 발생
-다양한 선용품의 리드타임을 예측하여 최적의 발주 시점을 찾아 보관 및 운영에 드는 비용을 최소화하고자 함.

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
  
 
|Home|(선박)구매요청|(해운선사)대시보드|(해운선사)요청건별 품목 및 리드타임 확인-Model1|
|---|---|---|---|
|![로그인](https://github.com/user-attachments/assets/7e08dd1d-02d2-42ba-92b7-5e58028ef9ba)|![구매요청내역](https://github.com/user-attachments/assets/4409c019-2d13-4aba-8f91-ab03d3913868)|![해운선사대시보드+리드타임](https://github.com/user-attachments/assets/5de51580-b91c-459c-a8f8-c6bc43b828a1)|![발주목록확인+리드타임확인](https://github.com/user-attachments/assets/49229cf7-4cb4-446d-83f9-131d2eee12ec)|
|선박/해운선사/공급업체 Role 별 회원가입 및 로그인 |선박이 창고출고일 지정하여 선사에 구매요청함|해운선사는 대시보드에서 발주요청 품목 / 출고일정 / 리드타임 확인 가능|요청 건별 목록 조회|

|(해운선사)대체상품 확인 |(해운선사)품목의 과거 리드타임 확인 |(공급업체)대시보드|(공급업체)기자재 등록-Model2|
|---|---|---|---| 
|![대체상품확인](https://github.com/user-attachments/assets/99bf4390-e584-4502-8d21-8c8dd4601ad9)|![품목별 과거리드타임확인](https://github.com/user-attachments/assets/62a2a0b7-f608-4c2e-8c55-73b0a2b086be)|![공급업체자기물건확인](https://github.com/user-attachments/assets/eeaffd17-445b-4a57-8798-cd2ac655d3fb)|![기자재 등록](https://github.com/user-attachments/assets/138ce76c-397f-4d4c-9c85-9738280ed41c)|
|리드타임 over로 인하여 지정창고입고일에 입고가 불가능한 경우 alert=> 대체상품 추천|품목별 과거 리드타임 차트|공급업체로 들어온 주문 관리 및 조회|새로운 기자재 등록 시 카테고리 추천 분류|

[![Watch the video](https://github.com/user-attachments/assets/37ef937e-c45e-415d-8793-32359c2f86ed)](https://www.youtube.com/watch?v=drF5rMgZzB0)
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
  
## 노션 
https://www.notion.so/f881a47083ea4b4295ce94f2be6a3920?pvs=4
