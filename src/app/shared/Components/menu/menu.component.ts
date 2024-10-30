import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [

  ],

})
export class MenuComponent {
  public menuitems: MenuItem[] | undefined;

  ngOnInit() {
      this.menuitems = [
          { label: 'New', icon: 'pi pi-plus' },
          { label: 'Search', icon: 'pi pi-search' }
      ];
  }

}
