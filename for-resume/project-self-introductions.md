# 프로젝트별 자기소개서

> 역할-페인포인트-솔루션[사용기술]-성과 형식, 각 600자 내외

---

## 1. BIM Ontology - Semantic BIM Pipeline

**프로젝트 이름**: BIM Ontology - Semantic BIM Pipeline

**목적 (페인포인트)**:
- IFC 파일의 시맨틱 웹 기술 활용 어려움
- Navisworks 내보내기 시 타입 정보 손실
- 대용량 BIM 데이터의 효율적 쿼리/추론 필요

**성과**:
- IFC → RDF/OWL 변환 파이프라인 구축
- 29개 카테고리 자동 분류 (Name-based Classification)
- LRU 캐시로 **14,800x+ 쿼리 속도 향상**
- 7탭 웹 대시보드 (Overview, Buildings, Elements, SPARQL, Properties, Ontology, Reasoning)

**사용 기술**: Python, ifcopenshell, rdflib, owlrl, pyshacl, FastAPI, Docker

### 자기소개서 (600자)

건설 프로젝트에서 BIM 데이터 분석 파이프라인의 설계 및 개발을 단독으로 수행했습니다.

**[페인포인트]** 기존 IFC(Industry Foundation Classes) 파일은 시맨틱 웹 기술과의 연동이 어렵고, Navisworks 내보내기 시 타입 정보가 손실되며, 대용량 BIM 데이터에 대한 효율적인 쿼리와 추론이 불가능했습니다.

**[솔루션]** Python과 ifcopenshell을 활용해 IFC → RDF/OWL 변환 파이프라인을 구축했습니다. rdflib 기반 SPARQL 쿼리 엔진과 pyshacl 검증, owlrl 추론 기능을 통합하고, LRU 캐시 전략을 적용했습니다. FastAPI로 RESTful API를 설계하고, 7탭 구성의 웹 대시보드를 개발하여 Buildings, Elements, SPARQL 쿼리, Ontology 시각화 등 다양한 분석 기능을 제공했습니다.

**[성과]** 29개 카테고리 자동 분류 알고리즘으로 Name-based Classification을 구현했고, LRU 캐시 적용으로 반복 쿼리 속도를 14,800배 이상 향상시켰습니다. Smart Plant 3D 10개 패턴을 지원하며, Palantir Foundry 스타일의 동적 스키마 편집 API를 통해 사용자 정의 온톨로지 확장이 가능한 시스템을 완성했습니다.

---

## 2. Quant Investment Automation Agent (algo-quant)

**프로젝트 이름**: Quant Investment Automation Agent

**목적 (페인포인트)**:
- 개인 투자자의 체계적인 퀀트 투자 시스템 부재
- 국내/해외 주식 + 암호화폐 통합 관리의 어려움
- 거시경제 분석과 투자 전략 연계의 복잡성

**성과**:
- 다중 자산 지원: 미국 주식(FMP), 한국 주식(KIS/키움), 암호화폐(Binance/Upbit)
- Fama-French 3팩터/5팩터 모델 구현
- FRED 지표 기반 거시경제 체제 분류
- Walk-forward 백테스팅 엔진
- Dash 기반 반응형 다크 테마 웹 대시보드

**사용 기술**: Python, pandas, numpy, Dash, FMP API, FRED API, KIS API, Binance API

### 자기소개서 (600자)

개인 투자자를 위한 통합 퀀트 투자 자동화 시스템의 설계 및 개발을 수행했습니다.

**[페인포인트]** 개인 투자자가 체계적인 퀀트 투자를 수행하기 위한 통합 시스템이 부재했습니다. 미국/한국 주식과 암호화폐를 하나의 플랫폼에서 관리하기 어렵고, 거시경제 지표 분석과 투자 전략을 연계하는 것이 복잡했습니다.

**[솔루션]** Python 기반으로 FMP, KIS, 키움, Binance, Upbit 등 5개 이상의 API를 통합하는 데이터 수집 레이어를 구축했습니다. Fama-French 3팩터/5팩터 모델을 구현하여 팩터 투자 전략을 적용하고, FRED API를 연동하여 거시경제 체제(확장/수축/위기)를 자동 분류하는 시스템을 개발했습니다. Walk-forward 방식의 백테스팅 엔진으로 과적합을 방지했습니다.

