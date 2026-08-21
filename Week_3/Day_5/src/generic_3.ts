interface Repository<T> {
  getAll(): T[];
  getById(id: number): T | undefined;
  create(item: T): void;
  delete(id: number): void;
}

interface User {
  id: number;
  name: string;
  email: string;
}


class UserRepository implements Repository<User> {
  private users: User[] = [];

  getAll(): User[] {
    return this.users;
  }

  getById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  create(user: User): void {
    this.users.push(user);
  }

  delete(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}


const userRepo = new UserRepository();

userRepo.create({
  id: 1,
  name: "Ram",
  email: "ram@gmail.com"
});

userRepo.create({
  id: 2,
  name: "Hari",
  email: "hari@gmail.com"
});

console.log("All Users:", userRepo.getAll());

console.log("User with ID 1:", userRepo.getById(1));

userRepo.delete(1);

console.log("After deleting ID 1:", userRepo.getAll());

