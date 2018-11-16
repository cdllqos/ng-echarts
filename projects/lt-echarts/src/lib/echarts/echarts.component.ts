import { Component, OnInit, Input, ElementRef, NgZone, HostListener, OnDestroy } from '@angular/core';
import { init } from 'echarts';
import { BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'lt-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss'],
})
export class EchartsComponent implements OnInit, OnDestroy {
  @Input()
  get ltOptions() {
    return this.innerOptions;
  }
  set ltOptions(val: any) {
    this.innerOptions = val;
    this.resize$.next(null);
  }
  @Input() ltAutoResize = true;

  private container: HTMLElement;
  private chart: any;
  private innerOptions: any;

  private resize$ = new BehaviorSubject<any>(null);
  private resizeSubscrition$: Subscription;

  constructor(private el: ElementRef, private ngZone: NgZone) {
    this.container = el.nativeElement;
  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.chart = init(this.container, null);
      this.subDraw();
    });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(e) {
    this.chart.resize();
    this.resize$.next(null);
  }

  subDraw() {
    if (!this.ltOptions) {
      console.warn(`please pass ltOptions like this:
      <lt-echarts [ltOptions]="options"></lt-echarts>
      `);
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      this.resizeSubscrition$ = this.resize$.pipe(debounceTime(100)).subscribe((_) => {
        this.chart.clear();
        this.chart.resize();
        this.chart.setOption(this.ltOptions, true);
      });
    });
  }

  ngOnDestroy() {
    this.resizeSubscrition$.unsubscribe();
  }
}
