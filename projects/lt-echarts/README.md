## Installation

```bash
# npm install
npm i echarts -S
npm i lt-echarts -S

# yarn install
yarn add echarts
yarn add lt-echarts
```

## Usage

1. import LtEchartsModule

```typescript
import { LtEchartsModule } from 'lt-echarts';

@NgModule({
  declarations: [...],
  imports: [LtEchartsModule,...],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

2. use lt-echarts in your component

```html
<div style="height:300px;"><lt-echarts [ltOptions]="options"></lt-echarts></div>
```

```typescript
@Component({
  ...
})
export class AppComponent {
  options = { ... };
}
```
