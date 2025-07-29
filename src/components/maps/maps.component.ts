import { CommonModule, isPlatformBrowser} from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, PLATFORM_ID, Inject} from '@angular/core';
declare const jsVectorMap: any;

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformID: object){}
  @ViewChild ('worldMap', {static: false}) worldMapRef!: ElementRef;

  ngAfterViewInit(): void{
    if (isPlatformBrowser(this.platformID)) {
      const mapElement = this.worldMapRef.nativeElement;

      new jsVectorMap({
        selector: mapElement,
        map: 'world',
        zoomButtons: true,
      });
    }
  }
}