import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article, CreateArticleRequest, UpdateArticleRequest } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private apiUrl = 'http://localhost:5000/api/articles';

  constructor(private http: HttpClient) {}

  getAll(query?: any): Observable<any> {
    return this.http.get<Article[]>(this.apiUrl, { params: query });
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(article: CreateArticleRequest): Observable<any> {
    return this.http.post<any>(this.apiUrl, article);
  }

  update(id: string, article: UpdateArticleRequest): Observable<Article> {
    return this.http.put<Article>(`${this.apiUrl}/${id}`, article);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  publish(id: string): Observable<Article> {
    return this.http.post<Article>(`${this.apiUrl}/${id}/publish`, {});
  }

  unpublish(id: string): Observable<Article> {
    return this.http.post<Article>(`${this.apiUrl}/${id}/unpublish`, {});
  }
}
