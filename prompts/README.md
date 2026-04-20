# Homepage Generator

Claude Code CLI로 홈페이지를 자동 생성하는 에이전트 시스템.

## 구조

```
homepage-generator/
├── CLAUDE.md              ← 오케스트레이터 (자동으로 읽힘)
├── prompts/
│   ├── 1_planning.md      ← 기획 에이전트
│   ├── 2_design.md        ← 디자인 에이전트
│   ├── 3_copy.md          ← 카피 에이전트
│   ├── 4_code.md          ← 코드 에이전트
│   └── 5_review.md        ← 검수 에이전트
└── output/                ← 생성 결과물 저장 위치
    ├── 1_planning.json
    ├── 2_design.json
    ├── 3_copy.json
    ├── 4_code.json
    ├── 5_review.json
    └── homepage.html      ← 최종 결과물
```

## 실행 방법

```bash
# 1. 이 폴더로 이동
cd homepage-generator

# 2. Claude Code 실행
claude

# 3. 한 줄 입력
> [업종], [벤치마크 URL]로 홈페이지 만들어줘
```

## 예시 입력

```
> 프리랜서 웹 에이전시, hellomonday.com으로 홈페이지 만들어줘
> 한식 레스토랑, mvmt.com으로 홈페이지 만들어줘
> IT SaaS 스타트업, linear.app으로 홈페이지 만들어줘
```

## 출력

- `output/homepage.html` — 브라우저에서 바로 열 수 있는 완성 홈페이지
- `output/5_review.json` — 검수 리포트 (점수, 등급, 개선사항)
