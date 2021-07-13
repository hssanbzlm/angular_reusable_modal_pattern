import { OnDestroy, OnInit } from '@angular/core';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from './shared/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ModalService],
})
export class AppComponent implements OnDestroy, OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
