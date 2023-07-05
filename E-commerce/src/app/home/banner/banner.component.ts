import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  slides: string[];
  i: number;

  constructor() {
    this.i = 0;
    this.slides = [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f00679112336213.60128859ac45c.jpg',
      'https://th.bing.com/th/id/R.cd603529f91a92f4abd94799906b2835?rik=3UVShd51IDmQfw&riu=http%3a%2f%2fwww.athleticsweekly.com%2fwp-content%2fuploads%2f2017%2f04%2fRunning-shoe-buyers-guide-1250x750.jpg&ehk=bY5pqfBwIqjzEgFLUgQg5SgJxqojuskjmW9CcCl08zk%3d&risl=&pid=ImgRaw&r=0',
      'https://mir-s3-cdn-cf.behance.net/project_modules/disp/445dc642495501.57ce912b3fc5b.jpg',
      'https://th.bing.com/th/id/R.99d293800526edaad68d8bfbb6339d5b?rik=cUCaPBMzy8xP0g&riu=http%3a%2f%2fs7d9.scene7.com%2fis%2fimage%2fTheBay%2felement-voyager-782x300%3fqlt%3d100%26wid%3d782&ehk=eO6gpmn8SSZKdyoZZwngIvVxOph81Cw1csetr%2fWtCrE%3d&risl=&pid=ImgRaw&r=0',
      'https://www.athleticsweekly.com/wp-content/uploads/2017/12/AW-Nov-30-Running-shoe-buyers-guide-1250x750-1250x750.jpg'
    ];
  }
  getSlide() {
    return this.slides[this.i];
  }

  getPrev() {
    this.i == 0 ? (this.i = this.slides.length - 1) : this.i--;
  }

  getNext() {
    this.i < this.slides.length - 1 ? this.i++ : (this.i = 0);
  }
}
