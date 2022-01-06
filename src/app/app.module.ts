import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { MidComponent } from './mid/mid.component';
import { FooterComponent } from './footer/footer.component';
import { FooterStripComponent } from './footer-strip/footer-strip.component';
import { FloatingHeaderComponent } from './floating-header/floating-header.component';
import { HeaderSocialComponent } from './header-social/header-social.component';
import { HeaderLinksComponent } from './header-links/header-links.component';
import { ContactStripComponent } from './contact-strip/contact-strip.component';
import { ContactFormFooterComponent } from './contact-form-footer/contact-form-footer.component';
import { AboutUsFooterComponent } from './about-us-footer/about-us-footer.component';
import { QuickLinksFooterComponent } from './quick-links-footer/quick-links-footer.component';
import { BlogFooterComponent } from './blog-footer/blog-footer.component';
import { MidTilesComponent } from './mid-tiles/mid-tiles.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { HeaderSearchFormComponent } from './header-search-form/header-search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    MidComponent,
    FooterComponent,
    FooterStripComponent,
    FloatingHeaderComponent,
    HeaderSocialComponent,
    HeaderLinksComponent,
    ContactStripComponent,
    ContactFormFooterComponent,
    AboutUsFooterComponent,
    QuickLinksFooterComponent,
    BlogFooterComponent,
    MidTilesComponent,
    MainNavigationComponent,
    HeaderSearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
