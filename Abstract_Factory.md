# Abstract Factory Pattern
서로 관련있는 여러 객체를 일관된 방식으로 생성하기 위한 인터페이스를 제공하는 생성패턴
- 주로 제품군의 일관성 유지가 필요할 때
- 관련된 객체들이 함께 사용되어야 할 때
- 클래스를 분리하여 클라이언트 코드와 결합도를 낮추고 싶을 때

### 추상 제품들의 정의

```typescript
export default abstract class Grimpan {Add commentMore actions
  // 재정의 가능
  protected constructor(canvas: HTMLElement | null) {
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("canvas 엘리먼트를 입력하세요");
    }
  }

  abstract initialize(): void;
  abstract initializeMenu(): void;

  static getInstance() {}
}
```

### 구체적인 제품들 구현

```typescript
import Grimpan from "./AbstractGrimpan.js";

class ChromeGrimpan extends Grimpan {
  private static instance: ChromeGrimpan;

  override initialize() {}
  override initializeMenu() {}

  static override getInstance() {
    if (!this.instance) {
      this.instance = new ChromeGrimpan(document.querySelector("canvas"));
    }
    return this.instance;
  }
}

export default ChromeGrimpan;
```
