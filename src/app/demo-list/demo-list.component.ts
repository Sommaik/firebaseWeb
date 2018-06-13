import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Router } from '@angular/router';
import { Demo } from '../shared/model/demo';

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.css']
})
export class DemoListComponent implements OnInit {

  _data;

  constructor(
    private _fireStore: AngularFirestore,
    private router: Router
  ) { 

  }

  ngOnInit() {
    this._data = this._fireStore.collection('items', ref => ref.orderBy("name")).valueChanges();
  }

  onDelete(item){
    let doc = this._fireStore.doc(`/items/${item.code}`);
    doc.delete().then((ret)=>{
      console.log("this is a remove")
    })
  }

  onAdd(){
    this.router.navigate(["admin", "demo-form"]);
  }
  onEdit(item: Demo) {
    this.router.navigate(["admin", "demo-form", "EDIT", item.code]); // localhost/admin/demo-form/EDIT/001
  }

}
