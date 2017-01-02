import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RappidModule } from './rappid/rappid.module';
import { HeaderComponent } from './header/header.component';
import { ModelStorageService } from './services/model-storage.service';
import { MaterialModule } from '@angular/material';
import { SaveModelDialogComponent } from './dialogs/save-model-dialog/save-model-dialog.component';
import { LoadModelDialogComponent } from './dialogs/load-model-dialog/load-model-dialog.component';
import { ChooseLinkDialogComponent } from './dialogs/choose-link-dialog/choose-link-dialog.component';
import { OplWidgetComponent } from './opl-widget/opl-widget.component';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig, firebaseAuthConfig } from './config/firbase.config';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SaveModelDialogComponent,
    LoadModelDialogComponent,
    ChooseLinkDialogComponent,
    OplWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RappidModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [ModelStorageService, AuthService],
  entryComponents: [
    SaveModelDialogComponent,
    LoadModelDialogComponent,
    ChooseLinkDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
