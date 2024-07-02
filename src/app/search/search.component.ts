import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserFilterDTO } from '../models/user-filter.dto';
import { UserConformityDTO } from '../models/user-conformity.dto';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  filter: UserFilterDTO = {};
  users: UserConformityDTO[] = [];
  page: number = 0;
  size: number = 15;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSearch() {
    this.page = 0;
    this.loadUsers();
  }

  loadUsers() {
    console.log(this.sanitizeFilter(this.filter));
    this.userService.getUsersByFilter(this.filter, this.page, this.size).subscribe((response) => {
      this.users = response.content;
    });
  }

  private sanitizeFilter(filter: UserFilterDTO): UserFilterDTO {
    const sanitizedFilter: UserFilterDTO = {};
    for (const key in filter) {
      // @ts-ignore
      sanitizedFilter[key] = filter[key] === undefined ? null : filter[key];
      // @ts-ignore
      console.log( filter[key]);
    }
    return sanitizedFilter;
  }

  nextPage() {
    this.page++;
    this.loadUsers();
  }

  previousPage() {
    if (this.page > 0) {
      this.page--;
      this.loadUsers();
    }
  }
}
