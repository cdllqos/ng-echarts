import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsComponent } from './echarts.component';

describe('EchartsComponent', () => {
  let component: EchartsComponent;
  let fixture: ComponentFixture<EchartsComponent>;
  let echartEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EchartsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    echartEl = fixture.nativeElement;
  });

  it('should create echart component', () => {
    expect(component).toBeTruthy();
  });

  it('should init echart element instance', () => {
    const attributes = echartEl.attributes;
    expect(attributes.getNamedItem('_echarts_instance_')).not.toBeNull();
  });

  it('should had pass tOptions arg', () => {
    component.ltOptions = { msg: 'hello world' };
    fixture.detectChanges();
    expect(component.ltOptions).toEqual({ msg: 'hello world' });
  });
});