**[성과]** 다중 자산군(미국 주식, 한국 주식, 암호화폐)을 단일 대시보드에서 모니터링할 수 있는 Dash 기반 반응형 웹 대시보드를 구축했습니다. Binance Paper Trading 연동으로 실제 거래 환경에서의 전략 검증이 가능해졌으며, 거시경제 체제에 따른 동적 포트폴리오 리밸런싱 로직을 통해 시장 상황에 적응하는 투자 시스템을 완성했습니다.

---

## 3. Autonomous Driving ML Platform (physical-unity)

**프로젝트 이름**: Autonomous Driving ML Platform

**목적 (페인포인트)**:
- 자율주행 모션 플래닝 알고리즘 학습 환경 구축의 어려움
- 국제 안전 표준(ISO 21448 SOTIF, UN R171/R157)과의 정합성 검증 필요
- Trial-Error 기반 안전 정책 발견 시스템 부재

**성과**:
- Unity + ML-Agents + PyTorch 통합 플랫폼 구축
- 254D 벡터 관측 공간 설계 (Ego State, Route, NPC, Lane, Goal)
- Phase 기반 커리큘럼 학습 (Stage 0~C 완료)
- Stage C에서 8개 동시 NPC 환경, **0% 충돌률 달성**

**사용 기술**: Unity 6, ML-Agents, PyTorch, C#, Python, RTX 4090

### 자기소개서 (600자)

자율주행 모션 플래닝을 위한 강화학습 시뮬레이션 플랫폼의 설계 및 개발을 수행했습니다.

**[페인포인트]** 자율주행 알고리즘 학습을 위한 시뮬레이션 환경 구축이 어렵고, ISO 21448 SOTIF 및 UN R171/R157 등 국제 안전 표준과의 정합성을 검증할 수 있는 체계가 부재했습니다. Trial-Error 방식으로 안전한 주행 정책을 발견하는 시스템이 필요했습니다.

**[솔루션]** Unity 6 게임 엔진과 ML-Agents, PyTorch를 통합한 강화학습 플랫폼을 구축했습니다. 254차원 벡터 관측 공간을 설계하여 Ego State, Route, NPC, Lane, Goal 정보를 에이전트에게 제공하고, PPO/SAC 알고리즘을 적용했습니다. Stage 0부터 C까지 난이도가 점진적으로 증가하는 Phase 기반 커리큘럼 학습 체계를 도입하여 학습 효율을 극대화했습니다.

**[성과]** Stage C 환경에서 8개의 NPC 차량이 동시에 존재하는 복잡한 교통 상황에서 0% 충돌률을 달성했습니다. SOTIF Triggering Condition 분석을 통합하여 안전 표준 정합성 검증이 가능해졌으며, RTX 4090 GPU 최적화로 학습 속도를 향상시켰습니다. 현재 Stage D(더 복잡한 시나리오) 개발이 진행 중입니다.

---

## 4. DXTnavis - Navisworks Property Viewer & 4D Automation Plugin

**프로젝트 이름**: Navisworks 2025 Property Viewer & 4D Automation Plugin

**목적 (페인포인트)**:
- Navisworks에서 BIM 속성 탐색의 비효율성
- 수작업 4D 시뮬레이션(TimeLiner) 설정의 번거로움
- AWP(Advanced Work Packaging) 워크플로우 자동화 필요

**성과**:
- 계층 기반 객체 탐색 및 검색 기능
- Raw + Refined CSV 듀얼 내보내기
- CSV → TimeLiner 자동 파이프라인 (AWP 4D)
- Object Grouping 뷰 (445K+ 데이터 대응)

**사용 기술**: C#, .NET Framework 4.8, WPF (MVVM), Navisworks API 2025

### 자기소개서 (600자)

Navisworks 2025용 BIM 속성 뷰어 및 4D 시뮬레이션 자동화 플러그인의 설계 및 개발을 수행했습니다.

**[페인포인트]** Navisworks에서 BIM 모델의 속성 정보를 탐색하고 추출하는 과정이 비효율적이었습니다. 4D 시뮬레이션(TimeLiner) 설정을 수작업으로 진행해야 했고, AWP(Advanced Work Packaging) 기반 공정 관리 워크플로우를 자동화할 수 있는 도구가 부재했습니다.

