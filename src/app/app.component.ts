import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curriculum';

  techStack = [
    { src: 'assets/tech/java.svg', alt: 'Java' },
    { src: 'assets/tech/python.svg', alt: 'Python' },
    { src: 'assets/tech/google-cloud.svg', alt: 'Google Cloud Platform' },
    { src: 'assets/tech/angular.svg', alt: 'Angular' },
    { src: 'assets/tech/nodejs.svg', alt: 'Node.js' },
    { src: 'assets/tech/javascript.svg', alt: 'JavaScript' },
    { src: 'assets/tech/html.svg', alt: 'HTML' },
    { src: 'assets/tech/azure.svg', alt: 'Azure' },
    { src: 'assets/tech/django.svg', alt: 'django' },
    { src: 'assets/tech/mariadb.svg', alt: 'MariaDb' },
    { src: 'assets/tech/flask.svg', alt: 'Flask' }
  ];

  get techStackInfinite() {
    return [...this.techStack, ...this.techStack];
  }
}
