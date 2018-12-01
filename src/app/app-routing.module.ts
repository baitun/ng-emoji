import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableEmojiComponent } from './table-emoji/table-emoji.component';

const routes: Routes = [
  { path: '', component: TableEmojiComponent, pathMatch: 'full' },
  { path: 'favorite', component: TableEmojiComponent },
  { path: 'deleted', component: TableEmojiComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