**[솔루션]** C#과 .NET Framework 4.8 기반으로 Navisworks API를 활용한 WPF 플러그인을 개발했습니다. MVVM 패턴을 적용하여 유지보수성을 높이고, 계층 기반 객체 탐색 및 검색 기능을 구현했습니다. CSV 내보내기 시 Raw 데이터와 Refined 데이터를 동시에 생성하는 듀얼 내보내기 기능을 개발하고, CSV에서 TimeLiner로 자동 변환하는 파이프라인을 구축했습니다.

**[성과]** 445,000개 이상의 BIM 객체를 처리할 수 있는 Object Grouping 뷰를 구현하여 대용량 프로젝트 대응이 가능해졌습니다. Schedule Builder를 통해 공정 CSV를 자동 생성하고, ViewPoint Snapshot 저장/복원 기능으로 작업 연속성을 보장했습니다. AWP 4D 워크플로우 자동화를 통해 4D 시뮬레이션 설정 시간을 대폭 단축했습니다.

---

## 5. Claude Code Configuration Framework (cc-initializer)

**프로젝트 이름**: Claude Code Configuration Framework

**목적 (페인포인트)**:
- Claude Code 사용 시 반복적인 설정 작업
- 개발 워크플로우의 체계화 필요
- Agent/Skill 기반 자동화 환경 구축의 어려움

**성과**:
- 25 Agents + 18 Skills + 6 Commands 통합 프레임워크
- `/init --full` 원커맨드 프로젝트 초기화
- Discovery → Planning → Development → Review → Release 워크플로우
- Phase/Sprint 기반 진행 관리

**사용 기술**: Shell (Bash), YAML/JSON, Markdown

### 자기소개서 (600자)

Claude Code AI 에이전트 기반 개발 워크플로우 자동화 프레임워크의 설계 및 개발을 수행했습니다.

**[페인포인트]** Claude Code를 새 프로젝트에 적용할 때마다 반복적인 설정 작업이 필요했습니다. 개발 워크플로우가 체계화되지 않아 일관성 있는 프로젝트 관리가 어려웠고, Agent와 Skill 기반의 자동화 환경을 구축하는 데 진입 장벽이 높았습니다.

**[솔루션]** Shell 스크립트와 YAML/JSON 설정 파일 기반의 프레임워크를 설계했습니다. 25개의 전문화된 Agent(code-reviewer, test-helper, git-troubleshooter 등)와 18개의 Skill, 6개의 Command를 통합한 생태계를 구축했습니다. `/init --full` 단일 명령으로 프로젝트 전체 설정이 완료되도록 원커맨드 초기화 시스템을 개발했습니다.

**[성과]** Discovery → Planning → Development → Review → Release로 이어지는 5단계 개발 워크플로우를 자동화했습니다. Phase/Sprint 기반 진행 관리 시스템을 도입하여 프로젝트 진척도를 체계적으로 추적할 수 있게 되었으며, Git 워크플로우(Conventional Commits, PR 생성)와 문서 동기화(CHANGELOG, README)를 자동화하여 개발 생산성을 크게 향상시켰습니다.

---

## 6. Ultra CC-Init (Token-Optimized Claude Code Framework)

**프로젝트 이름**: Ultra CC-Init (Token-Optimized Claude Code Framework)

**목적 (페인포인트)**:
- cc-initializer의 높은 토큰 소비 (세션 초기화 ~38,000 토큰)
- 매 턴마다 CLAUDE.md 로딩으로 인한 비효율
- 대규모 Agent 로딩 오버헤드

**성과**:
- **97% 토큰 절감** (38K → 1.1K 초기화)
- MANIFEST 기반 1-line Agent 라우팅
- 82% CLAUDE.md 압축 (1,700 → 300 per turn)
- 4-tier 점진적 로딩 시스템

**사용 기술**: Shell (Bash), YAML/JSON, Markdown

### 자기소개서 (600자)

Claude Code 프레임워크의 토큰 사용량 최적화 프로젝트를 설계 및 개발했습니다.

