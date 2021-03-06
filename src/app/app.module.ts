import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MergeSortPageComponent } from './sorting/pages/merge-sort-page/merge-sort-page.component';
import { QuickSortPageComponent } from './sorting/pages/quick-sort-page/quick-sort-page.component';
import { BucketSortPageComponent } from './sorting/pages/bucket-sort-page/bucket-sort-page.component';
import { HeapSortPageComponent } from './sorting/pages/heap-sort-page/heap-sort-page.component';
import { CountingSortPageComponent } from './sorting/pages/counting-sort-page/counting-sort-page.component';
import {AppRoutingModule} from './app-routing.module';
import { InsertSortPageComponent } from './sorting/pages/insert-sort/insert-sort-page.component';
import {FormsModule} from '@angular/forms';
import { BubbleSortPageComponent } from './sorting/pages/bubble-sort-page/bubble-sort-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MergeSortPageComponent,
    QuickSortPageComponent,
    BucketSortPageComponent,
    HeapSortPageComponent,
    CountingSortPageComponent,
    InsertSortPageComponent,
    BubbleSortPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
