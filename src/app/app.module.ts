import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PositionsComponent } from './positions/positions.component';
import { CommandsComponent } from './commands/commands.component';
import { MovementsComponent } from './movements/movements.component';


@NgModule({
  declarations: [
    AppComponent,
    PositionsComponent,
    CommandsComponent,
    MovementsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