**[페인포인트]** 기존 cc-initializer 프레임워크는 세션 초기화 시 약 38,000 토큰을 소비하여 비용 효율성이 낮았습니다. 매 턴마다 전체 CLAUDE.md 파일을 로딩하는 구조로 인해 불필요한 토큰 소모가 발생했고, 25개 Agent를 모두 메모리에 로딩하는 오버헤드가 문제였습니다.

**[솔루션]** MANIFEST 기반 1-line Agent 라우팅 시스템을 설계하여 필요한 Agent만 동적으로 로딩되도록 개선했습니다. CLAUDE.md 문서를 Header와 Detail로 분리하는 2-Tier 문서 구조를 도입하고, 4-tier 점진적 로딩 시스템(Core → Extended → Domain → Optional)을 구현하여 상황에 따라 필요한 정보만 로딩되도록 최적화했습니다.

**[성과]** 세션 초기화 토큰을 38,000에서 1,100으로 97% 절감했습니다. 매 턴 CLAUDE.md 로딩량을 1,700에서 300 토큰으로 82% 압축하여 총 5,400라인 이상을 절감했습니다. 이를 통해 Claude Code MAX 플랜에서 더 많은 대화 턴을 활용할 수 있게 되었고, API 비용 효율성이 크게 향상되었습니다.

---

## 7. Claude Code Framework - Windows Native Edition

**프로젝트 이름**: Claude Code Framework - Windows Native Edition

**목적 (페인포인트)**:
- Windows 환경에서 Bash 스크립트 실행 불가
- CRLF 줄바꿈으로 인한 Hook 실행 실패
- WSL/Git Bash 의존성 문제

**성과**:
- 네이티브 PowerShell Hooks 5종 구현
- CRLF 줄바꿈 이슈 완전 해결
- cc-initializer v4.5 기반 완전 호환
- 위험 명령 차단, 사용량 추적, 진행률 자동화

**사용 기술**: PowerShell, Shell, JSON/YAML

### 자기소개서 (600자)

Claude Code 프레임워크의 Windows 네이티브 버전 개발을 수행했습니다.

**[페인포인트]** cc-initializer 프레임워크가 Bash 스크립트 기반이어서 Windows 환경에서 직접 실행이 불가능했습니다. Windows의 CRLF 줄바꿈 방식으로 인해 Hook 스크립트 실행이 실패하는 문제가 빈번했고, WSL이나 Git Bash에 의존해야 하는 불편함이 있었습니다.

**[솔루션]** 기존 Bash 기반 Hook들을 PowerShell로 완전히 재작성했습니다. PreToolUse, PostToolUse, Notification 등 5종의 핵심 Hook을 Windows 네이티브로 구현하고, CRLF/LF 줄바꿈 이슈를 자동으로 처리하는 로직을 추가했습니다. Windows 환경에서는 chmod가 불필요하므로 실행 권한 관련 코드를 제거하고 Windows 자동 실행 방식에 맞게 최적화했습니다.

**[성과]** cc-initializer v4.5와 완전 호환되는 Windows 네이티브 버전을 완성했습니다. 위험 명령 차단(rm -rf, git reset --hard 등), 사용량 추적, 진행률 자동화 기능이 Windows 환경에서도 동일하게 동작합니다. WSL 없이 순수 Windows 환경에서 Claude Code 프레임워크를 활용할 수 있게 되어 Windows 사용자의 접근성이 크게 향상되었습니다.

---

## 8. Claude Code Framework + Knowledge Management + Obsidian

**프로젝트 이름**: Claude Code Framework + Knowledge Management + Obsidian

**목적 (페인포인트)**:
- 프로젝트 지식의 분산 및 검색 어려움
- 코드/문서/커밋에서 지식 발견 자동화 부재
- Obsidian vault와의 연동 필요

**성과**:
- Knowledge Discovery: 코드/문서/커밋에서 자동 지식 발견
- Knowledge Search: 구축된 지식 베이스 검색
- Knowledge Linker: 그래프 기반 연결, 백링크 생성
- Obsidian 동기화 (wikilinks, Dataview metadata)

**사용 기술**: Shell (Bash), Obsidian, Markdown, JSON/YAML

### 자기소개서 (600자)

Claude Code 프레임워크와 Obsidian 지식 관리 시스템의 통합 개발을 수행했습니다.

