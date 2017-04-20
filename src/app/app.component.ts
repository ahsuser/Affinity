import { Component, ChangeDetectionStrategy} from '@angular/core';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import {TabsModule} from 'ng2-bootstrap';

@Component({
  selector: 'ahsd-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.css'],
  providers: [] 
})
export class AppComponent {
  
  
  public users = [
		{ id: '0', name: 'Service', url: "" },
		{ id: '1', name: 'Sales', url: "" },
		{ id: '2', name: 'Purchace', url: "" }
	];
	public tabs =[
		{ title: 'Home', content: 'Home tab',active: true ,id:0 ,prevId:null}
	];
	public counter: number = 0;
  constructor() {
	
  }
  addTab(data) {
	let id:number = this.counter + 1;
	let recentCheck:number = 0;
	let tabNumber:number = 0;
	for (let tab of this.tabs) {
		if(tab.prevId == data.id){
			tabNumber = tab.id;
			recentCheck++;
		}
	}
	console.log(recentCheck);
	if(recentCheck == 0){
		this.tabs.push({ title: data.name, content: 'Tab ' + data.name ,active: true,id:id,prevId:data.id });
		console.log(this.tabs);
		this.counter++;
		for (let tab of this.tabs) {
			if(tab.id == id){
				
				this.tabs[tab.id].active = true;
			}else{
				this.tabs[tab.id].active = false;
				console.log(this.tabs[tab.id].active);
			}
		}
	}
    else{
		for (let tab of this.tabs) {
			if(tab.id == tabNumber){
				this.tabs[tabNumber].active = true;
			}else{
				this.tabs[tab.id].active = false;
			}
		}
	}
	
  };
	
}
