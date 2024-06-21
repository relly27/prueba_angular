import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  user: User = { id: 0, name: '', email: '' };
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const existingUser = this.userService.getUser(+id);
      if (existingUser) {
        this.user = { ...existingUser };
        this.isEdit = true;
      }
    }
  }

  saveUser(): void {
    if (this.isEdit) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.addUser(this.user);
    }
    this.router.navigate(['/']);
  }
}