**[페인포인트]** 프로젝트에서 생성되는 지식(코드 패턴, 아키텍처 결정, 문제 해결 방법 등)이 코드, 문서, 커밋 메시지에 분산되어 검색과 재활용이 어려웠습니다. 지식 발견 과정이 수동으로 이루어졌고, 개인 지식 관리 도구인 Obsidian과의 연동이 필요했습니다.

**[솔루션]** Knowledge Discovery 모듈을 개발하여 코드 주석, 문서, Git 커밋 메시지에서 자동으로 지식을 추출하고 구조화하는 시스템을 구축했습니다. Knowledge Search 기능으로 구축된 지식 베이스를 검색할 수 있게 하고, Knowledge Linker를 통해 관련 지식 간 그래프 기반 연결과 백링크를 자동 생성하도록 구현했습니다.

**[성과]** Obsidian과의 완전한 동기화를 달성하여 wikilinks 형식과 Dataview 플러그인 메타데이터를 지원합니다. 기존 28개 Agent에서 지식 관리 특화 Agent를 추가하여 총 28 Agents + 19 Skills로 확장했습니다. 5개의 Obsidian 템플릿(Daily Note, Project, Meeting, Decision, Learning)을 제공하여 일관된 지식 문서화가 가능해졌습니다.

---

## 9. Claude Code Skills Collection

**프로젝트 이름**: Claude Code Skills Collection

**목적 (페인포인트)**:
- Claude Code 확장 기능의 재사용성 부족
- 반복적인 워크플로우 정의 작업
- 도메인별 전문 스킬 부재

**성과**:
- 45+ Skills 컬렉션 구축
- 카테고리: Project Init, Testing, Deploy, Docs, AI Tools, UI/UX, Expert Personas, Security, n8n, Crypto, Dev Tools
- TDD, Codex 연동, Landing Page Guide 등 전문 스킬

**사용 기술**: Python, Shell, HTML, Markdown

### 자기소개서 (600자)

Claude Code AI 에이전트용 재사용 가능한 Skill 컬렉션의 설계 및 개발을 수행했습니다.

**[페인포인트]** Claude Code에서 반복적으로 사용하는 워크플로우를 매번 새로 정의해야 했습니다. 개발한 확장 기능의 재사용성이 낮아 프로젝트 간 지식 공유가 어려웠고, TDD, 보안 감사, 랜딩페이지 작성 등 특정 도메인에 특화된 전문 스킬이 부재했습니다.

**[솔루션]** Markdown 기반의 Skill 정의 형식을 설계하고, 도메인별로 분류된 45개 이상의 Skill 컬렉션을 구축했습니다. Project Init, Testing, Deploy, Documentation, AI Tools, UI/UX, Expert Personas, Security, n8n Workflow, Crypto, Dev Tools, Claude Code 등 12개 카테고리로 체계화하여 필요한 Skill을 쉽게 찾을 수 있도록 구성했습니다.

**[성과]** TDD(Test-Driven Development) Skill로 테스트 우선 개발 워크플로우를 자동화하고, Codex 연동 Skill로 듀얼 AI 검증 체계를 구축했습니다. Landing Page Guide Skill은 11가지 필수 요소를 포함한 고전환율 랜딩페이지 작성을 지원합니다. n8n 워크플로우 7종 Skill을 통해 업무 자동화 템플릿을 즉시 활용할 수 있으며, 오픈소스로 공개하여 커뮤니티에서 활용되고 있습니다.

---

## 10. n8n Workflow Collection

**프로젝트 이름**: n8n Workflow Collection

**목적 (페인포인트)**:
- 반복적인 업무 자동화 구축의 어려움
- AI 통합 워크플로우 설계 필요
- 비용 효율적인 자동화 시스템 부재

**성과**:
- Stock Tracking System: 미국/한국 주식 + AI 분석 + Telegram 알림 (~$0.22/월)
- Virality TikTok: AI 기반 바이럴 마케팅 자동화 + Fraud Detection
- 기술 지표 자동 계산 (RSI, MACD, Bollinger Bands)

**사용 기술**: n8n, Docker, Alpha Vantage API, KIS API, OpenAI API, Telegram Bot API

