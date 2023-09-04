import { Component, HostListener, OnInit } from '@angular/core';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  frontend: any;
  backend: any;

  constructor(
    private serv: HomepageService
  ) {
    this.frontend = "Ini data dari frontend Lagi";

    window.addEventListener('blur', this.handleBlur.bind(this));
    window.addEventListener('focus', this.handleFocus.bind(this));
  }

  private handleBlur() {
    this.isFirstClick = true;
  }
  private handleFocus() {
    this.getData();
    this.isFirstClick = true; // Reset status klik pertama ketika aplikasi mendapatkan fokus kembali.
  }

  isFirstClick = true;
  @HostListener('document:click')
  handleClick() {
    if (this.isFirstClick) {
      this.getData();
      this.isFirstClick = false;
    }
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.serv.getData().subscribe(
      (data) => {
        this.backend = data[0];
      },
      (error) => {
        console.log('error: ', error);
      }
    );
  }

}
