import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import {ImageUploadModule} from "./shared/image-upload/image-upload.module";

import {ImageUploadComponent} from "./shared/image-upload/image-upload.component";
import {FileDropDirective} from "./shared/image-upload/file-drop.directive";
import {ImageService} from "./shared/image-upload/image.service";

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, AboutModule, HomeModule, SharedModule.forRoot()],
  declarations: [AppComponent, ImageUploadComponent,
  FileDropDirective],
  providers: [ImageService,{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule
      // providers: [ ImageService ]
    }
  }
}
