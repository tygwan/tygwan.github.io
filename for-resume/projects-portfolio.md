# GitHub Public Projects Portfolio

> 이력서 연계용 프로젝트 정리 (2025-02-05 기준)

---

## 1. bim-ontology

**프로젝트 이름**: BIM Ontology - Semantic BIM Pipeline

**목적 (페인포인트)**:
- IFC(Industry Foundation Classes) 파일의 데이터를 시맨틱 웹 기술로 활용하기 어려움
- Navisworks 내보내기 시 타입 정보 손실 문제
- 대용량 BIM 데이터의 효율적 쿼리 및 추론 필요성

**성과**:
- IFC → RDF/OWL 변환 파이프라인 구축
- 29개 카테고리 자동 분류 (Name-based Classification)
- SPARQL 쿼리 + SHACL 검증 + OWL/RDFS 추론 통합
- LRU 캐시로 14,800x+ 쿼리 속도 향상
- Smart Plant 3D 10개 패턴 지원
- 7탭 웹 대시보드 (Overview, Buildings, Elements, SPARQL, Properties, Ontology, Reasoning)
- Palantir Foundry 스타일 동적 스키마 편집 API

**사용 기술**: Python, ifcopenshell, rdflib, owlrl, pyshacl, FastAPI (uvicorn), Docker, GraphDB, Astro (Docs), JavaScript, HTML, Shell

---

## 2. algo-quant

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
- Binance Paper Trading 실거래 연동
- Dash 기반 반응형 다크 테마 웹 대시보드

**사용 기술**: Python 3.11+, pandas, numpy, Dash, FMP API, FRED API, KIS API, 키움 API, Binance API, Upbit API, YAML

---

## 3. physical-unity

**프로젝트 이름**: Autonomous Driving ML Platform

**목적 (페인포인트)**:
- 자율주행 모션 플래닝 알고리즘 학습 환경 구축의 어려움
- 국제 안전 표준(ISO 21448 SOTIF, UN R171/R157)과의 정합성 검증 필요
- Trial-Error 기반 안전 정책 발견 시스템 부재

**성과**:
- Unity + ML-Agents + PyTorch 통합 플랫폼 구축
- 254D 벡터 관측 공간 설계 (Ego State, Route, NPC, Lane, Goal)
- Phase 기반 커리큘럼 학습 (Stage 0~C 완료, D 진행중)
- PPO/SAC 강화학습 알고리즘 적용
- Stage C에서 8개 동시 NPC 환경, 0% 충돌률 달성
- SOTIF Triggering Condition 분석 통합

**사용 기술**: Unity 6, ML-Agents 4.0.1, PyTorch 2.3.1, C#, Python, RTX 4090 최적화, Astro (Docs), TypeScript

---

## 4. DXTnavis

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
- Schedule Builder: 자동 Schedule CSV 생성
- ViewPoint Snapshot 저장/복원

**사용 기술**: C# (.NET Framework 4.8), WPF (MVVM), Navisworks API 2025, PowerShell, Astro (Docs)

---

## 5. cc-initializer

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
- Git 워크플로우 자동화 (Conventional Commits, PR 생성)
- 자동 문서 동기화 (CHANGELOG, README)

**사용 기술**: Shell (Bash), YAML/JSON 설정, Markdown

---

## 6. ultra-cc-init

**프로젝트 이름**: Ultra CC-Init (Token-Optimized Claude Code Framework)

**목적 (페인포인트)**:
- cc-initializer의 높은 토큰 소비 (세션 초기화 ~38,000 토큰)
- 매 턴마다 CLAUDE.md 로딩으로 인한 비효율
- 대규모 Agent 로딩 오버헤드

**성과**:
- 97% 토큰 절감 (38K → 1.1K 초기화)
- MANIFEST 기반 1-line Agent 라우팅
- 82% CLAUDE.md 압축 (1,700 → 300 per turn)
- 4-tier 점진적 로딩 시스템
- 2-Tier 문서 구조 (Header + Detail 분리)
- 5,400+ 라인 절감

**사용 기술**: Shell (Bash), YAML/JSON, Markdown

---

## 7. cc-initializer-windows

**프로젝트 이름**: Claude Code Framework - Windows Native Edition

**목적 (페인포인트)**:
- Windows 환경에서 Bash 스크립트 실행 불가
- CRLF 줄바꿈으로 인한 Hook 실행 실패
- WSL/Git Bash 의존성 문제

**성과**:
- 네이티브 PowerShell Hooks 5종 구현
- CRLF 줄바꿈 이슈 완전 해결
- cc-initializer v4.5 기반 완전 호환
- chmod 불필요 (Windows 자동 실행)
- 위험 명령 차단, 사용량 추적, 진행률 자동화

**사용 기술**: PowerShell, Shell, JSON/YAML

---

## 8. cc-initializer-obsidian

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
- 28 Agents + 19 Skills 확장
- 5개 Obsidian 템플릿

**사용 기술**: Shell (Bash), Obsidian, Markdown, JSON/YAML

---

## 9. skills

**프로젝트 이름**: Claude Code Skills Collection

**목적 (페인포인트)**:
- Claude Code 확장 기능의 재사용성 부족
- 반복적인 워크플로우 정의 작업
- 도메인별 전문 스킬 부재