### 자기소개서 (600자)

n8n 기반 업무 자동화 워크플로우 시스템의 설계 및 개발을 수행했습니다.

**[페인포인트]** 주식 모니터링, 마케팅 자동화 등 반복적인 업무를 자동화하는 시스템 구축이 어려웠습니다. AI를 업무 자동화에 통합하는 방법이 명확하지 않았고, 클라우드 서비스 기반 자동화는 비용이 높아 개인 사용자에게 부담이 되었습니다.

**[솔루션]** n8n을 Docker로 셀프호스팅하여 비용을 최소화한 자동화 환경을 구축했습니다. Stock Tracking System 워크플로우에서 Alpha Vantage와 KIS API를 연동하여 미국/한국 주식 데이터를 수집하고, GPT-4o-mini를 활용한 AI 분석 후 Telegram으로 알림을 전송하는 파이프라인을 개발했습니다. RSI, MACD, Bollinger Bands 등 기술 지표 자동 계산 로직을 구현했습니다.

**[성과]** 월 $0.22 수준의 극히 낮은 운영 비용으로 주식 모니터링 시스템을 운영하고 있습니다. Virality TikTok 워크플로우는 Apify 연동으로 트렌드 콘텐츠를 수집하고 AI 기반 바이럴 가능성 분석 및 Fraud Detection을 수행합니다. 구축된 워크플로우 템플릿을 오픈소스로 공개하여 n8n 커뮤니티에서 활용되고 있습니다.

---

## 11. Student Manager (학원 수업 관리 시스템)

**프로젝트 이름**: Student Manager (학원 수업 관리 시스템)

**목적 (페인포인트)**:
- 학원/과외 수업 일정 관리의 비효율성
- 그룹/개인/보충 수업 추적 어려움
- 과제 관리 및 진척도 시각화 부재

**성과**:
- 시간표 매트릭스 보드 (과목 × 시간)
- 드래그 앤 드롭 수업 이동
- 실시간 상태 추적 (대기/진행중/완료)
- Firebase 실시간 데이터 동기화

**사용 기술**: React 18, TypeScript, Vite, Zustand, TailwindCSS, @dnd-kit/core, Firebase

### 자기소개서 (600자)

학원 및 과외 수업 관리를 위한 웹 애플리케이션의 설계 및 개발을 수행했습니다.

**[페인포인트]** 학원이나 과외에서 수업 일정을 관리할 때 스프레드시트나 수기로 관리하는 경우가 많아 비효율적이었습니다. 그룹 수업, 개인 수업, 보충 수업 등 다양한 형태의 수업을 체계적으로 추적하기 어려웠고, 학생별 과제 관리와 진척도를 시각화하는 도구가 부재했습니다.

**[솔루션]** React 18과 TypeScript 기반으로 반응형 웹 애플리케이션을 개발했습니다. 과목과 시간을 축으로 하는 시간표 매트릭스 보드를 구현하고, @dnd-kit 라이브러리를 활용하여 드래그 앤 드롭으로 수업을 이동할 수 있는 직관적인 UI를 개발했습니다. Zustand로 클라이언트 상태를 관리하고, Firebase Realtime Database를 연동하여 실시간 데이터 동기화를 구현했습니다.

**[성과]** 대기/진행중/완료 상태를 실시간으로 추적할 수 있는 수업 관리 시스템을 완성했습니다. 개인/그룹 과제 관리 기능과 주간/월간 리포트 자동 생성 기능을 통해 학습 진척도를 체계적으로 관리할 수 있게 되었습니다. TailwindCSS로 모바일 반응형 디자인을 적용하여 태블릿이나 스마트폰에서도 사용이 가능하며, Vercel을 통해 배포하여 즉시 서비스가 가능합니다.

---

## 12. AgenticREVIT - Agentic BIM Intelligence Plugin for Revit 2025

**프로젝트 이름**: Agentic BIM Intelligence Plugin for Autodesk Revit 2025

**목적 (페인포인트)**:
- Revit BIM 데이터의 그래프 구조화 어려움
- 모델 변경사항 추적 및 백업 자동화 부재
- LLM 기반 지능형 BIM 업무 자동화 필요

