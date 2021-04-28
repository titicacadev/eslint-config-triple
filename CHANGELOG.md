# CHANGELOG

## v2.4.0

### New Features

* [#94](https://github.com/titicacadev/eslint-config-triple/pull/94): react/self-closing-comp 규칙 추가
* [#101](https://github.com/titicacadev/eslint-config-triple/pull/101): import/newline-after-import 규칙을 추가합니다.

### Other Changes

* [#89](https://github.com/titicacadev/eslint-config-triple/pull/89): ⬆️ Bump ini from 1.3.5 to 1.3.8
* [#91](https://github.com/titicacadev/eslint-config-triple/pull/91): Rule discussion template에서 assignee 업데이트
* [#95](https://github.com/titicacadev/eslint-config-triple/pull/95): 👥 스티브의 새로운 깃헙 계정으로 변경
* [#96](https://github.com/titicacadev/eslint-config-triple/pull/96): 슬랙 알림 채널 변경
* [#97](https://github.com/titicacadev/eslint-config-triple/pull/97): ⬆️ Bump y18n from 4.0.0 to 4.0.1
* [#99](https://github.com/titicacadev/eslint-config-triple/pull/99): ESLint 최종 설정을 스냅샷으로 저장합니다.
* [#100](https://github.com/titicacadev/eslint-config-triple/pull/100): Prettier 설정을 추가합니다.
* [#102](https://github.com/titicacadev/eslint-config-triple/pull/102): 🔧 npm 패키지에 들어가는 파일 목록 명시

## v2.3.0

### New Features

- [#86](https://github.com/titicacadev/eslint-config-triple/pull/86): object shorthand 규칙을 추가합니다.

### Other Changes

- [#84](https://github.com/titicacadev/eslint-config-triple/pull/84): CODEOWNERS를 A서클로 변경합니다.
- [#87](https://github.com/titicacadev/eslint-config-triple/pull/87): npm token 참조 변경

## v2.2.1

- [#80](https://github.com/titicacadev/eslint-config-triple/pull/80): feat(canary): pr 서브 커맨드 fetch-github-pr 로 변경
- [#82](https://github.com/titicacadev/eslint-config-triple/pull/82): [#81] typescript peerDependency 제거 및 typescript 4 사용

## v2.2.0

### New Features

- import/order 설정 추가 ([#78](https://github.com/titicacadev/eslint-config-triple/pull/78))

## v2.0.0

- eslint@7, prettier@2 및 typescript@3.9 지원
- typescript-eslint@3 지원
  - v3 에서 제거된고 통합된 rule 관련 설정
  - [naming-convention](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md) 관련 rule 및 커스터마이징 도구 추가

## v1.1.0

- no-unused-vars 룰을 조정합니다. (#55)
- ignoreRestSiblings: true 로 설정하여, 파라미터 destructuring 시 omit 할 멤버에 대한 lint 를 무시합니다. (#58)

```js
{
  'no-unused-vars': ['error', { ignoreRestSiblings: true }],
  '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
}
```

## v1.0.1

- [env] GitHub Actions 를 사용한 CI / CD 를 구축합니다. (#53)
- stylelint 관련 패키지 최신화 (#52)

## [v1.0.0](https://github.com/titicacadev/eslint-config-triple/milestone/4?closed=1)

- typescript@3.7.x 를 지원합니다. (#40)
  - prettier 와 eslint 를 모두 typescript 3.7 이상을 지원하는 버전으로 업데이트합니다.
- Stylelint 와 룰셋을 지원합니다. (#49)

## [v0.4.0](https://github.com/titicacadev/eslint-config-triple/issues?q=is%3Aissue+is%3Aclosed+milestone%3Av0.4.0)

- @typescript-eslint/no-empty-function 룰을 off 합니다. (#45)
- eslint-plugin-import 를 활성화하여 import/order 룰을 추가합니다. (#43)
- 한 줄짜리 if 문등에서도 중괄호를 사용하도록 curly 룰을 수정합니다. (#42)
- es6(js)와 typescript 의 camelcase 룰을 일치시킵니다. (#37)

## v0.3.1

prettier 와 충돌이 발생하는 comma-dangle 과 space-before-function-paren 룰 off
import('some-long-named-package') 와 같은 lazy import 시 comma-dangle rule 오류 발생
prettier 가 모두 handle 하도록합니다.

thanks @appear

## [v0.3.0](https://github.com/titicacadev/eslint-config-triple/milestone/2?closed=1)

- eslint-plugin-react-hooks 및 룰 추가 (#32)
- react/prop-types 룰 off (#28)
- 패키지 dependency 미세 조정 및 README.md 미세조정 (#30)

## v0.2.0

- babel-eslint 파서 기본 적용 (#24)
- prettier:recommends 설정 추가 (indent 룰 관련 prettier 와 충돌 케이스 관련) (#26)

## v0.1.0

- prettierrc 룰 셋 추가 (#18)

## v0.0.5

- `typescript`의 버전을 `peerDependencies`로 제한 (`>=3.2.1 <3.7.0`)

## v0.0.4

- no-use-before-define rule 재정의 (#11)
  - { functions: false, classes: true, variables: true } 로 정의
- indent rule 재정의 (#12)
  - ignoredNodes: ['ConditionalExpression > *'] 추가
  - 3항 연산자 하위의 indent 를 무시함 (prettier 를 존중)
- 참고용이던 recommends/airbnb 제거
- workspace 내 prettier 적용
