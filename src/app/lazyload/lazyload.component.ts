import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lazyload',
  templateUrl: './lazyload.component.html',
  styleUrls: ['./lazyload.component.css']
})
export class LazyloadComponent implements OnInit {
  @ViewChild('loadingRef') loadingRef: ElementRef;

  startIndex = 0;

  endIndex = 0;

  eachTimeCount = 10;

  rawData = [
    {
      fileName: '公司報告.ppt',
      creator: '王大明',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
    {
      fileName: '公司報告.ppt',
      creator: '黃小花',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
    {
      fileName: '公司報告.ppt',
      creator: '王大明',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
    {
      fileName: '公司報告.ppt',
      creator: '王大明',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
    {
      fileName: '公司報告.ppt',
      creator: '王大明',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
    {
      fileName: '公司報告.ppt',
      creator: '王大明',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
    {
      fileName: '公司報告.ppt',
      creator: '王大明',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
    {
      fileName: '公司報告.ppt',
      creator: '王大明',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
    {
      fileName: '公司報告.ppt',
      creator: '王大明',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
    {
      fileName: '公司報告.ppt',
      creator: '王大明',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
    {
      fileName: '公司報告.ppt',
      creator: '王大明',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
    {
      fileName: '公司報告.ppt',
      creator: '王大明',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
    {
      fileName: '公司報告.ppt',
      creator: '王大明',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
    {
      fileName: '公司報告.ppt',
      creator: '王大明',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
    {
      fileName: '公司報告.ppt',
      creator: '王大明',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
    {
      fileName: '公司報告.ppt',
      creator: '王大明',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
    {
      fileName: '公司報告.ppt',
      creator: '王大明',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
    {
      fileName: '公司報告.ppt',
      creator: '王大明',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
    {
      fileName: '公司報告.ppt',
      creator: '王大明',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
    {
      fileName: '公司報告.ppt',
      creator: '王大明',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
    {
      fileName: '公司報告.ppt',
      creator: '王大明',
      updateTime: '2022-01-20',
      publishDiv: '審計部'
    },
  ]

  displayArray = [];

  constructor() { }

  ngOnInit(): void {
    this.appendData();
  }

  processData(): void {

  }

  appendData(): void {
    if(this.displayArray.length >= this.rawData.length) return;
    const originalStartIndex = this.startIndex;
    this.endIndex = this.eachTimeCount + this.startIndex;
    const slicedData = this.rawData.slice(this.startIndex, this.endIndex);
    this.displayArray = this.displayArray.concat(slicedData);
    this.startIndex = this.endIndex;
  }

  onScroll():void {
    if(!this.loadingRef) return;
    if(this.loadingRef.nativeElement.getBoundingClientRect().top < 461) {
      this.appendData();
    }
  }

}
