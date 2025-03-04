import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-aparat-video',
  templateUrl: './ng-aparat-video.component.html',
  styleUrls: ['./ng-aparat-video.component.css'],
  standalone:false
})
export class NgAparatVideoComponent {
  @Input() videoId!: string; // شناسه ویدیو
  @Input() useScriptEmbed: boolean = true; // انتخاب روش نمایش
  @Input() autoplay: boolean = true;
  @Input() muted: boolean = true;
  @Input() titleShow: boolean = true;
  @Input() startTime: number = 0;
  @Input() recom: string = "self"; // تنظیمات پیشنهاد ویدیو

  get scriptEmbedUrl(): string {
    return `https://www.aparat.com/embed/${this.videoId}?data[rnddiv]=${Date.now()}&data[responsive]=yes&muted=${this.muted}&titleShow=${this.titleShow}&startTime=${this.startTime}&autoplay=${this.autoplay}&recom=${this.recom}`;
  }

  get iframeEmbedUrl(): string {
    return `https://www.aparat.com/video/video/embed/videohash/${this.videoId}/vt/frame?titleShow=${this.titleShow}&startTime=${this.startTime}&muted=${this.muted}&autoplay=${this.autoplay}&recom=${this.recom}`;
  }
}
