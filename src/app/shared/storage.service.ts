import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  getUserInfo() {
    return JSON.parse(localStorage.getItem("lc:user-info") || "{}");
  }

  setUserInfo(info: any) {
    localStorage.setItem("lc:user-info", JSON.stringify(info));
  }
}
