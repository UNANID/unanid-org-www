import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "@app/components/index/index.component";

const routes: Routes = [{path: "index", component: IndexComponent}, {path: "**", component: IndexComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule]
})
export class AppRoutingModule {
}
