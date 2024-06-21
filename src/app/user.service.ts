import { Injectable } from '@angular/core';
import { User } from './user'; // Asegúrate de importar la interfaz User

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private nextId: number = 1;

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  addUser(user: User): void {
    user.id = this.nextId++;
    this.users.push(user);
  }

  updateUser(updatedUser: User): void {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
