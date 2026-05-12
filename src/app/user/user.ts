import { Component, Input, input, computed, Output, EventEmitter, output } from '@angular/core';

// type Usertype = {
//   id: string;
//   avatar: string;
//   name: string;
// }

interface Usertype {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  @Input({required: true}) user!: Usertype;
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
