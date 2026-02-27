import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-article-create',
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
  templateUrl: './article-create.component.html'
})
export class ArticleCreateComponent {
  articleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private articlesService: ArticlesService,
    private router: Router
  ) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      excerpt: [''],
      coverImage: ['']
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      this.articlesService.create(this.articleForm.value).subscribe({
        next: (response: any) => {
          const article = response.data || response;
          if (article?.id) {
            this.router.navigate(['/articles', article.id]);
          } else {
            this.router.navigate(['/articles']);
          }
        },
        error: (error) => {
          console.error('Error creating article:', error);
        }
      });
    }
  }
}
