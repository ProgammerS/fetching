import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { FormPageComponent } from './components/form-page/form-page.component';
import { NewsComponent } from './components/news/news.component';
import { EventComponent } from './components/event/event.component';
import { AddeventComponent } from './components/addevent/addevent.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'event', component: EventComponent },
  { path: 'add-event', component: AddeventComponent },
  { path: 'api-data', component: PostComponent },

];
