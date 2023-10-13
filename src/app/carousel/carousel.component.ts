import { Component, OnInit, Input } from '@angular/core';

interface carouselImage{
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() images: carouselImage[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;

  selectedIndex = 0;

  ngOnInit(): void{
    if(this.autoSlide){
      this.autoSlideImages()
    }
  }

  autoSlideImages(): void{
    setInterval(() => {
      this.nextClick();
    }, this.slideInterval)
  }

  selectImage(index: number): void{
    this.selectedIndex = index;
  }

  previousClick(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1;
    }
    else{
      this.selectedIndex--;
    }

  }

  nextClick(): void{
    if(this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0;
    }
    else{
      this.selectedIndex++;
    }

  }

}
