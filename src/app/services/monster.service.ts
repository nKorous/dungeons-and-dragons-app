import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Monster, MonstersResult } from '../interfaces/monster';


const API = environment.api_base

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  constructor(private http: HttpClient) { }

  getMonsterList() {
    return this.http.get<MonstersResult>(`${API}monsters`)
  }

  getMonster(index: string) {
    return this.http.get<Monster>(`${API}monsters/${index}`)
  }
}
