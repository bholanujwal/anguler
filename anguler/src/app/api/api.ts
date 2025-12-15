import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api.html',
  styleUrl: './api.css',
})



export class Api implements OnInit {

  todos: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos() {
    this.loading = true;

    this.apiService.getTodo().subscribe({
      next: (req) => {
        this.todos = req
        this.loading = false;
      },
                                           
      error: () => {
        this.error = "something went wrong while fetching the todos"
        this.loading = false;
      }
    })
  }
}
