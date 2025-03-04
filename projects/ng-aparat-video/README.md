# NgAparatVideo

`NgAparatVideo` یک کتابخانه Angular برای نمایش ویدیوهای آپارات است. این کتابخانه به شما امکان می‌دهد بدون نیاز به قرار دادن مستقیم `iframe` در کد، ویدیوهای آپارات را در پروژه‌های Angular خود نمایش دهید.

## نصب

برای نصب این کتابخانه، دستور زیر را اجرا کنید:

```bash
npm install ng-aparat-video
```

## نحوه استفاده

پس از نصب، ماژول `NgAparatVideoModule` را در ماژول اصلی یا ماژول مربوطه در پروژه خود اضافه کنید:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgAparatVideoModule } from 'ng-aparat-video';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgAparatVideoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### استفاده در کامپوننت

پس از وارد کردن ماژول، می‌توانید کامپوننت `ng-aparat-video` را در قالب (template) خود استفاده کنید:

```html
<ng-aparat-video videoId="YOUR_VIDEO_ID"></ng-aparat-video>
```

### خصوصیات کامپوننت

| نام ویژگی | نوع داده | مقدار پیش‌فرض | توضیحات |
|-----------|----------|--------------|---------|
| `videoId` | `string` | `-` | شناسه ویدیوی آپارات که می‌خواهید نمایش دهید |
| `useScriptEmbed` | `boolean` | `true` | انتخاب روش نمایش (اسکریپت امبد یا آیفریم) |
| `autoplay` | `boolean` | `true` | پخش خودکار ویدیو |
| `muted` | `boolean` | `true` | بی‌صدا کردن ویدیو هنگام شروع |
| `titleShow` | `boolean` | `true` | نمایش عنوان ویدیو |
| `startTime` | `number` | `0` | زمان شروع ویدیو به ثانیه |
| `recom` | `string` | `self` | تنظیمات پیشنهاد ویدیو (خودکار یا پیشنهادی) |

## اجرای تست‌ها

برای اجرای تست‌های واحد از دستور زیر استفاده کنید:

```bash
ng test ng-aparat-video
```

## درباره این پروژه

این کتابخانه برای تسهیل نمایش ویدیوهای آپارات در پروژه‌های Angular توسعه یافته است. در صورتی که وب‌سایت آپارات روش نمایش ویدیوهای خود را تغییر دهد، کافی است این کتابخانه را به‌روز کنید تا نیاز به تغییر در کل پروژه نداشته باشید.

## منابع اضافی

برای اطلاعات بیشتر، می‌توانید به مستندات رسمی Angular و npm مراجعه کنید:

- [مستندات Angular](https://angular.dev/)
- [مستندات npm](https://docs.npmjs.com/)

