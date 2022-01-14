import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/classes/user.class';

@Injectable({
	providedIn: 'root'
})
export class UserRestService {

	constructor() { }

	public currentUser: any = new BehaviorSubject<any>(null);
}
