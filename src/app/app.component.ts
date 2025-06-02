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
    { src: 'assets/tech/flask.svg', alt: 'Flask' },
    { src: 'assets/tech/docker.svg', alt: 'Docker' },
  ];

  get techStackInfinite() {
    return [...this.techStack, ...this.techStack];
  }

  activeSection: 'about' | 'resume' | 'portfolio' | 'certifications' | 'contact' = 'about';

  setSection(section: 'about' | 'resume' | 'portfolio' | 'certifications' | 'contact') {
    this.activeSection = section;
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    alert('¡Copiado al portapapeles!');
  }

  sendMail(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    const mailto = `mailto:kevinsteven7497@gmail.com?subject=Mensaje de ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nContacto: ' + email)}`;
    window.open(mailto, '_blank');
    form.reset();
  }

  isLightTheme = false;

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
    document.body.classList.toggle('light-theme', this.isLightTheme);
  }
}
