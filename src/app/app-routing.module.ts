import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MergeSortPageComponent} from './sorting/pages/merge-sort-page/merge-sort-page.component';
import {QuickSortPageComponent} from './sorting/pages/quick-sort-page/quick-sort-page.component';
import {BucketSortPageComponent} from './sorting/pages/bucket-sort-page/bucket-sort-page.component';
import {HeapSortPageComponent} from './sorting/pages/heap-sort-page/heap-sort-page.component';
import {CountingSortPageComponent} from './sorting/pages/counting-sort-page/counting-sort-page.component';


const routes: Routes = [
  { path: 'merge-sort', component: MergeSortPageComponent },
  { path: 'quick-sort', component: QuickSortPageComponent },
  { path: 'bucket-sort', component: BucketSortPageComponent },
  { path: 'heap-sort', component: HeapSortPageComponent },
  { path: 'counting-sort', component: CountingSortPageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
