import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap1Component } from './baitap1.component';
import { Baitap1HeaderComponent } from './baitap1-header/baitap1-header.component';
import { Baitap1CarouselComponent } from './baitap1-carousel/baitap1-carousel.component';
import { Baitap1BestmobileComponent } from './baitap1-bestmobile/baitap1-bestmobile.component';
import { Baitap1BestlaptopComponent } from './baitap1-bestlaptop/baitap1-bestlaptop.component';
import { Baitap1PromotionComponent } from './baitap1-promotion/baitap1-promotion.component';
import { Baitap1ItemComponent } from './baitap1-item/baitap1-item.component';

@NgModule({
  declarations: [Baitap1Component, Baitap1HeaderComponent, Baitap1CarouselComponent, Baitap1BestmobileComponent, Baitap1BestlaptopComponent, Baitap1PromotionComponent, Baitap1ItemComponent],
  exports: [Baitap1Component],
  imports: [
    CommonModule
  ]
})
export class Baitap1Module { }
