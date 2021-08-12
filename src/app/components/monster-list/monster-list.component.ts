import { MonsterService } from './../../services/monster.service';
import { Monster, MonstersResult } from './../../interfaces/monster';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.scss']
})
export class MonsterListComponent implements OnInit {

  monsterList: Monster[] = []


  constructor(private monsterService: MonsterService) { }

  ngOnInit(): void {
    this.getMonsterList()
  }

  getMonsterList() {
    this.monsterService.getMonsterList().subscribe(results => {
      this.monsterList = results.results as Monster[]

      this.monsterList.forEach(m => this.getMonster(m.index))
    })
  }

  getMonster(index: string) {
    this.monsterService.getMonster(index).subscribe(monster => this.updateMonsterList(monster))
  }

  updateMonsterList(monster: Monster) {
    const index = this.monsterList.findIndex(fi => fi.index === monster.index)

    this.monsterList[index] = monster
  }

  navToClickedMonster(index: string) {

  }

}
