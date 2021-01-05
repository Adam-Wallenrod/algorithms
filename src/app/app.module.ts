import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MergeSortPageComponent } from './sorting/pages/merge-sort-page/merge-sort-page.component';
import { QuickSortPageComponent } from './sorting/pages/quick-sort-page/quick-sort-page.component';
import { BucketSortPageComponent } from './sorting/pages/bucket-sort-page/bucket-sort-page.component';
import { HeapSortPageComponent } from './sorting/pages/heap-sort-page/heap-sort-page.component';
import { CountingSortPageComponent } from './sorting/pages/counting-sort-page/counting-sort-page.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MergeSortPageComponent,
    QuickSortPageComponent,
    BucketSortPageComponent,
    HeapSortPageComponent,
    CountingSortPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