**성과**:
- 45+ Skills 컬렉션 구축
- 카테고리: Project Init, Testing, Deploy, Docs, AI Tools, UI/UX, Expert Personas, Security, n8n Workflow, Crypto, Dev Tools, Claude Code
- TDD, Codex 연동, Landing Page Guide 등 전문 스킬
- n8n 워크플로우 7종 스킬

**사용 기술**: Python, Shell, HTML, Markdown

---

## 10. n8n

**프로젝트 이름**: n8n Workflow Collection

**목적 (페인포인트)**:
- 반복적인 업무 자동화 구축의 어려움
- AI 통합 워크플로우 설계 필요
- 비용 효율적인 자동화 시스템 부재

**성과**:
- Stock Tracking System: 미국/한국 주식 + AI 분석 + Telegram 알림 (~$0.22/월)
- Virality TikTok: AI 기반 바이럴 마케팅 자동화 + Fraud Detection
- 기술 지표 자동 계산 (RSI, MACD, Bollinger Bands)
- GPT-4o-mini 연동 투자 인사이트

**사용 기술**: n8n, Docker, Alpha Vantage API, KIS API, OpenAI API (GPT-4o-mini), Telegram Bot API, Slack, Apify, Python, TypeScript, Astro

---

## 11. student-manager

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
- 개인/그룹 과제 관리 시스템
- 주간/월간 리포트 자동 생성

**사용 기술**: React 18, TypeScript, Vite, Zustand, TailwindCSS, @dnd-kit/core, Firebase Realtime Database, date-fns, Vercel

---

## 12. AgenticREVIT

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
- CBS/WBS/BOQ 관리 계획

**사용 기술**: C# (.NET Framework 4.8), Autodesk Revit 2025 API, Neo4j, LangGraph (planned)

---

## 13. AgenticLabeling

**프로젝트 이름**: AI-Powered Automatic Labeling Platform

**목적 (페인포인트)**:
- 수작업 라벨링의 높은 비용과 시간 소요
- 다양한 AI 모델 통합의 어려움
- 비디오 Re-ID 트래킹 자동화 부재

**성과**:
- 마이크로서비스 기반 자동 라벨링 파이프라인
- Florence-2 (Detection) + SAM2 (Segmentation) + DINOv2 (Classification) 통합
- YOLO 학습 + MLflow 실험 추적
- Re-ID Tracker: 외관 기반 객체 추적
- Object Registry: SQLite + ChromaDB (벡터 검색)
- Streamlit 기반 QA 검증 UI
- 120개 테스트 통과, Docker Ready

**사용 기술**: Python 3.10+, FastAPI, Florence-2, SAM2, DINOv2, YOLO, SQLite, ChromaDB, MLflow, Streamlit, Docker

---

## 요약 테이블

| # | 프로젝트 | 도메인 | 핵심 기술 | 상태 |
|---|----------|--------|----------|------|
| 1 | bim-ontology | BIM/Semantic Web | Python, RDF, SPARQL, OWL | Active |
| 2 | algo-quant | FinTech/Quant | Python, Dash, Multi-API | Active |
| 3 | physical-unity | Autonomous Driving/ML | Unity, PyTorch, ML-Agents | Active |
| 4 | DXTnavis | BIM/Plugin | C#, WPF, Navisworks API | v0.9.0 |
| 5 | cc-initializer | DevTool/Framework | Shell, YAML | v4.5.0 |
| 6 | ultra-cc-init | DevTool/Optimization | Shell, YAML | v5.1.0 |
| 7 | cc-initializer-windows | DevTool/Windows | PowerShell | v5.0.0 |
| 8 | cc-initializer-obsidian | DevTool/Knowledge | Shell, Obsidian | v6.0.0 |
| 9 | skills | DevTool/Skills | Python, Shell | 45+ skills |
| 10 | n8n | Automation/Workflow | n8n, TypeScript | Production |
| 11 | student-manager | EdTech/Management | React, TypeScript, Firebase | Active |
| 12 | AgenticREVIT | BIM/Plugin | C#, Neo4j, Revit API | v0.1.0 |
| 13 | AgenticLabeling | CV/AutoML | Python, Florence-2, SAM2 | Active |

---

## 기술 스택 분류

### Languages
- **Python**: bim-ontology, algo-quant, physical-unity, skills, n8n, AgenticLabeling
- **C#**: physical-unity, DXTnavis, AgenticREVIT
- **TypeScript/JavaScript**: bim-ontology, physical-unity, DXTnavis, n8n, student-manager
- **Shell/PowerShell**: cc-initializer, ultra-cc-init, cc-initializer-windows, cc-initializer-obsidian

### Frameworks & Libraries
- **AI/ML**: PyTorch, ML-Agents, Florence-2, SAM2, DINOv2, YOLO
- **Web**: FastAPI, Dash, React, Vite, Astro
- **Data**: rdflib, pandas, numpy, ChromaDB, SQLite

### Platforms
- **BIM**: Autodesk Revit 2025, Navisworks 2025, ifcopenshell
- **Cloud/DevOps**: Docker, Firebase, Vercel, Neo4j, GraphDB
- **Automation**: n8n, GitHub Actions, Claude Code

---

*Generated: 2025-02-05*
*Repository: https://github.com/tygwan*
