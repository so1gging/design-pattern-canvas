# Simple Factory Pattern

팩토리 패턴에는 다음과 같이 두 가지 패턴이 있다.
- 팩토리 메소드 패턴 Factory method Pattern
- 추상 팩토리 패턴 Abstract Factory Pattern
 
> 두 패턴의 베이스인 'Simple Factory'에 대해 공부해보자.

`Simple factory`는 팩토리 메소드 패턴과 추상 팩토리 패턴의 베이스가 된다.
참고로, simple factory는 디자인 '패턴'이라고 할 수는 없고, oop에서 자주 쓰이는 관용구라고 보면 된다.
이걸 이해해야 다른 factory pattern들의 이해도 쉬워진다.
 
### Simple Factory 란?
- 객체를 생성해내는 공장을 따로 두는 것이다.
- 즉, 객체 생성 부분을 전담하는 클래스가 따로 있는 것이다. 
- 객체 생성을 "캡슐화" 한다고 보면 된다.


```typescript

// 객체 생성을 담당
function grimpanFactory(type) {
    if (type === "ie") {
        return IEGrimpan.getInstance().initialize();
    }
    else if (type === "chorme") {
        return ChromeGrimpan.getInstance().initialize();
    }
    else if (type === "chorme") {
        return SatariGrimpan.getInstance().initialize();
    }
    else {
        throw new Error("일치하는 type이 없습니다.");
    }
}
```
### 장점
- 객체 생성을 한 곳에 공유하여 코드 중복을 방지할 수 있음.
- 클라이언트 코드는 구체적인 클래스를 알 필요 없이 type만 넘겨 원하는 객체를 넘겨받아 사용이 가능
- 새로운 타입 추가가 용이

### 단점
- 생성 로직이 복잡해질수록 if-else 구문이 복잡해짐
- 대규모 애플리케이션에서는 규모가 커질 수 있음.

이러한 한계점 때문에 팩토리 메소드 패턴과 추상 팩토리 패턴을 활용한다.
