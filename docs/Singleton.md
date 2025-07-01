# Singleton

> 싱글톤 패턴은 인스턴스가 프로그램 내에 단 하나만 생성되도록 보장되도록 하는 패턴

```typescript
class Grimpan {
  // 외부에서 접근할 수 없도록
  private static instance: Grimpan;
  // 외부에서 직접 new Grimpan() 으로 인스턴스를 생성할 수 없도록
  private constructor(canvas: HTMLElement | null) {
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("canvas 엘리먼트를 입력하세요");
    }
  }

  initialize() {}
  initializeMenu() {}

  // 최초호출시에만 생성하도록, 그 이후는 같은 인스턴스 반환
  static getInstance() {
    if (!this.instance) {
      this.instance = new Grimpan(document.querySelector("canvas"));
    }
    return this.instance;
  }
}

export default Grimpan;
```
