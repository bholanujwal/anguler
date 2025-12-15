import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { About } from './about/about';
import { Home } from './home/home';
import { ContactUs } from './contact-us/contact-us';
import { Api } from './api/api';
 
export const routes: Routes = [
    {path: "", component: Home},
    { path: "about", component: About },
    {path:"contactUs", component: ContactUs},
    {path:"api", component: Api}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }