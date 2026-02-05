# Resume용 프로젝트 정리

> Option A: 성과 수치 강조형 Collapse/Expand 형식
>
> **Summary (겉)**: 프로젝트명 + 한줄설명 + 핵심성과수치 + Tech태그
> **Details (속)**: 목적(페인포인트) + 성과 + 사용기술

---

## Main Projects

### 1. bim-ontology

**Summary (Collapsed)**
| 항목 | 내용 |
|------|------|
| 프로젝트명 | bim-ontology |
| 한줄 설명 | Semantic BIM Pipeline |
| 핵심 성과 | **14,800x+ 쿼리 속도 향상** |
| Tech 태그 | `Python` `RDF/OWL` `SPARQL` `FastAPI` |
| 상태 | In Progress |
| GitHub | [tygwan/bim-ontology](https://github.com/tygwan/bim-ontology) |

**Details (Expanded)**

**목적 (페인포인트)**:
- IFC 파일의 시맨틱 웹 기술 활용 어려움
- Navisworks 내보내기 시 타입 정보 손실
- 대용량 BIM 데이터의 효율적 쿼리/추론 필요

**성과**:
- IFC → RDF/OWL 변환 파이프라인 구축
- 29개 카테고리 자동 분류 (Name-based Classification)
- SPARQL + SHACL 검증 + OWL/RDFS 추론 통합
- LRU 캐시로 **14,800x+ 쿼리 속도 향상**
- 7탭 웹 대시보드 (Overview, Buildings, Elements, SPARQL, Properties, Ontology, Reasoning)
- Palantir Foundry 스타일 동적 스키마 편집 API

**사용 기술**: Python, ifcopenshell, rdflib, owlrl, pyshacl, FastAPI, Docker, GraphDB

---

### 2. AgenticLabeling

**Summary (Collapsed)**
| 항목 | 내용 |
|------|------|
| 프로젝트명 | AgenticLabeling |
| 한줄 설명 | AI-Powered Automatic Labeling Platform |
| 핵심 성과 | **Florence-2 + SAM2 + DINOv2 통합**, 120개 테스트 통과 |
| Tech 태그 | `Python` `FastAPI` `Florence-2` `SAM2` `Docker` |
| 상태 | In Progress |
| GitHub | [tygwan/AgenticLabeling](https://github.com/tygwan/AgenticLabeling) |

**Details (Expanded)**

**목적 (페인포인트)**:
- 수작업 라벨링의 높은 비용과 시간 소요
- 다양한 AI 모델 통합의 어려움
- 비디오 Re-ID 트래킹 자동화 부재

**성과**:
- 마이크로서비스 기반 자동 라벨링 파이프라인 (11개 서비스)
- Florence-2 (Detection) + SAM2 (Segmentation) + DINOv2 (Classification) 통합
- YOLO 학습 + MLflow 실험 추적
- Re-ID Tracker: 외관 기반 객체 추적
- Object Registry: SQLite + ChromaDB (벡터 검색)
- Streamlit 기반 QA 검증 UI
- **120개 테스트 통과**, Docker Ready

**사용 기술**: Python, FastAPI, Florence-2, SAM2, DINOv2, YOLO, SQLite, ChromaDB, MLflow, Streamlit, Docker

---

### 3. DXTnavis

**Summary (Collapsed)**
| 항목 | 내용 |
|------|------|
| 프로젝트명 | DXTnavis |
| 한줄 설명 | Navisworks BIM Property Viewer & AWP 4D Automation |
| 핵심 성과 | **445K+ BIM 객체 처리**, AWP 4D 자동화 |
| Tech 태그 | `C#` `WPF` `Navisworks API` `.NET` |
| 상태 | v0.9.0 |
| GitHub | [tygwan/DXTnavis](https://github.com/tygwan/DXTnavis) |
| Portfolio | [tygwan.github.io/DXTnavis](https://tygwan.github.io/DXTnavis/) |

**Details (Expanded)**

**목적 (페인포인트)**:
- Navisworks에서 BIM 속성 탐색의 비효율성
- 수작업 4D 시뮬레이션(TimeLiner) 설정의 번거로움
- AWP(Advanced Work Packaging) 워크플로우 자동화 필요

**성과**:
- 계층 기반 객체 탐색 및 검색 기능
- Raw + Refined CSV 듀얼 내보내기
- CSV → TimeLiner 자동 파이프라인 (AWP 4D)
- Object Grouping 뷰 (**445K+ 데이터 대응**)
- Schedule Builder: 자동 Schedule CSV 생성
- ViewPoint Snapshot 저장/복원

**사용 기술**: C#, .NET Framework 4.8, WPF (MVVM), Navisworks API 2025, PowerShell

---

### 4. physical-unity

**Summary (Collapsed)**
| 항목 | 내용 |
|------|------|
| 프로젝트명 | physical-unity |
| 한줄 설명 | Autonomous Driving ML Platform |
| 핵심 성과 | **0% 충돌률 달성** (8 NPC 환경), 254D 관측 공간 |
| Tech 태그 | `Unity` `ML-Agents` `PyTorch` `C#` |
| 상태 | Learning |
| GitHub | [tygwan/physical-unity](https://github.com/tygwan/physical-unity) |
| Portfolio | [tygwan.github.io/physical-unity](https://tygwan.github.io/physical-unity/) |

**Details (Expanded)**

**목적 (페인포인트)**:
- 자율주행 모션 플래닝 알고리즘 학습 환경 구축의 어려움
- 국제 안전 표준(ISO 21448 SOTIF, UN R171/R157)과의 정합성 검증 필요
- Trial-Error 기반 안전 정책 발견 시스템 부재

**성과**:
- Unity + ML-Agents + PyTorch 통합 플랫폼 구축
- **254D 벡터 관측 공간 설계** (Ego State, Route, NPC, Lane, Goal)
- Phase 기반 커리큘럼 학습 (Stage 0~C 완료, D 진행중)
- PPO/SAC 강화학습 알고리즘 적용
- Stage C에서 8개 동시 NPC 환경, **0% 충돌률 달성**
- SOTIF Triggering Condition 분석 통합

**사용 기술**: Unity 6, ML-Agents 4.0.1, PyTorch 2.3.1, C#, Python, RTX 4090

---

### 5. ultra-cc-init

**Summary (Collapsed)**
| 항목 | 내용 |
|------|------|
| 프로젝트명 | ultra-cc-init |
| 한줄 설명 | Token-Optimized Claude Code Framework |
| 핵심 성과 | **97% 토큰 절감** (38K → 1.1K), 5,400+ 라인 절감 |
| Tech 태그 | `Shell` `YAML` `Claude Code` |
| 상태 | v5.1.0 |
| GitHub | [tygwan/ultra-cc-init](https://github.com/tygwan/ultra-cc-init) |

**Details (Expanded)**

**왜 필요한가?**
> Claude Code MAX 플랜은 월 $100~$200의 비용이 발생합니다. 토큰 효율성이 곧 비용 효율성입니다.
> 기존 프레임워크는 세션 시작 시 38,000 토큰을 소비하여, 복잡한 작업에서 컨텍스트 제한에 빠르게 도달했습니다.
> 이 프로젝트는 **AI 개발 도구의 비용 최적화** 문제를 해결합니다.

**목적 (페인포인트)**:
- cc-initializer의 높은 토큰 소비 (세션 초기화 ~38,000 토큰)
- 매 턴마다 CLAUDE.md 로딩으로 인한 비효율
- 대규모 Agent 로딩 오버헤드

**성과**:
- **97% 토큰 절감** (38K → 1.1K 초기화)
- MANIFEST 기반 1-line Agent 라우팅
- 82% CLAUDE.md 압축 (1,700 → 300 per turn)
- 4-tier 점진적 로딩 시스템
- 2-Tier 문서 구조 (Header + Detail 분리)
- **5,400+ 라인 절감**

**사용 기술**: Shell (Bash), YAML/JSON, Markdown

---

## Sub Projects

### 6. algo-quant

**Summary (Collapsed)**
| 항목 | 내용 |
|------|------|
| 프로젝트명 | algo-quant |
| 한줄 설명 | Quant Investment Automation Agent |
| 핵심 성과 | **5개 API 통합** (FMP, KIS, 키움, Binance, Upbit) |
| Tech 태그 | `Python` `Dash` `pandas` `Binance API` |
| 상태 | In Progress |
| GitHub | [tygwan/algo-quant](https://github.com/tygwan/algo-quant) |

**Details (Expanded)**

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

**사용 기술**: Python, pandas, numpy, Dash, FMP API, FRED API, KIS API, Binance API, Upbit API

---

### 7. n8n

**Summary (Collapsed)**
| 항목 | 내용 |
|------|------|
| 프로젝트명 | n8n |
| 한줄 설명 | n8n Workflow Collection |
| 핵심 성과 | **월 $0.22** 주식 모니터링, AI 분석 자동화 |
| Tech 태그 | `n8n` `Docker` `OpenAI API` `Telegram` |
| 상태 | Production |
| GitHub | [tygwan/n8n](https://github.com/tygwan/n8n) |
| Portfolio | [tygwan.github.io/n8n](https://tygwan.github.io/n8n/) |

**Details (Expanded)**

**목적 (페인포인트)**:
- 반복적인 업무 자동화 구축의 어려움
- AI 통합 워크플로우 설계 필요
- 비용 효율적인 자동화 시스템 부재

**성과**:
- Stock Tracking System: 미국/한국 주식 + AI 분석 + Telegram 알림 (**~$0.22/월**)
- Virality TikTok: AI 기반 바이럴 마케팅 자동화 + Fraud Detection
- 기술 지표 자동 계산 (RSI, MACD, Bollinger Bands)
- GPT-4o-mini 연동 투자 인사이트

**사용 기술**: n8n, Docker, Alpha Vantage API, KIS API, OpenAI API, Telegram Bot API, Apify

---

### 8. student-manager

**Summary (Collapsed)**
| 항목 | 내용 |
|------|------|
| 프로젝트명 | student-manager |
| 한줄 설명 | 학원 수업 관리 시스템 |
| 핵심 성과 | **드래그앤드롭 시간표**, Firebase 실시간 동기화 |
| Tech 태그 | `React` `TypeScript` `Firebase` `Zustand` |
| 상태 | Active |
| GitHub | [tygwan/student-manager](https://github.com/tygwan/student-manager) |

**Details (Expanded)**

**목적 (페인포인트)**:
- 학원/과외 수업 일정 관리의 비효율성
- 그룹/개인/보충 수업 추적 어려움
- 과제 관리 및 진척도 시각화 부재

**성과**:
- 시간표 매트릭스 보드 (과목 × 시간)
- **드래그 앤 드롭** 수업 이동 (@dnd-kit)
- 실시간 상태 추적 (대기/진행중/완료)
- Firebase 실시간 데이터 동기화
- 개인/그룹 과제 관리 시스템
- 주간/월간 리포트 자동 생성

**사용 기술**: React 18, TypeScript, Vite, Zustand, TailwindCSS, @dnd-kit/core, Firebase, Vercel

---

### 9. resumely

**Summary (Collapsed)**
| 항목 | 내용 |
|------|------|
| 프로젝트명 | resumely |
| 한줄 설명 | AI 기반 이력서 생성 및 분석 도구 |
| 핵심 성과 | **SaaS 아키텍처**, 크레딧 시스템, RLS 멀티테넌트 |
| Tech 태그 | `Next.js` `TypeScript` `Supabase` `OpenAI API` |
| 상태 | Improving |
| GitHub | [tygwan/resumely](https://github.com/tygwan/resumely) |

**Details (Expanded)**

**목적 (페인포인트)**:
- 이력서 작성의 반복적인 수작업
- 직무별 맞춤형 이력서 생성의 어려움
- AI 기반 이력서 분석 서비스 부재

**성과**:
- Next.js App Router 기반 SaaS 프론트엔드
- Supabase 기반 백엔드 (RLS 멀티테넌트 격리)
- 크레딧 시스템 구현
- OpenAI API 연동 이력서 분석/생성
- shadcn/ui 컴포넌트 시스템

**사용 기술**: Next.js, TypeScript, TailwindCSS, shadcn/ui, Supabase, OpenAI API, Vercel

---

### 10. ai-master-class

**Summary (Collapsed)**
| 항목 | 내용 |
|------|------|
| 프로젝트명 | ai-master-class |
| 한줄 설명 | AI/ML 학습 및 실습 프로젝트 모음 |
| 핵심 성과 | **AI 유틸리티 컬렉션**, 교육용 실습 자료 |
| Tech 태그 | `Python` `Claude Code` `AI Util` |
| 상태 | Active |
| GitHub | [tygwan/ai-master-class](https://github.com/tygwan/ai-master-class) |
| Portfolio | [tygwan.github.io/ai-master-class](https://tygwan.github.io/ai-master-class/) |

**Details (Expanded)**

**목적 (페인포인트)**:
- AI/ML 학습 자료의 분산
- 실습 가능한 예제 코드 부재
- 학습 내용 정리 및 공유 어려움

**성과**:
- AI/ML 학습 자료 통합 정리
- 실습 가능한 예제 코드 제공
- Claude Code 활용 워크플로우 문서화

**사용 기술**: Python, Claude Code, Markdown

---

## Additional Projects (Portfolio에서 추가)

### 11. AgenticREVIT

**Summary (Collapsed)**
| 항목 | 내용 |
|------|------|
| 프로젝트명 | AgenticREVIT |
| 한줄 설명 | Agentic BIM Intelligence Plugin for Revit 2025 |
| 핵심 성과 | **Neo4j 그래프 DB 연동**, 실시간 변경 추적 |
| Tech 태그 | `C#` `Revit API` `Neo4j` `.NET` |
| 상태 | v0.1.0 |
| GitHub | [tygwan/AgenticREVIT](https://github.com/tygwan/AgenticREVIT) |

**Details (Expanded)**

**목적 (페인포인트)**:
- Revit BIM 데이터의 그래프 구조화 어려움
- 모델 변경사항 추적 및 백업 자동화 부재
- LLM 기반 지능형 BIM 업무 자동화 필요

**성과**:
- Real-time Change Tracking (모델 변경 실시간 감지)
- Hourly Backup System (1시간 단위 자동 백업)
- Ontology Manager (BIM → GraphDB 구조화)
- **Neo4j 통합**
- CBS/WBS/BOQ 관리 계획

**사용 기술**: C#, .NET Framework 4.8, Autodesk Revit 2025 API, Neo4j, LangGraph (planned)

---

### 12. cc-initializer

**Summary (Collapsed)**
| 항목 | 내용 |
|------|------|
| 프로젝트명 | cc-initializer |
| 한줄 설명 | Claude Code Configuration Framework |
| 핵심 성과 | **25 Agents + 18 Skills + 6 Commands** |
| Tech 태그 | `Shell` `YAML` `Markdown` |
| 상태 | v4.5.0 |
| GitHub | [tygwan/cc-initializer](https://github.com/tygwan/cc-initializer) |

**Details (Expanded)**

**왜 필요한가?**
> Claude Code는 강력하지만, 새 프로젝트마다 같은 설정을 반복해야 합니다.
> Agent와 Skill을 체계적으로 관리하지 않으면, 프로젝트마다 품질이 들쭉날쭉해집니다.
> 이 프로젝트는 **AI 에이전트 기반 개발의 일관성과 재현성**을 보장합니다.

**목적 (페인포인트)**:
- Claude Code 사용 시 반복적인 설정 작업
- 개발 워크플로우의 체계화 필요
- Agent/Skill 기반 자동화 환경 구축의 어려움

**성과**:
- **25 Agents + 18 Skills + 6 Commands** 통합 프레임워크
- `/init --full` 원커맨드 프로젝트 초기화
- Discovery → Planning → Development → Review → Release 워크플로우
- Phase/Sprint 기반 진행 관리
- Git 워크플로우 자동화 (Conventional Commits, PR 생성)
- 자동 문서 동기화 (CHANGELOG, README)

**사용 기술**: Shell (Bash), YAML/JSON, Markdown

---

### 13. skills

**Summary (Collapsed)**
| 항목 | 내용 |
|------|------|
| 프로젝트명 | skills |
| 한줄 설명 | Claude Code Skills Collection |
| 핵심 성과 | **45+ Skills**, 12개 카테고리 |
| Tech 태그 | `Python` `Shell` `Markdown` |
| 상태 | Active |
| GitHub | [tygwan/skills](https://github.com/tygwan/skills) |

**Details (Expanded)**

**목적 (페인포인트)**:
- Claude Code 확장 기능의 재사용성 부족
- 반복적인 워크플로우 정의 작업
- 도메인별 전문 스킬 부재

**성과**:
- **45+ Skills** 컬렉션 구축
- 카테고리: Project Init, Testing, Deploy, Docs, AI Tools, UI/UX, Expert Personas, Security, n8n Workflow, Crypto, Dev Tools, Claude Code
- TDD, Codex 연동, Landing Page Guide 등 전문 스킬
- n8n 워크플로우 7종 스킬

**사용 기술**: Python, Shell, HTML, Markdown

---

## README 품질 Top 3

| 순위 | 프로젝트 | 강점 | 추천 이유 |
|------|----------|------|----------|
| **1** | [DXTnavis](https://github.com/tygwan/DXTnavis) | 배지, 스크린샷, 한영 지원, 릴리스 히스토리 | 템플릿 기준으로 적합 |
| **2** | [AgenticLabeling](https://github.com/tygwan/AgenticLabeling) | 목차, curl/Python 예시, 문서 링크 체계 | 기술 프로젝트 모범 |
| **3** | [cc-initializer](https://github.com/tygwan/cc-initializer) | ASCII 아키텍처, 명령어 체계, 실사용 예제 | DevTool 표준 |

---

## HTML 구현 예시

```html
<!-- Projects Section with Collapse/Expand -->
<section>
    <h2>Projects<span class="period-mark">.</span></h2>

    <div class="other">
        <h3>Main Projects<span class="period-mark">.</span></h3>
    </div>

    <!-- Project Card with Details -->
    <details class="project-details">
        <summary class="project-summary">
            <div class="project-summary-content">
                <span class="project-name">bim-ontology</span>
                <span class="project-status in-progress">In Progress</span>
                <span class="project-oneliner">Semantic BIM Pipeline — <strong>14,800x+ 쿼리 속도 향상</strong></span>
                <div class="tech-stack-tags">
                    <span class="tag">Python</span>
                    <span class="tag">RDF/OWL</span>
                    <span class="tag">SPARQL</span>
                    <span class="tag">FastAPI</span>
                </div>
            </div>
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </summary>
        <div class="project-detail-content">
            <h5>목적 (페인포인트)<span class="period-mark">.</span></h5>
            <ul>
                <li>IFC 파일의 시맨틱 웹 기술 활용 어려움</li>
                <li>Navisworks 내보내기 시 타입 정보 손실</li>
                <li>대용량 BIM 데이터의 효율적 쿼리/추론 필요</li>
            </ul>

            <h5>성과<span class="period-mark">.</span></h5>
            <ul>
                <li>IFC → RDF/OWL 변환 파이프라인 구축</li>
                <li>29개 카테고리 자동 분류 (Name-based Classification)</li>
                <li>LRU 캐시로 <strong>14,800x+ 쿼리 속도 향상</strong></li>
                <li>7탭 웹 대시보드</li>
            </ul>

            <h5>Tech Stack<span class="period-mark">.</span></h5>
            <div class="tech-stack-tags">
                <span class="tag">Python</span>
                <span class="tag">ifcopenshell</span>
                <span class="tag">rdflib</span>
                <span class="tag">owlrl</span>
                <span class="tag">pyshacl</span>
                <span class="tag">FastAPI</span>
                <span class="tag">Docker</span>
            </div>

            <a href="https://github.com/tygwan/bim-ontology" target="_blank" rel="noopener" class="project-github-link">
                View on GitHub →
            </a>
        </div>
    </details>

    <!-- 다른 프로젝트들도 동일한 구조로... -->
</section>
```

---

## CSS 추가 필요 (style.css)

```css
/* Project Details (Collapse/Expand) */
.project-details {
    border: 1px solid var(--color-border);
    border-radius: 8px;
    margin-bottom: 12px;
    overflow: hidden;
}

.project-summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    cursor: pointer;
    background: var(--color-bg-secondary);
    list-style: none;
}

.project-summary::-webkit-details-marker {
    display: none;
}

.project-summary-content {
    flex: 1;
}

.project-name {
    font-weight: 700;
    font-size: 1.1rem;
    margin-right: 8px;
}

.project-oneliner {
    display: block;
    color: var(--color-text-secondary);
    font-size: 0.9rem;
    margin: 4px 0 8px;
}

.chevron {
    width: 20px;
    height: 20px;
    transition: transform 0.2s ease;
}

.project-details[open] .chevron {
    transform: rotate(180deg);
}

.project-detail-content {
    padding: 20px;
    border-top: 1px solid var(--color-border);
}

.project-detail-content h5 {
    margin-top: 16px;
    margin-bottom: 8px;
}

.project-detail-content h5:first-child {
    margin-top: 0;
}

.project-detail-content ul {
    margin: 0;
    padding-left: 20px;
}

.project-detail-content li {
    margin-bottom: 4px;
}

.project-github-link {
    display: inline-block;
    margin-top: 16px;
    color: var(--color-accent);
    text-decoration: none;
}

.project-github-link:hover {
    text-decoration: underline;
}
```

---

## Skills 정리 (프로젝트 기반 검증)

### AI & Computer Vision
| 기술 | 사용 프로젝트 |
|------|--------------|
| PyTorch | physical-unity, AgenticLabeling |
| Florence-2 | AgenticLabeling |
| SAM2 | AgenticLabeling |
| YOLO | AgenticLabeling |
| DINOv2 | AgenticLabeling |
| Transformers | AgenticLabeling |
| ML-Agents | physical-unity |
| MLflow | AgenticLabeling |
| OpenAI API | n8n, resumely |
| Autodistill | 연구 (논문) |

### Languages
| 기술 | 사용 프로젝트 |
|------|--------------|
| Python | bim-ontology, algo-quant, physical-unity, AgenticLabeling, skills |
| TypeScript | student-manager, resumely, n8n |
| C# | physical-unity, DXTnavis, AgenticREVIT |
| Rust | (학습 중) |

### Development
| 기술 | 사용 프로젝트 |
|------|--------------|
| React | student-manager |
| Next.js | resumely |
| FastAPI | bim-ontology, AgenticLabeling |
| Dash | algo-quant |
| Zustand | student-manager, resumely |
| TailwindCSS | student-manager, resumely |
| Vite | student-manager |
| Firebase | student-manager |
| PostgreSQL | resumely (Supabase) |
| Redis | (경험) |
| Docker | bim-ontology, AgenticLabeling, n8n |

### BIM & Automation
| 기술 | 사용 프로젝트 |
|------|--------------|
| Revit API | AgenticREVIT |
| Navisworks | DXTnavis |
| .NET / WPF | DXTnavis, AgenticREVIT |
| IfcOpenShell | bim-ontology |
| ifcOWL | bim-ontology |
| RDF/OWL | bim-ontology |
| Neo4j | AgenticREVIT |
| GraphDB | bim-ontology |
| ChromaDB | AgenticLabeling |

### Tools
| 기술 | 사용 프로젝트 |
|------|--------------|
| Unity | physical-unity |
| Claude Code MAX | 전체 프로젝트 |
| Codex | 전체 프로젝트 |
| GitHub Actions | CI/CD |
| n8n | n8n 워크플로우 |
| Git | 전체 프로젝트 |

---

## 자기소개서 작성 가이드

### 구조: STAR + 수치

**S**ituation (상황/페인포인트) → **T**ask (목표/과제) → **A**ction (행동/기술) → **R**esult (성과/수치)

### 프로젝트별 STAR 정리

#### 1. AgenticLabeling (CV/AutoML)

| 요소 | 내용 |
|------|------|
| **S** | 연구에서 CV 모델 학습을 위한 라벨링에 막대한 시간 소요. 수작업 라벨링의 비용과 일관성 문제. |
| **T** | 멀티모달 AI 모델을 통합한 자동 라벨링 파이프라인 구축 |
| **A** | Florence-2(Detection) + SAM2(Segmentation) + DINOv2(Classification) 통합, 11개 마이크로서비스 설계, Re-ID Tracker 구현 |
| **R** | **120개 테스트 통과**, Docker 기반 배포 준비 완료, 연구 라벨링 시간 대폭 단축 |

**600자 자기소개서 예시:**
> 건설안전 연구에서 CV 모델 학습을 위한 데이터 라벨링에 전체 연구 시간의 40% 이상이 소요되는 문제를 경험했습니다. 이를 해결하기 위해 멀티모달 AI 기반 자동 라벨링 플랫폼 AgenticLabeling을 설계했습니다. Florence-2로 객체 탐지, SAM2로 정밀 세그멘테이션, DINOv2로 특징 추출 및 분류를 수행하는 파이프라인을 구축하고, 11개의 독립 마이크로서비스로 분리하여 확장성을 확보했습니다. 비디오 데이터의 동일 객체 추적을 위해 외관 기반 Re-ID Tracker를 구현하고, ChromaDB를 활용한 벡터 검색으로 Object Registry를 구축했습니다. 120개의 단위/통합 테스트를 작성하여 코드 품질을 보장하고, Docker Compose로 13개 서비스를 오케스트레이션하는 배포 환경을 완성했습니다. 이 프로젝트를 통해 마이크로서비스 아키텍처 설계와 최신 CV 모델 통합 경험을 쌓았습니다.

---

#### 2. bim-ontology (Semantic Web)

| 요소 | 내용 |
|------|------|
| **S** | 플랜트 BIM 데이터가 IFC 파일에 갇혀 시맨틱 웹 기술로 활용 불가. 쿼리 성능 저하. |
| **T** | IFC → RDF/OWL 변환 파이프라인과 고성능 쿼리 시스템 구축 |
| **A** | ifcopenshell로 IFC 파싱, rdflib/owlrl로 온톨로지 구축, LRU 캐시 최적화, FastAPI 대시보드 구현 |
| **R** | **14,800x+ 쿼리 속도 향상**, 29개 카테고리 자동 분류, 7탭 웹 대시보드 |

**600자 자기소개서 예시:**
> 국가 R&D 과제에서 플랜트 BIM 데이터를 시맨틱 웹 기술로 활용해야 했으나, IFC 파일 형식의 한계와 쿼리 성능 문제가 있었습니다. 이를 해결하기 위해 bim-ontology 파이프라인을 개발했습니다. ifcopenshell로 IFC 파일을 파싱하고, rdflib와 owlrl을 활용해 RDF/OWL 온톨로지로 변환하는 시스템을 구축했습니다. Smart Plant 3D에서 내보낸 데이터의 명명 패턴 10개를 분석하여 29개 카테고리 자동 분류 알고리즘을 구현했습니다. SPARQL 쿼리에 LRU 캐시를 적용하여 반복 쿼리 시 14,800배 이상의 속도 향상을 달성했고, pyshacl을 통한 SHACL 검증과 OWL/RDFS 추론을 통합했습니다. FastAPI 기반 7탭 웹 대시보드(Overview, Buildings, Elements, SPARQL, Properties, Ontology, Reasoning)를 구현하여 비개발자도 데이터를 탐색할 수 있게 했습니다. 이 경험을 통해 시맨틱 웹 기술과 건설 도메인 지식을 결합하는 역량을 키웠습니다.

---

#### 3. DXTnavis (BIM Plugin)

| 요소 | 내용 |
|------|------|
| **S** | Navisworks에서 BIM 속성 탐색이 비효율적이고, 4D 시뮬레이션 설정이 수작업으로 번거로움 |
| **T** | 속성 탐색 자동화 및 AWP 4D 워크플로우 파이프라인 구축 |
| **A** | WPF MVVM 패턴으로 UI 설계, Navisworks API로 계층 탐색, CSV→TimeLiner 자동화 |
| **R** | **445K+ BIM 객체 처리**, AWP 4D 자동화로 설정 시간 대폭 단축 |

**600자 자기소개서 예시:**
> 플랜트 건설 프로젝트에서 Navisworks로 BIM 모델을 검토할 때, 45만 개 이상의 객체에서 필요한 속성을 찾는 데 많은 시간이 소요되었습니다. 또한 4D 시뮬레이션(TimeLiner) 설정을 수작업으로 진행하여 휴먼 에러가 빈번했습니다. 이를 해결하기 위해 DXTnavis 플러그인을 개발했습니다. C#과 WPF를 활용해 MVVM 패턴으로 UI를 설계하고, Navisworks API로 계층 기반 객체 탐색 및 검색 기능을 구현했습니다. Raw와 Refined 두 가지 형태의 CSV 내보내기를 지원하고, CSV에서 TimeLiner로 자동 변환하는 AWP 4D 파이프라인을 구축했습니다. Object Grouping 뷰로 445K+ 데이터를 효율적으로 관리하고, Schedule Builder로 공정 일정 CSV를 자동 생성합니다. ViewPoint Snapshot 저장/복원 기능으로 협업 효율성을 높였습니다. 이 프로젝트로 BIM 소프트웨어 커스터마이징과 건설 실무 자동화 경험을 쌓았습니다.

---

#### 4. physical-unity (ML/RL)

| 요소 | 내용 |
|------|------|
| **S** | 자율주행 모션 플래닝 알고리즘 학습을 위한 시뮬레이션 환경 부재 |
| **T** | Unity 기반 강화학습 플랫폼 구축, 안전 표준 정합성 검증 |
| **A** | ML-Agents + PyTorch 통합, 254D 관측 공간 설계, Phase 기반 커리큘럼 학습 |
| **R** | **0% 충돌률** (8 NPC 환경), SOTIF 트리거링 조건 분석 통합 |

**600자 자기소개서 예시:**
> 자율주행 안전성 연구에서 모션 플래닝 알고리즘을 학습하고 검증할 시뮬레이션 환경이 필요했습니다. 기존 시뮬레이터는 커스터마이징이 어렵고, 국제 안전 표준(ISO 21448 SOTIF)과의 연계가 부족했습니다. physical-unity 프로젝트로 Unity 6과 ML-Agents 4.0.1, PyTorch 2.3.1을 통합한 강화학습 플랫폼을 구축했습니다. 254차원 벡터 관측 공간을 설계하여 Ego 차량 상태, 경로 정보, 주변 NPC 차량, 차선 정보, 목표 지점을 모두 인코딩했습니다. Stage 0부터 C까지 Phase 기반 커리큘럼 학습을 적용하여 점진적으로 복잡한 환경에서 학습하도록 했고, PPO/SAC 강화학습 알고리즘을 실험했습니다. Stage C에서 8개 동시 NPC 환경에서 0% 충돌률을 달성했으며, SOTIF Triggering Condition 분석을 통합하여 안전 정책 발견 시스템의 기반을 마련했습니다. RTX 4090 GPU 최적화로 학습 속도를 개선했습니다.

---

#### 5. ultra-cc-init (DevTool)

| 요소 | 내용 |
|------|------|
| **S** | Claude Code 사용 시 세션마다 38,000 토큰 소비, 컨텍스트 제한 빠르게 도달 |
| **T** | 토큰 효율적인 AI 개발 프레임워크 설계 |
| **A** | MANIFEST 기반 라우팅, 4-tier 점진적 로딩, 2-Tier 문서 구조 |
| **R** | **97% 토큰 절감** (38K→1.1K), 5,400+ 라인 절감 |

**600자 자기소개서 예시:**
> Claude Code MAX 플랜으로 AI 페어 프로그래밍을 하면서, 세션 시작 시 38,000 토큰이 소비되어 복잡한 작업에서 컨텍스트 제한에 빠르게 도달하는 문제를 경험했습니다. 월 $100~$200의 구독 비용을 고려할 때 토큰 효율성이 곧 비용 효율성이었습니다. ultra-cc-init 프로젝트로 이 문제를 해결했습니다. MANIFEST 기반 1-line Agent 라우팅으로 필요한 Agent만 온디맨드 로딩하고, 4-tier 점진적 로딩 시스템으로 복잡도에 따라 컨텍스트를 단계별로 확장합니다. 2-Tier 문서 구조(Header + Detail 분리)로 CLAUDE.md를 82% 압축하여 턴당 1,700토큰에서 300토큰으로 줄였습니다. 결과적으로 세션 초기화 토큰을 97% 절감(38K→1.1K)하고, 5,400라인 이상의 코드를 제거했습니다. 이 프로젝트를 통해 AI 도구의 비용 최적화와 개발자 경험 개선에 대한 인사이트를 얻었습니다.

---

## 예상 질문 및 답변 준비

### 1. 기술 심층 질문

#### Q1. Florence-2, SAM2, DINOv2를 왜 함께 사용했나요? 각 모델의 역할은?
**A:**
- **Florence-2**: Microsoft의 VLM으로 open-vocabulary 객체 탐지. 프롬프트 기반으로 학습되지 않은 객체도 탐지 가능
- **SAM2**: Meta의 Segment Anything Model. Florence-2가 탐지한 박스를 입력받아 픽셀 수준의 정밀 세그멘테이션 수행
- **DINOv2**: Meta의 self-supervised ViT. 세그멘트된 객체의 특징 벡터 추출로 분류 및 Re-ID에 활용
- 통합 이유: 각 모델이 특화된 작업을 수행하고, 파이프라인으로 연결해 end-to-end 자동 라벨링 구현

#### Q2. 14,800x 쿼리 속도 향상은 어떻게 달성했나요?
**A:**
- **문제 원인**: SPARQL 쿼리마다 RDF 그래프 전체 탐색, 추론 재실행
- **해결 방법**: LRU(Least Recently Used) 캐시 적용
  - 동일 쿼리 결과 메모리 캐싱
  - 캐시 히트 시 그래프 탐색 스킵
  - 캐시 무효화 정책으로 데이터 일관성 유지
- **측정 방법**: 캐시 미스(Cold) vs 캐시 히트(Hot) 쿼리 시간 비교

#### Q3. 마이크로서비스 11개를 어떻게 설계했나요?
**A:**
- **원칙**: 단일 책임 원칙 + 독립 스케일링
- **서비스 분리**:
  - API Gateway (라우팅, 인증)
  - Detection Service (Florence-2)
  - Segmentation Service (SAM2)
  - Feature Service (DINOv2)
  - Tracker Service (Re-ID)
  - Registry Service (ChromaDB)
  - Training Service (YOLO/MLflow)
  - QA Service (Streamlit)
  - 등
- **통신**: REST API + 비동기 메시지 큐
- **배포**: Docker Compose, GPU/CPU 서비스 분리

#### Q4. 254D 관측 공간은 어떻게 설계했나요?
**A:**
```
Ego State (6D): position(3) + velocity(3)
Route Info (48D): waypoint positions (16 x 3)
NPC Vehicles (120D): 10 NPCs x (position(3) + velocity(3) + size(3) + heading(3))
Lane Info (64D): lane boundaries, curvature
Goal Info (16D): target position, distance, angle
```
- 정규화: 모든 값을 [-1, 1] 범위로 스케일링
- NPC 정렬: 거리 기준 가까운 순서로 정렬

---

### 2. 아키텍처/설계 질문

#### Q5. WPF에서 MVVM 패턴을 어떻게 적용했나요?
**A:**
- **Model**: Navisworks API 래퍼, BIM 객체 데이터 클래스
- **ViewModel**: INotifyPropertyChanged 구현, Command 패턴으로 UI 로직 분리
- **View**: XAML 데이터 바인딩, DataTemplate으로 동적 UI
- **이점**: 테스트 용이성, UI/로직 분리, 유지보수성 향상

#### Q6. 97% 토큰 절감의 구체적인 기법은?
**A:**
1. **MANIFEST 기반 라우팅**: 25개 Agent를 1-line 설명으로 요약, 필요시에만 전체 로딩
2. **4-tier 점진적 로딩**:
   - Tier 0: 기본 컨텍스트 (~300 토큰)
   - Tier 1: Agent manifest (~500 토큰)
   - Tier 2: 선택된 Agent 상세 (~2K 토큰)
   - Tier 3: 관련 문서 (~5K 토큰)
3. **2-Tier 문서 구조**: Header(항상 로딩) + Detail(온디맨드)
4. **토큰 예산 관리**: 작업 복잡도에 따른 동적 컨텍스트 조절

---

### 3. 문제 해결 질문

#### Q7. BIM 데이터 445K 객체 처리 시 성능 문제는 어떻게 해결했나요?
**A:**
- **가상화(Virtualization)**: WPF VirtualizingStackPanel로 보이는 항목만 렌더링
- **지연 로딩(Lazy Loading)**: 트리 노드 확장 시에만 자식 로딩
- **인덱싱**: 객체 ID, 이름, 타입별 해시맵 구축
- **비동기 처리**: BackgroundWorker로 UI 블로킹 방지
- **페이징**: 그룹핑 뷰에서 페이지 단위 로딩

#### Q8. 멀티 API 통합 시 어려웠던 점은?
**A:** (algo-quant 프로젝트)
- **인증 방식 차이**: OAuth, API Key, HMAC 서명 등
- **데이터 형식 차이**: 각 API마다 다른 필드명, 타임스탬프 형식
- **Rate Limit**: API별 요청 제한 관리
- **해결**: Adapter 패턴으로 공통 인터페이스 구현, 요청 큐로 rate limit 관리

---

### 4. 프로젝트 경험 질문

#### Q9. AI-Native 개발이란 무엇인가요?
**A:**
- AI를 보조 도구가 아닌 **핵심 개발 파트너**로 활용하는 방식
- Claude Code MAX로 아키텍처 설계, 구현, 리팩토링, 코드 리뷰 수행
- Codex로 독립 검증 및 듀얼 AI 개발 루프 운영
- **실측**: 최근 5주간 1.1B+ 토큰, 31K+ 메시지, 5.9K+ tool calls
- **결과**: 19개 프로젝트 동시 운영, 개발 속도와 품질 향상

#### Q10. 왜 BIM과 AI를 결합하려고 하나요?
**A:**
- **건설산업 특성**: 데이터는 많지만 활용도가 낮음
- **BIM의 한계**: 3D 모델 + 속성 데이터지만, 시맨틱 분석 어려움
- **AI의 가능성**: CV로 현장 안전 모니터링, NLP로 문서 분석, Knowledge Graph로 데이터 연결
- **나의 강점**: 건축공학 도메인 지식 + AI/개발 역량의 결합

---

### 5. 행동/상황 질문

#### Q11. 가장 어려웠던 기술적 도전은?
**A:** AgenticLabeling의 Re-ID Tracker 구현
- **도전**: 비디오에서 동일 객체를 프레임 간 추적해야 함
- **문제**: 객체 외관 변화, 가림, 재등장 시 ID 유지
- **해결**: DINOv2 특징 벡터 + 코사인 유사도 매칭 + 칼만 필터 예측
- **배운 점**: 단순 IoU 매칭의 한계, 딥러닝 특징의 강점

#### Q12. 팀 프로젝트 경험은?
**A:**
- 국가 R&D 과제에서 BIM 파이프라인 담당
- rhytheme, kids-on-boats-io에서 프론트-백 분리 아키텍처 설계, 협업 구조 수립
- **역할**: 아키텍처 설계, API 인터페이스 정의, 기술 문서 작성
- **협업 방식**: GitHub Flow, PR 리뷰, Notion 문서화

---

## 프로젝트 스크린샷 가이드

### 권장 스크린샷 목록

| 프로젝트 | 필수 스크린샷 | 설명 |
|---------|-------------|------|
| **bim-ontology** | 7탭 대시보드, SPARQL 쿼리 결과, 온톨로지 시각화 | 웹 UI + 데이터 시각화 |
| **AgenticLabeling** | 라벨링 결과 이미지, 서비스 아키텍처 다이어그램, QA UI | CV 결과 + 시스템 구조 |
| **DXTnavis** | 플러그인 UI, 445K 객체 뷰, TimeLiner 연동 | BIM 소프트웨어 내 작동 |
| **physical-unity** | 시뮬레이션 장면, 학습 그래프, 0% 충돌 시나리오 | 3D 환경 + 학습 결과 |
| **ultra-cc-init** | 토큰 비교 차트, 아키텍처 다이어그램 | 수치 시각화 |
| **algo-quant** | Dash 대시보드, 차트, 포트폴리오 뷰 | 금융 데이터 시각화 |
| **n8n** | 워크플로우 캔버스, Telegram 알림 | 자동화 플로우 |
| **student-manager** | 시간표 보드, 드래그앤드롭 | 반응형 UI |
| **resumely** | 메인 UI, 이력서 생성 결과 | SaaS 화면 |

### 스크린샷 촬영 팁

1. **해상도**: 최소 1920x1080, Retina 권장
2. **다크모드**: 프로젝트에 다크모드 있으면 둘 다 촬영
3. **실제 데이터**: 목업 대신 실제 작동 데이터 사용
4. **하이라이트**: 핵심 기능에 박스/화살표 표시 (선택)
5. **GIF**: 드래그앤드롭, 애니메이션은 GIF로 촬영
6. **파일명 규칙**: `{project}-{feature}-{version}.png`

### 저장 위치
```
/home/coffin/dev/portfolio/assets/screenshots/
├── bim-ontology/
├── AgenticLabeling/
├── DXTnavis/
├── physical-unity/
├── ultra-cc-init/
├── algo-quant/
├── n8n/
├── student-manager/
└── resumely/
```

---

*Generated: 2025-02-06*
*Updated: Skills 프로젝트 매핑, 자기소개서 STAR 가이드, 예상 질문 15개, 스크린샷 가이드 추가*
