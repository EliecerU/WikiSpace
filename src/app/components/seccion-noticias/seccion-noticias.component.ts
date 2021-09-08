import { Component, OnInit } from '@angular/core';
import { WikiAppService } from 'src/app/services/wikiapp-service.service';

@Component({
  selector: 'app-seccion-noticias',
  templateUrl: './seccion-noticias.component.html',
  styleUrls: []
})
export class SeccionNoticiasComponent {
  
  nuevasNoticias:any[]=[];
  loading:boolean;

  constructor(private wikiApp: WikiAppService) { 
    this.loading = true;
    this.wikiApp.getNew().
    subscribe( (data:any)=>{
      this.nuevasNoticias = data.data;
      this.loading = false;
      console.log(data);
    } )
  }
}
