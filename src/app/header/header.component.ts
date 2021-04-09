import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private dataStorage: DataStorageService, private authService: AuthService) {
  }

  ngOnInit() {
   this.userSub = this.authService.user.subscribe(user => {
     this.isAuthenticated = !!user;
     console.log(!user);
     console.log(!!user);
   });
   if (this.isAuthenticated) {
     this.onFetchData();
   }
  }

  onSaveData() {
    this.dataStorage.storeRecipes();
  }

  onFetchData() {
    this.dataStorage.fetchRecipes().subscribe();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
