# Factory Method Pattern

객체 생성을 위한 인터페이스를 정의하지만, 인스턴스 생성은 서브클래스가 담당하는 패턴
부모 클래스에 객체의 생성 인터페이스를 제공하고, 자식 클래스에서 실제 생성될 객체의 타입을 결정한다.

### 추상 메서드 정의

```typescript
abstract class AbstractGrimpanFactory {
  static createGrimpan() {
    throw new Error("하위 클래스에서 구현하셔야 합니다.");
  }
}

export default AbstractGrimpanFactory;
```

### 하위 클래스
> 구체적인 생성 책임을 하위 클래스에 위임

```typescript

class ChromeGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan() {
    return ChromeGrimpan.getInstance();
  }
}

class IEGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan() {
    return IEGrimpan.getInstance();
  }
}

function main() {
  const grimpan = ChromeGrimpanFactory.createGrimpan();
  grimpan.initialize();
  grimpan.initializeMenu();
}

```
