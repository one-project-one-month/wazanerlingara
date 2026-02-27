import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './article-edit.component.html'
})
export class ArticleEditComponent implements OnInit {
  articleForm: FormGroup | null = null;
  articleId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private articlesService: ArticlesService
  ) {}

  ngOnInit() {
    this.articleId = this.route.snapshot.paramMap.get('id') || '';
    this.articlesService.getById(this.articleId).subscribe({
      next: (response: any) => {
        const article = response.data || response;
        this.articleForm = this.fb.group({
          title: [article.title, Validators.required],
          content: [article.content, Validators.required],
          excerpt: [article.excerpt || ''],
          coverImage: [article.coverImage || '']
        });
      },
      error: (error) => {
        console.error('Error loading article:', error);
      }
    });
  }

  onSubmit() {
    if (this.articleForm && this.articleForm.valid) {
      this.articlesService.update(this.articleId, this.articleForm.value).subscribe({
        next: () => {
          this.router.navigate(['/articles', this.articleId]);
        },
        error: (error) => {
          console.error('Error updating article:', error);
        }
      });
    }
  }
}
