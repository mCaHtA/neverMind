자주 발생하는 에러와 해결방법

- cannot find symbol 또는 cannot resolve symbol
    - 지정된 변수나 메서드를 찾을 수 없다
    - 해결 방법
        - 선언되지 않은 변수나 메서드를 사용하거나 변수 또는 메서드의 이름을 잘못 사용
        - 대소문자 일치 여부와 철자 확인

- ';' expected
    - 세미콜론이 필요한 곳에 없다
    - ☀️해결방법
        - 문장의 끝에 세미콜론 확인

- Exception in thread "main" java.lang.NoSuchMethodError: main
    - main메서드를 찾을 수 없다
    - 실제로 main메서드가 존재하지 않거나 메서드의 선언부 public static void main(String[] args)에 오타 발생
    - ☀️해결방법
        - main메서드가 클래스에 정의되어 있는지 확인
        - main메서드의 선언부에 오타 확인
        - 대소문자의 일치 여부 확인

- Exception in thread "main" java.lang.NoClassDefFoundError: Hello
    - Hello라는 클래스를 찾을 수 없다
    - ☀️해결방법
        - 클래스 이름의 철자, 대소문자 확인
        - 클래스파일이 생성 되었는지 확인
        - 클래스패스(classpath)의 설정 확인

- illegal start of expression
    - 문장(또는 수식, expression)의 앞부분이 문법에 맞지 않다
    - 문장에 문법적 오류가 있다
    - ☀️해결방법
        - 괄호를 열고서 닫았는지 확인
        - if문, for문 문법적 오류 확인
        - public이나 static과 같은 키워드 확인

- class, interface, or enum expected
    - 키워드 class나 interface 또는 enum이 없다
    - 괄호의 개수가 일치하지 않는 경우에 발생


에러 메시지를 잘 읽고 해당 부분의 코드를 살펴본다.
이상이 없으면 해당 코드의 주위(윗줄과 아래 줄)도 함께 살펴본다

그래도 이상이 없으면 에러 메시지는 잊어버리고 기본적인 부분을 재확인한다.
대부분의 에러는 사소한 것인 경우가 많다

의심이 가는 부분을 주석처리하거나 따로 떼어내서 테스트 한다.
