# MZLP-SORT - LP소스 정렬 패키지

## 사용법
![선택](https://github.com/jusung21c/mzlp-sort/raw/master/images/1.png)
![우클릭](https://github.com/jusung21c/mzlp-sort/raw/master/images/2.png)

# IF 정렬!!!
* 정렬을 원하는 IF문의 시작부터 (첫줄의 ‘IF’ 앞의 탭까지 선택 해야합니다)
* IF문의 내용의 끝 (~END)까지 선택 (드래그)
* 단축키 `Ctrl + Alt + Shift + S` 실행 or `우클릭 메뉴`
* `1탭(\t)` IF  -> 시작
* `2탭(\t\t)` END  -> 끝
* 의 구조를 따라야지 인식이 됩니다.

# IF문 N.DIALOG = something 정렬
* IF 'N.DIALOG = A | N.DIALOG = B' THEN
* N.DIALOG 처음과 끝 선택
* 'ctrl + alt + shift + F' or '우클릭-정렬(|or정렬)'

* mzlp-pack의 Fold(접기기능)을 사용하면 더 편리합니다.
* `ctrl + alt + a` 전체접기
* `ctrl + alt + s` 현재 커서 스코프 접기
* `ctrl + alt + d` 현재 커서 스코프 펼치기
* `ctrl + alt + f` 전체펼치기

# N_TAG 정렬!!
* ![엔텤우클릭](https://github.com/jusung21c/mzlp-sort/raw/master/images/3.png)
* 정렬을 원하는 변수의 처음과 끝을 선택합니다
* 우클릭후 정렬 -> `@TAG 정렬` 클릭!
* 쌍따옴표 포함하면 지워져 버리니 꼭꼭 안에 내용만 선택해주세요!!
* 정렬후 보기좋게 `\n` 줄바꿈(엔터) 처리!