**성과**:
- Real-time Change Tracking (모델 변경 실시간 감지)
- Hourly Backup System (1시간 단위 자동 백업)
- Ontology Manager (BIM → GraphDB 구조화)
- Neo4j 통합

**사용 기술**: C#, .NET Framework 4.8, Autodesk Revit 2025 API, Neo4j

### 자기소개서 (600자)

Autodesk Revit 2025용 지능형 BIM 관리 플러그인의 설계 및 개발을 수행하고 있습니다.

**[페인포인트]** Revit에서 생성되는 BIM 데이터를 그래프 데이터베이스로 구조화하여 관계 기반 쿼리를 수행하기 어려웠습니다. 대규모 BIM 프로젝트에서 모델 변경사항을 추적하고 자동 백업하는 체계가 부재했으며, LLM을 활용한 지능형 BIM 업무 자동화(물량 산출, 공정 연계 등)에 대한 요구가 있었습니다.

**[솔루션]** C#과 .NET Framework 4.8 기반으로 Revit 2025 API를 활용한 플러그인을 개발하고 있습니다. Real-time Change Tracking 모듈로 모델 변경사항을 실시간 감지하고, Hourly Backup System으로 1시간 단위 자동 백업을 수행합니다. Ontology Manager를 통해 BIM 데이터를 Neo4j 그래프 데이터베이스로 구조화하여 관계 기반 쿼리가 가능하도록 설계했습니다.

**[성과]** BIM 모델의 변경 이력을 체계적으로 관리할 수 있는 추적 시스템을 구현했습니다. Neo4j 연동을 통해 "이 벽과 연결된 모든 문 찾기"와 같은 그래프 쿼리가 가능해졌습니다. 향후 CBS(Cost Breakdown Structure)/WBS(Work Breakdown Structure)/BOQ(Bill of Quantities) 관리 기능과 LangGraph 기반 LLM 에이전트 연동을 계획하고 있습니다.

---

## 13. AgenticLabeling - AI-Powered Automatic Labeling Platform

**프로젝트 이름**: AI-Powered Automatic Labeling Platform

**목적 (페인포인트)**:
- 수작업 라벨링의 높은 비용과 시간 소요
- 다양한 AI 모델 통합의 어려움
- 비디오 Re-ID 트래킹 자동화 부재

**성과**:
- 마이크로서비스 기반 자동 라벨링 파이프라인
- Florence-2 + SAM2 + DINOv2 통합
- Re-ID Tracker: 외관 기반 객체 추적
- **120개 테스트 통과**, Docker Ready

**사용 기술**: Python, FastAPI, Florence-2, SAM2, DINOv2, YOLO, SQLite, ChromaDB, MLflow, Docker

### 자기소개서 (600자)

AI 모델 학습을 위한 자동 라벨링 플랫폼의 설계 및 개발을 수행하고 있습니다.

**[페인포인트]** 컴퓨터 비전 모델 학습에 필요한 데이터 라벨링 작업은 수작업으로 진행 시 높은 비용과 시간이 소요됩니다. Detection, Segmentation, Classification 등 다양한 AI 모델을 하나의 파이프라인으로 통합하기 어려웠고, 비디오에서 동일 객체를 추적하는 Re-ID 기능의 자동화가 필요했습니다.

**[솔루션]** FastAPI 기반 11개 마이크로서비스 아키텍처로 자동 라벨링 파이프라인을 설계했습니다. Florence-2(Detection) → SAM2(Segmentation) → DINOv2(Classification)로 이어지는 멀티모달 AI 모델 체인을 구축하고, YOLO 학습 파이프라인과 MLflow 실험 추적을 연동했습니다. ChromaDB 벡터 검색과 SQLite를 결합한 Object Registry로 Re-ID 트래킹을 구현했습니다.

**[성과]** 120개 유닛/통합 테스트를 통과한 안정적인 시스템을 구축했습니다. Docker Compose로 13개 서비스를 오케스트레이션하며, NVIDIA GPU passthrough를 지원합니다. Streamlit 기반 QA 검증 UI로 라벨링 결과를 검토할 수 있으며, 외관 기반 Re-ID Tracker로 비디오에서 동일 객체를 프레임 간 추적하는 기능을 완성했습니다.

---

*Generated: 2025-02-06*
