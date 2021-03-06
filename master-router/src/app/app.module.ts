import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {DialogService} from './dialog.service';

import {AppRoutingModule} from './app-routing.module';
import {HeroModule} from './heroes/heroes.module';
import {CrisisCenterModule} from './crisis-center/crisis-center.module';
import {AdminModule} from './admin/admin.module';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {NotFoundComponent} from './not-found.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,

        HeroModule,
        CrisisCenterModule,
        AdminModule,
        LoginRoutingModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        NotFoundComponent
    ],
    providers:[
        DialogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
