import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit{
  constructor(private http : HttpClient) {}
  @Input() version! : 'navbar' | 'more';

  // icons = [
  //   {icon_url:'assets/rp.png', name: 'Rp'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Marriage'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Divorce'},
  //   {icon_url: 'http://placehold.co/28x28', icon_name: 'Reels'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Elopement'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Birthday'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Marriage'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Divorce'},
  //   {icon_url: 'http://placehold.co/28x28', icon_name: 'Reels'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Elopement'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Party'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Marriage'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Divorce'},
  //   {icon_url: 'http://placehold.co/28x28', icon_name: 'Reels'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Elopement'},
  //   {icon_url:'assets/rp.png', icon_name: 'Rp'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Marriage'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Divorce'},
  //   {icon_url: 'http://placehold.co/28x28', icon_name: 'Reels'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Elopement'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Birthday'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Marriage'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Divorce'},
  //   {icon_url: 'http://placehold.co/28x28', icon_name: 'Reels'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Elopement'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Party'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Marriage'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Divorce'},
  //   {icon_url: 'http://placehold.co/28x28', icon_name: 'Reels'},
  //   {icon_url:'http://placehold.co/28x28', icon_name: 'Elopement'},
  // ]

  iconTypes : {name: string, id: number}[] = [
    {name : 'Photography', id:1},
    {name:'Videography', id:2},
    {name:'Editors', id:3},
    {name:'Event Enhancement', id:4},
    {name:'Rental', id:5}
  ];
  groupedIcons : {[key:string]: any[]} = {};
  activeIconIndex: number = 0

  newIcon: { [key: string]: { icon_name: string, icon_url: File | null , is_hide? : boolean} } = {};
  navbarIcons : any[] = []
  
  // Fetching Icon from Backend
  ngOnInit(): void {
    this.iconTypes.forEach(type => {
      // console.log('Fetching icons for type:', type.name); 
      this.fetchIcons(type.name);
      this.newIcon[type.name] = { icon_name: '', icon_url: null };
    })
  }

  fetchIcons(type: string): void {
    this.http.get<any[]>(`http://192.168.0.105:8010/event/icon/list/?type_name=${type}`).subscribe({
      next:(res: any) => {
      // this.groupedIcons[type] = res;
      this.groupedIcons = {...this.groupedIcons,[type]: res};
      console.log(`icon for ${type}:`, res)
    },
    error: err => {
      console.log(`Error is`,err)
    }

  })
  }
  moreOptions : boolean = false;
  showMore(): void {
    this.moreOptions = !this.moreOptions
    console.log(this.moreOptions)
  }

  showUpload : string | null = null;
  openUpload(type: string): void {
    this.showUpload = this.showUpload === type ? null : type;
  }

  // Add and Upload File
  onFileSelected(event: any, type: string): void {
    const file: File = event.target.files[0];
    if (file) {
        this.newIcon[type].icon_url = file;
    };
  }

  addIcon(type: {name: string, id:number}): void {
    if (this.isUpdateMode) {
      this.update(type.name);
      return;
    }

    const iconData = this.newIcon[type.name];
    if (!iconData.icon_name || !iconData.icon_url) return;

    const formData = new FormData();
    formData.append('business_type_id', type.id.toString());
    // formData.append('business_type_id', iconData.business_type_id.toString())
    formData.append('name', iconData.icon_name);
    formData.append('icon_url', iconData.icon_url!, iconData.icon_url!.name);

    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });
    this.http.post(`http://192.168.0.105:8010/event/create/icon/subtype`, formData).subscribe({
      next: (res) => {
        console.log('icon Created', res);
        this.fetchIcons(type.name);
        this.showUpload = null;
        this.newIcon[type.name] = {'icon_name':'', icon_url: null}
      },
      error: (err) => {
        console.error(`error is: `, err)
      }
    });
  }

  // update existing Icon
  updateIconId : number | null = null;
  isUpdateMode : boolean = false;
  
  editIcon(icon: any, typeName: string): void {
    console.log("editing Icon: ", icon);
    this.showUpload = typeName;
    this.isUpdateMode = true;
    this.updateIconId = icon.icon_id
    this.newIcon[typeName] = {
      icon_name: icon.icon_name,
      icon_url: null,
      is_hide: icon.is_hide || false
    };
  }
  
  update(typeName: string): void {
    const iconData = this.newIcon[typeName];

    const formData = new FormData();
    if (iconData.icon_name) formData.append('icon_name', iconData.icon_name);
    if (iconData.icon_url) formData.append('icon_url', iconData.icon_url);
    formData.append('is_hide', iconData.is_hide ? 'true': 'false');

    this.http.patch(`http://192.168.0.105:8010/event/event-icon/update/${this.updateIconId}/`, formData).subscribe({
      next: res => {
        console.log('Icon Updated', res);
        this.fetchIcons(typeName);
        this.newIcon[typeName] = { icon_name: '', icon_url: null, is_hide: false };
        this.isUpdateMode = false;
        this.updateIconId = null;
        this.showUpload = null;
      },
      error: (err) => {
        console.error('Error updating icon:', err);
      }
    })
  }

  // Adding and remove Icon to nav-bar
  addToNavbar(subtype_id: number, icon: any): void {
    const payload = {
      items: [{subtype: subtype_id}]
    }
    this.http.post(`http://192.168.0.105:8010/event/navigational-bar/bulk-create/`,payload).subscribe({
      next: (res) => {
        icon.is_hide = false;
        
        const exist = this.navbarIcons.some(i => i.icon_id === icon.icon_id);
        if(!exist){
          this.navbarIcons.push({...icon, subtype_id})
        }
        console.log('Icons In icon navbar is: ', this.navbarIcons)
      }, 
      error: (err) => {
        console.error('error is: ' ,err)
      }
    });
  }

  removeFromNavbar(subtype_id: number, icon: any): void {
    console.log(`removeFromNavbar():`, subtype_id, icon)
    const navigational_bar_id = subtype_id;
    this.http.delete(`http://192.168.0.105:8010/event/navigation/delete/${navigational_bar_id}/`).subscribe({
      next: res => {
        console.log('removed from navbar', res);
        this.navbarIcons = this.navbarIcons.filter(i => i.icon_id !== icon.icon_id);
        icon.is_hide = true;
      },
      error: err => {
        console.log('failed to remove Icon: ', err);
      }
    })
  }
}


