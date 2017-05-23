import { Component } from '@angular/core';
import { NavController, PopoverController  } from 'ionic-angular';
import { AddPage } from '../add/add';
import { MenuPopover } from '../popovers/menu-popover';

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class OverviewPage {
  currentTab:string='contact';
  showSearch:boolean=false;
  searchText:string='';
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }
  public pushAddPage():void{
    this.navCtrl.push(AddPage);
  }
  public showMenuPopover(event: TouchEvent):void{
    let popover = this.popoverCtrl.create(MenuPopover);
    popover.present({
      ev: event
    });
  }
  public toggleShowSearch():void{
    this.showSearch=!this.showSearch;
  }
  public onSearchCancel(event):void{
    this.toggleShowSearch();
  }
  public onSearchInput(event):void{

  }
}
