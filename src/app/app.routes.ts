import { Routes } from '@angular/router';
import { TableBasicExample } from './ui/table/table.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
    { 
        path: 'home',
        component: TableBasicExample,
        title: 'Inicio'
      },
    
    {
        path: '',
        component: AppComponent,
        title: 'init'
    }
];
