import { NgModule, } from '@angular/core';
import { NgAparatVideoComponent } from './ng-aparat-video.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[NgAparatVideoComponent],
  imports: [CommonModule ],
  exports: [NgAparatVideoComponent] // خروجی گرفتن برای استفاده در پروژه‌های دیگر
})
export class NgAparatVideoModule {}
