import { Routes } from '@angular/router';

export const ARTICLES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/article-list/article-list.component').then(m => m.ArticleListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./components/article-create/article-create.component').then(m => m.ArticleCreateComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./components/article-detail/article-detail.component').then(m => m.ArticleDetailComponent)
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./components/article-edit/article-edit.component').then(m => m.ArticleEditComponent)
  }
];
