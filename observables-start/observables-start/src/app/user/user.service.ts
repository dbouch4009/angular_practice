import {Injectable, Inject, EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';

@Inject({ProvidedIn: 'root'})
export class UserService{
    activatedEmitter = new Subject<boolean>();
}